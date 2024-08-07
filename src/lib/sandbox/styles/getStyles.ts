export function getStyles(
  styles: React.CSSProperties,
  width: number,
): React.CSSProperties {
  const a4Width = 794
  const ratio = width / a4Width
  return {
    ...styles,
    fontSize: getStyle(styles.fontSize, ratio),
    lineHeight: getStyle(styles.lineHeight, ratio),
    padding: getStyle(styles.padding, ratio),
    margin: getStyle(styles.margin, ratio),
    width: getStyle(styles.width, ratio),
    height: getStyle(styles.height, ratio),
  }
}

export function getStyle(str: string | number | undefined, ratio: number) {
  if (str === undefined) {
    console.log('--STYLE UNDEFINED--')
    return undefined
  }
  if (typeof str === 'string' && str.includes('%')) return str
  const intStyle =
    typeof str === 'number' ? str : parseInt(str?.replace('px', ''))
  return `${intStyle * ratio}px`
}
