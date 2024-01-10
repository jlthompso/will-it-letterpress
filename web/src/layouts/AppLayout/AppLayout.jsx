import ProfileButton from 'src/components/ProfileButton'

const AppLayout = ({ children }) => {
  return (
    <>
      <span>
        <ProfileButton />
      </span>
      {children}
    </>
  )
}

export default AppLayout
