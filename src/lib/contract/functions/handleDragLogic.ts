import { Dispatch, SetStateAction } from 'react'

function findTractaByKey(tracta: Tracta, key: string): Tracta | null {
  if (tracta.key === key) {
    return tracta
  } else if (tracta.children) {
    for (let child of tracta.children) {
      let found = findTractaByKey(child, key)
      return found
    }
  }
  return null
}

function removeTractaByKey(tracta: Tracta, key: string): void {
  if (tracta.children) {
    tracta.children = tracta.children.filter((child) => child.key !== key)
    for (let child of tracta.children) removeTractaByKey(child, key)
  }
}

function updateTractaKeys(tracta: Tracta, newKey: string): void {
  tracta.key = newKey + tracta.key.split('.').pop()!
  if (tracta.children) {
    tracta.children.forEach((child, i) => {
      updateTractaKeys(child, `${newKey}.${i + 1}`)
    })
  }
}

export function handleDragLogic(
  drag: string,
  drop: string,
  json: Contract,
  setJson: Dispatch<SetStateAction<Contract>>,
): void {
  if (!json || !json.content) {
    return
  }

  // Find the drag tracta and its new parent
  let dragTracta: Tracta | null = null
  let dropTracta: Tracta | null = null
  json.content.forEach((tracta: Tracta) => {
    if (!dragTracta) dragTracta = findTractaByKey(tracta, drag)
    if (!dropTracta) dropTracta = findTractaByKey(tracta, drop)
  })
  if (!dragTracta || !dropTracta)
    throw Error('Drag or drop Tracta is not found')

  // Remove the drag tracta from its current parent
  json.content.forEach((tracta: Tracta) => {
    removeTractaByKey(tracta, drag)
  })

  // Update the keys of the drag tracta and its children
  let newKey = `${dropTracta.key}.${dropTracta.children ? dropTracta.children.length + 1 : 1}`
  updateTractaKeys(dragTracta, newKey)

  // Add the drag tracta to the children of the drop tracta
  if (!dropTracta.children) dropTracta.children = []
  dropTracta.children.push(dragTracta)

  // Update the JSON state
  setJson({ ...json })
}
