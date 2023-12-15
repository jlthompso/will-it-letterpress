import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_FONT_MUTATION = gql`
  mutation DeleteFontMutation($id: String!) {
    deleteFont(id: $id) {
      id
    }
  }
`

const Font = ({ font }) => {
  const [deleteFont] = useMutation(DELETE_FONT_MUTATION, {
    onCompleted: () => {
      toast.success('Font deleted')
      navigate(routes.fonts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete font ' + id + '?')) {
      deleteFont({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Font {font.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{font.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{font.name}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{font.size}</td>
            </tr>
            <tr>
              <th>Chars</th>
              <td>{font.chars}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFont({ id: font.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(font.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Font
