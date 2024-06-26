// SwiftLaTeX engines
import { XeTeXEngine } from '@/swift-latex/XeTeXEngine'
import { DvipdfmxEngine } from '@/swift-latex/DvipdfmxEngine'

// Redux store and actions
import {
  setReadyEngineStatus,
  setBusyEngineStatus,
  setErrorEngineStatus,
} from '@/lib/slice/engine/engineSlice'
import {
  setPdfUrl,
  setCompilerLog,
  setShowCompilerLog,
} from '@/lib/slice/tex/texSlice'
import { Dispatch } from '@reduxjs/toolkit'

// Global LaTeX engine objects
const xetexEngine = new XeTeXEngine(),
  dviEngine = new DvipdfmxEngine()

export const initializeLatexEngines = async (dispatch: Dispatch) => {
  //* Wrapped in try ... catch to ignore multiple engine error message
  console.log('1')
  try {
    // Initialize the XeTeX engine
    await xetexEngine.loadEngine()
  } catch (e: any) {
    // if (e.message !== 'Other x instance is running, abort()') throw e
  }
  console.log('2')
  // try {
  //   // Initialize the DviPdfMx engine
  //   console.log('loading dvi')
  //   await dviEngine.loadEngine()
  // } catch (e: any) {
  //   console.log(e)
  //   if (e.message !== 'Other d instance is running, abort()') throw e
  // }
  // // Set the engine status to be ready
  // console.log('3')
  // console.log('got here')
  // dispatch(setReadyEngineStatus())
}

export const compileLatex = async (latexCode: string, dispatch: Dispatch) => {
  // Make sure both engines are ready for compilation
  if (!xetexEngine.isReady() || !dviEngine.isReady()) {
    console.log('Engine not ready yet!')
    return
  }

  // Set the engine status to be busy
  dispatch(setBusyEngineStatus())

  // Create a temporary main.tex file
  xetexEngine.writeMemFSFile('main.tex', latexCode)
  // Associate the XeTeX engine with this main.tex file
  xetexEngine.setEngineMainFile('main.tex')
  // Compile the main.tex file
  let xetexCompilation = await xetexEngine.compileLaTeX()
  // Print the compilation log
  console.log(xetexCompilation.log)
  dispatch(setCompilerLog(xetexCompilation.log))

  // On successfull first compilation continue with the second one
  if (xetexCompilation.status === 0) {
    // Create a temporary main.xdv file from the XeTeX compilation result
    dviEngine.writeMemFSFile('main.xdv', xetexCompilation.pdf)
    // Associate the DviPdfMx engine with this main.xdv file
    dviEngine.setEngineMainFile('main.xdv')
    // Compile the main.tex file
    let dviCompilation = await dviEngine.compilePDF()
    // Create a blob out of the resulting PDF
    const pdfBlob = new Blob([dviCompilation.pdf], { type: 'application/pdf' })
    // Create a temporary URL to this PDF blob
    dispatch(setPdfUrl(URL.createObjectURL(pdfBlob)))
    dispatch(setShowCompilerLog(false))
    // After compilation, the engine is ready again
    dispatch(setReadyEngineStatus())
  } else {
    // If the compilation failed, reflect it with an error
    dispatch(setErrorEngineStatus())
  }
}

export const revokeCompiledPdfUrl = (pdfUrl: string) => {
  // Revoke the temporary URL to the PDF blob created in `compileLatex()`
  URL.revokeObjectURL(pdfUrl)
  console.log('Revoked URL')
}
