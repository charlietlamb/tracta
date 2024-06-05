import { saveAs } from 'file-saver'
import { toPdf } from '@/tex/toPdf'

// Used to export the file into a .docx file
export async function gen() {
  const pdf = await toPdf(`\\documentclass{article}
\\usepackage{graphicx} % Required for inserting images

\\title{contract}
\\author{charlielamb20 }
\\date{June 2024}

\\begin{document}

\\maketitle

\\section{Introduction}

\\end{document}
`)
  saveAs(new Blob([pdf]), 'contract.pdf')
}
