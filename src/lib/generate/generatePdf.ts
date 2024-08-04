// import { FileforgeClient } from '@fileforge/client'

// export async function generatePdf(ff: FileforgeClient) {
//   try {
//     const pdfStream = await ff.pdf.generate(
//       [
//         new File(
//           [
//             `<!DOCTYPE html>
// <html>
//     <head>
//         <title>My First Document</title>
//     </head>
//     <body>
//         <h1>Hello World!</h1>
//     </body>
// </html>
// `,
//           ],
//           'index.html',
//           {
//             type: 'text/html',
//           },
//         ),
//       ],
//       {
//         options: {
//           host: false, // default
//         },
//       },
//       {
//         timeoutInSeconds: 30,
//       },
//     )
//     console.log(pdfStream)
//     // pdfStream.pipe(fs.createWriteStream('./result.pdf'))
//   } catch (error) {
//     console.error('Error during PDF conversion:', error)
//   }
// }
