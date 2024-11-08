'use client'

import { useEffect, useState } from 'react'

import { CreateServerModal } from '@/components/modals/create-server-modal'
import { EditServerModal } from '@/components/modals/edit-server-modal'
import { InviteModal } from '@/components/modals/invite-modal'

import { CreateChannelModal } from '../modals/create-channel-modal'
import { DeleteServerModal } from '../modals/delete-server-modal'
import { LeaveServerModal } from '../modals/leave-server-modal'
import { MembersModal } from '../modals/members-modal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  )
}
