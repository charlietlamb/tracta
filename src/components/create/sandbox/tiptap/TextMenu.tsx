import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BubbleMenu, Editor } from '@tiptap/react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import {
  Bold,
  Code,
  Highlighter,
  Italic,
  Link,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from 'lucide-react'

// Subscript,
// Superscript,
// TextStyle,

const strokeWidth = 2.5

export default function TextMenu({ editor }: { editor: Editor }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BubbleMenu editor={editor}>
          <div className="flex items-center gap-1 rounded-md border-2 border-dark bg-black p-2 py-1 ">
            <Button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(
                'size-7 p-1 text-zinc-300 hover:bg-border/50 hover:text-white',
                editor.isActive('bold') &&
                  'bg-border/50 text-white hover:bg-border/40 hover:text-zinc-300',
              )}
              variant="ghost"
            >
              <Bold strokeWidth={strokeWidth} />
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={cn(
                'size-7 p-1 text-zinc-300 hover:bg-border/50 hover:text-white',
                editor.isActive('italic') &&
                  'bg-border/50 text-white hover:bg-border/40 hover:text-zinc-300',
              )}
              variant="ghost"
            >
              <Italic strokeWidth={strokeWidth} />
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={cn(
                'size-7 p-1 text-zinc-300 hover:bg-border/50 hover:text-white',
                editor.isActive('underline') &&
                  'bg-border/50 text-white hover:bg-border/40 hover:text-zinc-300',
              )}
              variant="ghost"
            >
              <Underline strokeWidth={strokeWidth} />
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={cn(
                'size-7 p-1 text-zinc-300 hover:bg-border/50 hover:text-white',
                editor.isActive('strike') &&
                  'bg-border/50 text-white hover:bg-border/40 hover:text-zinc-300',
              )}
              variant="ghost"
            >
              <Strikethrough strokeWidth={strokeWidth} />
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              className={cn(
                'size-7 p-1 text-zinc-300 hover:bg-border/50 hover:text-white',
                editor.isActive('highlight') &&
                  'bg-border/50 text-white hover:bg-border/40 hover:text-zinc-300',
              )}
              variant="ghost"
            >
              <Highlighter strokeWidth={strokeWidth} />
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleSuperscript().run()}
              className={cn(
                'size-7 p-1 text-zinc-300 hover:bg-border/50 hover:text-white',
                editor.isActive('superscript') &&
                  'bg-border/50 text-white hover:bg-border/40 hover:text-zinc-300',
              )}
              variant="ghost"
            >
              <Superscript strokeWidth={strokeWidth} />
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleSubscript().run()}
              className={cn(
                'size-7 p-1 text-zinc-300 hover:bg-border/50 hover:text-white',
                editor.isActive('subscript') &&
                  'bg-border/50 text-white hover:bg-border/40 hover:text-zinc-300',
              )}
              variant="ghost"
            >
              <Subscript strokeWidth={strokeWidth} />
            </Button>
          </div>
        </BubbleMenu>
      </motion.div>
    </AnimatePresence>
  )
}
