import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FontForm from 'src/components/Font/FontForm'

export const QUERY = gql`
  query EditFontById($id: String!) {
    font: font(id: $id) {
      id
      name
      size
      chars
    }
  }
`
const UPDATE_FONT_MUTATION = gql`
  mutation UpdateFontMutation($id: String!, $input: UpdateFontInput!) {
    updateFont(id: $id, input: $input) {
      id
      name
      size
      chars
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ font }) => {
  const [updateFont, { loading, error }] = useMutation(UPDATE_FONT_MUTATION, {
    onCompleted: () => {
      toast.success('Font updated')
      navigate(routes.fonts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateFont({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Font {font?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FontForm font={font} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
