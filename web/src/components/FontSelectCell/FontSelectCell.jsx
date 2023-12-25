import FontSelect from 'src/components/FontSelect'

export const QUERY = gql`
  query FindFonts {
    fonts {
      id
      name
      size
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ fonts }) => {
  return <FontSelect fonts={fonts} />
}
