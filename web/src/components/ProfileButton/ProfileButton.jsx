import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { navigate, routes } from '@redwoodjs/router'

const ProfileButton = ({ logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (event) => {
    setAnchorEl(null)
    switch (event.currentTarget.firstChild.textContent) {
      case 'Home':
        navigate(routes.home())
        break
      case 'My Fonts':
        navigate(routes.fonts())
        break
      case 'Logout':
        logout()
        break
      default:
        break
    }
  }

  return (
    <div>
      <Button
        id="dashboard-button"
        variant="outlined"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="dashboard-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'dashboard-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>My Fonts</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default ProfileButton
