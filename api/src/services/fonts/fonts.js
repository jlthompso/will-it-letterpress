import { db } from 'src/lib/db'

export const fonts = () => {
  return db.font.findMany({ where: { userId: context.currentUser.id } })
}

export const font = ({ id }) => {
  return db.font.findFirst({
    where: { id, userId: context.currentUser.id },
  })
}

export const createFont = ({ input }) => {
  return db.font.create({
    data: { ...input, userId: context.currentUser.id },
  })
}

export const updateFont = ({ id, input }) => {
  return db.font.update({
    data: input,
    where: { id },
  })
}

export const deleteFont = ({ id }) => {
  return db.font.delete({
    where: { id },
  })
}

export const Font = {
  user: (_obj, { root }) =>
    db.font.findFirst({ where: { id: root.id } }).user(),
}
