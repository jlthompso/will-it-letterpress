import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SortsPage = () => {
  return (
    <>
      <Metadata title="Sorts" description="Sorts page" />

      <h1>SortsPage</h1>
      <p>
        Find me in <code>./web/src/pages/SortsPage/SortsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>sorts</code>, link to me with `
        <Link to={routes.sorts()}>Sorts</Link>`
      </p>
    </>
  )
}

export default SortsPage
