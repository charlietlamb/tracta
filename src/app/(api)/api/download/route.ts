import { DocumentCreator } from '../../cv-generator'
import { Packer } from 'docx'
import mammoth from 'mammoth'
import puppeteer from 'puppeteer'
import { Blob } from 'buffer'

export async function GET(request : Request) {
  const { experiences, education, skills, achievements } = request.json()
  const documentCreator = new DocumentCreator()
  const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements,
    ])
    
  const buffer = await Packer.toBuffer(doc)
  const html = await mammoth.convertToHtml({ buffer: buffer })
    
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
    
  await page.setContent(html.value)
  const pdfBuffer = await page.pdf({ format: 'A4' })
    
  // Convert the Blob to a Buffer
  const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' })
  const pdfBufferFromBlob = Buffer.from(await pdfBlob.arrayBuffer())
    
  return new Response(pdfBufferFromBlob, { status: 200, headers: { 'Content-Type': 'application/pdf' } })
}