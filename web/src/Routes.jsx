// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Fonts" titleTo="fonts" buttonLabel="New Font" buttonTo="newFont">
        <Route path="/fonts/new" page={FontNewFontPage} name="newFont" />
        <Route path="/fonts/{id}/edit" page={FontEditFontPage} name="editFont" />
        <Route path="/fonts/{id}" page={FontFontPage} name="font" />
        <Route path="/fonts" page={FontFontsPage} name="fonts" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
