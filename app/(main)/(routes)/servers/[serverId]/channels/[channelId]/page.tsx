import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

import ChatHeader from '@/components/chat/chat-header'
import { ChatInput } from '@/components/chat/chat-input'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'

type Props = {
  params: {
    serverId: string
    channelId: string
  }
}

const ChannelIdPage = async ({ params }: Props) => {
  const profile = await currentProfile()

  if (!profile) {
    return auth().redirectToSignIn()
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  })

  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  })

  if (!channel || !member) {
    redirect('/')
  }

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        serverId={channel.serverId}
        name={channel.name}
        type={'channel'}
      />

      <div className="flex-1">Future Messages</div>

      <ChatInput
        apiUrl="/api/socket/messages"
        name={channel.name}
        type={'channel'}
        query={{
          channelId: channel.id,
          serverId: channel.serverId,
        }}
      />
    </div>
  )
}

export default ChannelIdPage
