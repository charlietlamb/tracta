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
    paddingLeft: getStyle(styles.paddingLeft, ratio),
    paddingRight: getStyle(styles.paddingRight, ratio),
    paddingTop: getStyle(styles.paddingTop, ratio),
    paddingBottom: getStyle(styles.paddingBottom, ratio),
    width: getStyleAuto(styles.width, ratio),
    height: getStyleAuto(styles.height, ratio),
    borderWidth: getStyle(styles.borderWidth, ratio),
    borderTopWidth: getStyle(styles.borderTopWidth, ratio),
    borderRightWidth: getStyle(styles.borderRightWidth, ratio),
    borderBottomWidth: getStyle(styles.borderBottomWidth, ratio),
    borderLeftWidth: getStyle(styles.borderLeftWidth, ratio),
    borderRadius: getStyle(styles.borderRadius, ratio),
    borderTopLeftRadius: getStyle(styles.borderTopLeftRadius, ratio),
    borderTopRightRadius: getStyle(styles.borderTopRightRadius, ratio),
    borderBottomRightRadius: getStyle(styles.borderBottomRightRadius, ratio),
    borderBottomLeftRadius: getStyle(styles.borderBottomLeftRadius, ratio),
  }
}

export function getStyle(str: string | number | undefined, ratio: number) {
  if (str === undefined) {
    // console.log('--STYLE UNDEFINED--')
    return undefined
  }
  if (typeof str === 'string' && str.includes('%')) return str
  const intStyle =
    typeof str === 'number' ? str : parseInt(str?.replace('px', ''))
  return `${intStyle * ratio}px`
}

export function getStyleAuto(str: string | number | undefined, ratio: number) {
  if (str === undefined) {
    // console.log('--STYLE UNDEFINED--')
    return undefined
  }
  if (str === 'auto') return 'auto'
  if (typeof str === 'string' && str.includes('%')) return str
  const intStyle =
    typeof str === 'number' ? str : parseInt(str?.replace('px', ''))
  return `${intStyle * ratio}px`
}
