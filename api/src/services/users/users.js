import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const User = {
  fonts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).fonts()
  },
}
