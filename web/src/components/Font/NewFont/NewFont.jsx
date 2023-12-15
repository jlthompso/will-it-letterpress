import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FontForm from 'src/components/Font/FontForm'

const CREATE_FONT_MUTATION = gql`
  mutation CreateFontMutation($input: CreateFontInput!) {
    createFont(input: $input) {
      id
    }
  }
`

const NewFont = () => {
  const [createFont, { loading, error }] = useMutation(CREATE_FONT_MUTATION, {
    onCompleted: () => {
      toast.success('Font created')
      navigate(routes.fonts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createFont({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Font</h2>
      </header>
      <div className="rw-segment-main">
        <FontForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFont
