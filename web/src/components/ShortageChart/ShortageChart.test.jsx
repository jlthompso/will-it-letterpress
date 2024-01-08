import { render } from '@redwoodjs/testing/web'

import ShortageChart from './ShortageChart'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShortageChart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShortageChart />)
    }).not.toThrow()
  })
})
