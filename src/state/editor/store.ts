import { create } from 'zustand'
import addComponent from './functions/addComponent'
import updateComponent from './functions/updateComponent'
import deleteComponent from './functions/deleteComponent'
import getComponent from './functions/getComponent'
import { defaultStylesBody } from '@/lib/styles'
import getEditorIdArray from './functions/getEditorComponentArray'
import getEditorComponentArray from './functions/getEditorComponentArray'
import getComponentParent from './functions/getComponentParent'

const initEditor: Editor = {
  settings: {
    title: 'Tracta',
    template: false,
  },
  styleOptions: {
    linkedBorder: true,
  },
  liveMode: false,
  pages: 1,
  components: [
    {
      id: '1',
      tracta: 'body',
      name: 'Body',
      styles: defaultStylesBody,
      content: [],
    },
  ],
  selected: null,
  variables: {},
}

const initHistory: EditorHistory = {
  editors: [initEditor],
  index: 0,
}

const initState: EditorState = {
  editor: initEditor,
  history: initHistory,
}

type EditorStore = {
  editorState: EditorState
  setEditorState: (value: EditorState) => void
  addComponent: (
    editorState: EditorState,
    component: TractaComponent,
    containerId: string,
  ) => void
  updateComponent: (
    editorState: EditorState,
    component: TractaComponent,
  ) => void
  getComponent: (
    editorState: EditorState,
    id: string,
  ) => TractaComponent | undefined
  deleteComponent: (
    editorState: EditorState,
    component: TractaComponent,
  ) => void
  changeClickedComponent: (
    editorState: EditorState,
    component: TractaComponent,
  ) => void
  redo: (editorState: EditorState) => void
  undo: (editorState: EditorState) => void
  load: (editorState: EditorState, editor: Editor) => void
  getComponentArray: (editorState: EditorState) => TractaComponent[]
  getParent: (
    editorState: EditorState,
    component: TractaComponent,
  ) => TractaComponent | null
  toggleLiveMode: (editorState: EditorState) => void
}

export const useEditorStore = create<EditorStore>((set) => ({
  editorState: initState,
  setEditorState: (editorState: EditorState) => set({ editorState }),

  //ADD COMPONENT
  addComponent: (
    editorState: EditorState,
    component: TractaComponent,
    containerId: string,
  ) => {
    const newComponents = addComponent(
      editorState.editor.components,
      component,
      containerId,
    )
    const updatedEditor = {
      ...editorState.editor,
      components: newComponents,
    }
    const updatedHistory = {
      ...editorState.history,
      editors: [
        ...editorState.history.editors.slice(0, editorState.history.index + 1),
        { ...updatedEditor },
      ],
      index: editorState.history.index + 1,
    }
    const updatedState = {
      ...editorState,
      editor: {
        ...editorState.editor,
        components: newComponents,
      },
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },

  //UPDATE COMPONENT
  updateComponent: (editorState: EditorState, component: TractaComponent) => {
    const newComponents = updateComponent(
      editorState.editor.components,
      component,
    )

    const isSelected = editorState.editor.selected
      ? editorState.editor.selected.id === component.id
      : false

    const updatedEditor = {
      ...editorState.editor,
      selected: isSelected ? component : null,
      components: newComponents,
    }
    const updatedHistory = {
      ...editorState.history,
      editors: [
        ...editorState.history.editors.slice(0, editorState.history.index + 1),
        { ...updatedEditor },
      ],
      index: editorState.history.index + 1,
    }
    const updatedState = {
      ...editorState,
      editor: {
        ...editorState.editor,
        components: newComponents,
      },
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },
  //GET COMPONENT
  getComponent: (
    editorState: EditorState,
    id: string,
  ): TractaComponent | undefined => {
    return getComponent(editorState.editor.components, id)
  },

  //DELETE COMPONENT
  deleteComponent: (editorState: EditorState, component: TractaComponent) => {
    const newComponents = deleteComponent(
      editorState.editor.components,
      component,
    )
    const updatedEditor = {
      ...editorState.editor,
      components: newComponents,
    }
    const updatedHistory = {
      ...editorState.history,
      editors: [
        ...editorState.history.editors.slice(0, editorState.history.index + 1),
        { ...updatedEditor },
      ],
      index: editorState.history.index + 1,
    }
    const updatedState = {
      ...editorState,
      editor: {
        ...editorState.editor,
        components: newComponents,
      },
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },

  //CHANGE CLICKED COMPONENT
  changeClickedComponent: (
    editorState: EditorState,
    component: TractaComponent,
  ) => {
    const updatedEditor = {
      ...editorState.editor,
      selected: component,
    }
    const updatedHistory = {
      ...editorState.history,
      editors: [
        ...editorState.history.editors.slice(0, editorState.history.index + 1),
        { ...updatedEditor },
      ],
      index: editorState.history.index + 1,
    }
    const updatedState = {
      ...editorState,
      editor: {
        ...editorState.editor,
        selected: component,
      },
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },

  //REDO
  redo: (editorState: EditorState) => {
    if (editorState.history.index === editorState.history.editors.length - 1)
      return editorState
    const updatedEditor = {
      ...editorState.history.editors[editorState.history.index + 1],
    }
    const updatedHistory = {
      ...editorState.history,
      index: editorState.history.index + 1,
    }
    const updatedState = {
      ...editorState,
      editor: updatedEditor,
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },

  //UNDO
  undo: (editorState: EditorState) => {
    if (editorState.history.index === 0) return editorState
    const updatedEditor = {
      ...editorState.editor,
      components:
        editorState.history.editors[editorState.history.index - 1].components,
    }
    const updatedHistory = {
      ...editorState.history,
      index: editorState.history.index - 1,
    }
    const updatedState = {
      ...editorState,
      editor: {
        ...editorState.editor,
        components: updatedEditor.components,
      },
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },

  //LOAD EDITOR
  load: (editorState: EditorState, editor: Editor) => {
    const updatedEditor = {
      ...editorState.editor,
      ...editor,
    }
    const updatedHistory = {
      ...editorState.history,
      editors: [
        ...editorState.history.editors.slice(0, editorState.history.index + 1),
        { ...updatedEditor },
      ],
      index: editorState.history.index + 1,
    }
    const updatedState = {
      ...editorState,
      editor: {
        ...editorState.editor,
        ...editor,
      },
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },

  getComponentArray: (editorState: EditorState) => {
    return getEditorComponentArray(editorState.editor.components)
  },

  getParent: (editorState: EditorState, component: TractaComponent) => {
    if (!Array.isArray(editorState.editor.components[0].content)) return null
    return getComponentParent(
      editorState.editor.components[0].content,
      editorState.editor.components[0],
      component,
    )
  },
  toggleLiveMode: (editorState: EditorState) => {
    const updatedEditor = {
      ...editorState.editor,
      liveMode: !editorState.editor.liveMode,
    }
    const updatedHistory = {
      ...editorState.history,
      editors: [
        ...editorState.history.editors.slice(0, editorState.history.index + 1),
        { ...updatedEditor },
      ],
      index: editorState.history.index + 1,
    }
    const updatedState = {
      ...editorState,
      editor: {
        ...editorState.editor,
        ...updatedEditor,
      },
      history: updatedHistory,
    }
    set({ editorState: updatedState })
  },
}))
