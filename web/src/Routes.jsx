// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { PrivateSet, Set, Router, Route } from '@redwoodjs/router'

import AppLayout from 'src/layouts/AppLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <PrivateSet wrap={AppLayout} unauthenticated="login">
        <Route path="/" page={HomePage} name="home" />
        <Route path="/sorts" page={SortsPage} name="sorts" />
        <Set wrap={ScaffoldLayout} title="Fonts" titleTo="fonts" buttonLabel="New Font" buttonTo="newFont">
          <Route path="/fonts/new" page={FontNewFontPage} name="newFont" />
          <Route path="/fonts/{id}/edit" page={FontEditFontPage} name="editFont" />
          <Route path="/fonts/{id}" page={FontFontPage} name="font" />
          <Route path="/fonts" page={FontFontsPage} name="fonts" />
        </Set>
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
