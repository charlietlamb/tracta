// export function sortKeys(values: Record<string, unknown>) {
//   return Object.keys(values).sort((a, b) => {
//     const aParts = a.split('.').map(Number)
//     const bParts = b.split('.').map(Number)

//     for (let i = 0; i < aParts.length; i++) {
//       if (bParts.length - 1 < i) {
//         return 1
//       }

//       if (aParts[i] > bParts[i]) {
//         return 1
//       }

//       if (aParts[i] < bParts[i]) {
//         return -1
//       }
//     }

//     return aParts.length < bParts.length ? -1 : 0
//   })
// }

export function sortKeys(values: Record<string, unknown>) {
  return Object.keys(values)
    .filter((key) => !key.includes('.'))
    .sort()
}
