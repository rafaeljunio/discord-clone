/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Smile } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type Props = {
  onChange: (value: string) => void
}

export const EmojiPicker = ({ onChange }: Props) => {
  const { resolvedTheme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger>
        <Smile
          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600
         dark:hover:text-zinc-300 transition"
        />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={40}
        className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
      >
        <Picker
          theme={resolvedTheme}
          data={data}
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  )
}
