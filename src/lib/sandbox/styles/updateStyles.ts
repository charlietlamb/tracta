export function updateStyles(
  editorState: EditorState,
  selectedId: string,
  styles: React.CSSProperties,
  getComponent: (
    editorState: EditorState,
    id: string,
  ) => TractaComponent | undefined,
  updateComponent: (
    editorState: EditorState,
    component: TractaComponent,
  ) => void,
) {
  const selected = getComponent(editorState, selectedId)
  if (!selected) return
  const updatedSelected = {
    ...selected,
    styles: {
      ...selected.styles,
      ...styles,
    },
  }
  updateComponent(editorState, updatedSelected)
}
