import { PageTop, PageBottom, PageBreak } from '@fileforge/react-print'
import * as React from 'react'

export const Document = ({ props }: any) => {
  return (
    <div>
      <PageTop>
        <span>Hello #1</span>
      </PageTop>
      <div>Hello #2</div>
      <PageBottom>
        <div className="text-sm text-gray-400">Hello #3</div>
      </PageBottom>
      <PageBreak />
      <span>Hello #4, but on a new page ! </span>
    </div>
  )
}
