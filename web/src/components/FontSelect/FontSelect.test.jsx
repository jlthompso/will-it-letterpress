import { render } from '@redwoodjs/testing/web'

import FontSelect from './FontSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FontSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FontSelect />)
    }).not.toThrow()
  })
})
