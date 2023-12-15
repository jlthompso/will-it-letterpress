import { db } from 'src/lib/db'

export const fonts = () => {
  return db.font.findMany()
}

export const font = ({ id }) => {
  return db.font.findUnique({
    where: { id },
  })
}

export const createFont = ({ input }) => {
  return db.font.create({
    data: input,
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
