import { render } from '@redwoodjs/testing/web'

import SortsPage from './SortsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SortsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SortsPage />)
    }).not.toThrow()
  })
})
