import { Hash } from 'lucide-react'
import React from 'react'

import { MobileToggle } from '../mobile-toggle'
import { SocketIndicator } from '../socket-indicator'
import { UserAvatar } from '../user-avatar'

type Props = {
  serverId: string
  name: string
  type: 'channel' | 'conversation'
  imageUrl?: string
}

const ChatHeader = ({ serverId, name, type, imageUrl }: Props) => {
  return (
    <div
      className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 
    dark:border-neutral-800 border-b-2"
    >
      <MobileToggle serverId={serverId} />

      {type === 'channel' && (
        <Hash className="size-5 text-zinc text-zinc-500 dark:text-zinc-400 mr-2" />
      )}

      {type === 'conversation' && (
        <UserAvatar src={imageUrl} className="size-8 md:size-8 mr-2" />
      )}

      <p className="font-semibold text-md text-black dark:text-white">{name}</p>

      <div className="ml-auto flex items-center">
        <SocketIndicator />
      </div>
    </div>
  )
}

export default ChatHeader
