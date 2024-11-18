import { db } from './db'

export const getOrCreateConversation = async (
  memberOneId: string,
  memberTwoId: string,
) => {
  let conversation =
    (await findConversation(memberOneId, memberTwoId)) ||
    (await findConversation(memberTwoId, memberOneId))

  if (!conversation) {
    console.log('Criando nova conversa...')
    conversation = await createNewConversation(memberOneId, memberTwoId)
  }

  return conversation
}

const findConversation = async (memberOneId: string, memberTwoId: string) => {
  try {
    return await db.conversation.findFirst({
      where: {
        AND: [{ memberOneId }, { memberTwoId }],
      },
      include: {
        memberOne: {
          include: {
            profile: true,
          },
        },
        memberTwo: {
          include: {
            profile: true,
          },
        },
      },
    })
  } catch (error) {
    console.error('Error finding conversation:', error)
    return null
  }
}

const createNewConversation = async (
  memberOneId: string,
  memberTwoId: string,
) => {
  try {
    console.log({ memberOneId, memberTwoId })

    const result = await db.conversation.create({
      data: {
        memberOneId,
        memberTwoId,
      },
      include: {
        memberOne: {
          include: {
            profile: true,
          },
        },
        memberTwo: {
          include: {
            profile: true,
          },
        },
      },
    })

    console.log({ result })

    return result
  } catch (error) {
    console.error('Error creating new conversation:', error)
    return null
  }
}
