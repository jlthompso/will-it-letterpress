import { Link, routes } from '@redwoodjs/router'

import Fonts from 'src/components/Font/Fonts'

export const QUERY = gql`
  query FindFonts {
    fonts {
      id
      name
      size
      chars
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fonts yet. '}
      <Link to={routes.newFont()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ fonts }) => {
  return <Fonts fonts={fonts} />
}
