import { render } from '@redwoodjs/testing/web'

import CharQtyInput from './CharQtyInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CharQtyInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CharQtyInput />)
    }).not.toThrow()
  })
})
