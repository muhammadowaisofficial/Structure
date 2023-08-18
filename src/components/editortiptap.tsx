"use client"

import Highlight from "@tiptap/extension-highlight"
import Placeholder from "@tiptap/extension-placeholder"
import Typography from "@tiptap/extension-typography"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export const Editor = ({
  className,
  content,
  onChange,
  placeholder,
}: {
  className?: string
  placeholder?: string
  content?: any
  onChange: (content: Record<string, unknown> | null | undefined) => void
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: placeholder || "Say something...",
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON())
    },
  })

  return <EditorContent editor={editor} className={className} />
}
