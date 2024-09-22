export const defaultStyles: React.CSSProperties = {
  backgroundPosition: 'center',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  textAlign: 'start',
  opacity: '100%',
  fontSize: '16px',
  lineHeight: '16px',
  fontWeight: '400',
  fontFamily: 'Larken',
  color: '#000000',
  width: 'auto',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff00',
  borderWidth: '0px',
  borderStyle: 'none',
  borderColor: '#000000',
  padding: '0px',
}

export const defaultStylesBody: React.CSSProperties = {
  ...defaultStyles,
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  padding: '16px',
}

export const defaultTextStyles: React.CSSProperties = {
  ...defaultStyles,
  padding: '4px',
}

export const defaultHeadingStyles: React.CSSProperties = {
  ...defaultStyles,
  fontSize: '32px',
  lineHeight: '32px',
  fontWeight: '600',
  padding: '4px',
}

export const defaultStylesContainer: React.CSSProperties = {
  ...defaultStyles,
  width: '100%',
  height: 'auto',
  padding: '4px',
}
