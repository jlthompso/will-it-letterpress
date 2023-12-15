import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Font/FontsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_FONT_MUTATION = gql`
  mutation DeleteFontMutation($id: String!) {
    deleteFont(id: $id) {
      id
    }
  }
`

const FontsList = ({ fonts }) => {
  const [deleteFont] = useMutation(DELETE_FONT_MUTATION, {
    onCompleted: () => {
      toast.success('Font deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete font ' + id + '?')) {
      deleteFont({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Size</th>
            <th>Chars</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {fonts.map((font) => (
            <tr key={font.id}>
              <td>{truncate(font.id)}</td>
              <td>{truncate(font.name)}</td>
              <td>{truncate(font.size)}</td>
              <td>{truncate(font.chars)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.font({ id: font.id })}
                    title={'Show font ' + font.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFont({ id: font.id })}
                    title={'Edit font ' + font.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete font ' + font.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(font.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FontsList
