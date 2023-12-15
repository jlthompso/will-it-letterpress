export const schema = gql`
  type Font {
    id: String!
    name: String!
    size: Int
    chars: String!
  }

  type Query {
    fonts: [Font!]! @requireAuth
    font(id: String!): Font @requireAuth
  }

  input CreateFontInput {
    name: String!
    size: Int
    chars: String!
  }

  input UpdateFontInput {
    name: String
    size: Int
    chars: String
  }

  type Mutation {
    createFont(input: CreateFontInput!): Font! @requireAuth
    updateFont(id: String!, input: UpdateFontInput!): Font! @requireAuth
    deleteFont(id: String!): Font! @requireAuth
  }
`
