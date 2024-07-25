import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function POST(request) {
  const { html } = await request.json()

  if (!html) {
    return NextResponse.json(
      { error: 'HTML content is required' },
      { status: 400 },
    )
  }

  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setContent(html, { waitUntil: 'networkidle0' })
    const pdfBuffer = await page.pdf({ format: 'A4' })

    await browser.close()

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=generated.pdf',
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 },
    )
  }
}
