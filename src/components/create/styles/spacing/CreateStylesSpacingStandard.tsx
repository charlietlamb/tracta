import { extractDigits } from '@/lib/general/extractDigits'
import { updateStyles } from '@/lib/sandbox/styles/updateStyles'
import { useEditorStore } from '@/state/editor/store'
import React, { useEffect, useState } from 'react'

import GeneralSelect from '@/components/general/select/GeneralSelect'
import CreateStylesSpacingStandardLink from './CreateStylesSpacingStandardLink'
import StyleLabel from '../StyleLabel'
import { getInitStyle } from '@/lib/sandbox/styles/getInitStyle'
import { get } from 'http'

export default function CreateStylesSpacingStandard() {
  const { editorState, getComponent, updateComponent } = useEditorStore(
    (state) => state,
  )
  const selected = editorState.editor.selected

  const [topMetric, setTopMetric] = useState<Metric>('px')
  const [bottomMetric, setBottomMetric] = useState<Metric>('px')
  const [leftMetric, setLeftMetric] = useState<Metric>('px')
  const [rightMetric, setRightMetric] = useState<Metric>('px')
  const [allMetric, setAllMetric] = useState<Metric>('px')
  const [top, setTop] = useState<string>(
    getInitStyle(selected?.styles, 'paddingTop') as string,
  )
  const [bottom, setBottom] = useState<string>(
    getInitStyle(selected?.styles, 'paddingBottom') as string,
  )
  const [left, setLeft] = useState<string>(
    getInitStyle(selected?.styles, 'paddingLeft') as string,
  )
  const [right, setRight] = useState<string>(
    getInitStyle(selected?.styles, 'paddingRight') as string,
  )

  const [all, setAll] = useState<string>(
    getInitStyle(selected?.styles, 'padding') as string,
  )
  const [linked, setLinked] = useState(
    editorState.editor.styleOptions.linkedBorder,
  )

  //UPDATE STATE ON SELECTION
  useEffect(() => {
    setTop(getInitStyle(selected?.styles, 'paddingTop') as string)
    setBottom(getInitStyle(selected?.styles, 'paddingBottom') as string)
    setLeft(getInitStyle(selected?.styles, 'paddingLeft') as string)
    setRight(getInitStyle(selected?.styles, 'paddingRight') as string)
    setAll(getInitStyle(selected?.styles, 'padding') as string)
    setLinked(editorState.editor.styleOptions.linkedBorder)
  }, [selected])

  // UPDATE STYLES ON LINK STATECHANGE
  useEffect(() => {
    if (!selected) return
    if (linked) {
      updateStyles(
        editorState,
        selected.id,
        {
          paddingTop: `${all}${allMetric}`,
          paddingRight: `${all}${allMetric}`,
          paddingBottom: `${all}${allMetric}`,
          paddingLeft: `${all}${allMetric}`,
        },
        getComponent,
        updateComponent,
      )
      setTop(all)
      setBottom(all)
      setLeft(all)
      setRight(all)
    } else {
      updateStyles(
        editorState,
        selected.id,
        {
          paddingTop: `${top}${topMetric}`,
          paddingRight: `${right}${rightMetric}`,
          paddingBottom: `${bottom}${bottomMetric}`,
          paddingLeft: `${left}${leftMetric}`,
        },

        getComponent,
        updateComponent,
      )
    }
  }, [linked])

  //UPDATE ALL IF LINKED
  useEffect(() => {
    if (!linked) return
    setTop(all)
    setBottom(all)
    setLeft(all)
    setRight(all)
    if (!selected) return
    updateStyles(
      editorState,
      selected.id,
      {
        paddingTop: `${all}${allMetric}`,
        paddingRight: `${all}${allMetric}`,
        paddingBottom: `${all}${allMetric}`,
        paddingLeft: `${all}${allMetric}`,
      },
      getComponent,
      updateComponent,
    )
  }, [all])

  if (!selected) return null

  return (
    <>
      {!linked ? (
        <>
          <StyleLabel>Top</StyleLabel>
          <GeneralSelect
            value={top}
            setValue={setTop}
            metric={topMetric}
            setMetric={setTopMetric}
            stylesKey="paddingTop"
            defaultValue="0"
          />
          <StyleLabel>Bottom</StyleLabel>
          <GeneralSelect
            value={bottom}
            setValue={setBottom}
            metric={bottomMetric}
            setMetric={setBottomMetric}
            stylesKey="paddingBottom"
            defaultValue="0"
          />
          <StyleLabel>Left</StyleLabel>
          <GeneralSelect
            value={left}
            setValue={setLeft}
            metric={leftMetric}
            setMetric={setLeftMetric}
            stylesKey="paddingLeft"
            defaultValue="0"
          />
          <StyleLabel>Right</StyleLabel>
          <GeneralSelect
            value={right}
            setValue={setRight}
            metric={rightMetric}
            setMetric={setRightMetric}
            stylesKey="paddingRight"
            defaultValue="0"
          />
        </>
      ) : (
        <>
          <StyleLabel>All</StyleLabel>
          <GeneralSelect
            value={all}
            setValue={setAll}
            metric={allMetric}
            setMetric={setAllMetric}
            stylesKey="padding"
            defaultValue="0"
            className="col-span-3"
            onChange={(e) => {
              console.log(e)
              setAll(e)
              updateStyles(
                editorState,
                selected.id,
                {
                  paddingLeft: e === 'auto' ? 'auto' : `${e}${allMetric}`,
                  paddingRight: e === 'auto' ? 'auto' : `${e}${allMetric}`,
                  paddingTop: e === 'auto' ? 'auto' : `${e}${allMetric}`,
                  paddingBottom: e === 'auto' ? 'auto' : `${e}${allMetric}`,
                },
                getComponent,
                updateComponent,
              )
            }}
          />
        </>
      )}
      <StyleLabel>Link</StyleLabel>
      <CreateStylesSpacingStandardLink linked={linked} setLinked={setLinked} />
    </>
  )
}
