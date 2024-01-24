import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import ProfileButton from 'src/components/ProfileButton'

const AppLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: '1em',
          height: '3em',
        }}
      >
        <ProfileButton logout={logOut} />
        <Typography variant="body1">
          {isAuthenticated ? currentUser?.email : ''}
        </Typography>
        <Link href={routes.home()} variant="h5" marginRight={'auto'}>
          Enter Text
        </Link>
      </Box>
      {children}
    </>
  )
}

export default AppLayout
