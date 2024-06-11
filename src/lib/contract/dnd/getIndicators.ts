export const getIndicators = () => {
  return Array.from(
    document.querySelectorAll(
      `[data-indicator="true"]`,
    ) as unknown as HTMLElement[],
  )
}
