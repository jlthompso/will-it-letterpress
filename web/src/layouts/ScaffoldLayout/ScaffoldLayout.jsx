import Button from '@mui/material/Button'

import { Link, routes, navigate } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link">
            {title}
          </Link>
        </h1>
        <Button
          variant="contained"
          onClick={() => navigate(routes[buttonTo]())}
        >
          + {buttonLabel}
        </Button>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
