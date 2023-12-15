import Font from 'src/components/Font/Font'

export const QUERY = gql`
  query FindFontById($id: String!) {
    font: font(id: $id) {
      id
      name
      size
      chars
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Font not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ font }) => {
  return <Font font={font} />
}
