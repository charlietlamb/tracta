'use server'

import { FileforgeClient } from '@fileforge/client'
import fs from 'fs'

const ff = new FileforgeClient({
  apiKey: process.env.FILEFORGE_API_KEY,
})

export async function gen(html: string): Promise<Buffer | null> {
  try {
    const pdfStream = await ff.pdf.generate(
      [
        new File([html], 'index.html', {
          type: 'text/html',
        }),
      ],
      {
        options: {
          host: false, // default
          test: true,
          margin: 0,
        },
      },
      {
        timeoutInSeconds: 30,
      },
    )
    const writeStream = fs.createWriteStream('./result.pdf')
    pdfStream.pipe(writeStream)

    // Wait for the stream to finish
    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve)
      writeStream.on('error', reject)
    })

    // Read the file into a buffer
    const pdfBuffer = await fs.promises.readFile('./result.pdf')

    return pdfBuffer
  } catch (e) {
    console.error(e)
    return null
  }
}
