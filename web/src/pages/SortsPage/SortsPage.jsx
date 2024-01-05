import { useSelector } from 'react-redux'

import { Metadata } from '@redwoodjs/web'

const SortsPage = () => {
  const availableChars = useSelector((state) => state.printJob.chars)
  const text = useSelector((state) => state.printJob.text)

  const chars = {}
  for (const c of text) {
    if (c in chars) {
      chars[c].required++
    } else {
      chars[c] = { available: availableChars[c] ?? 0, required: 1 }
    }
  }

  return (
    <>
      <Metadata title="Sorts" description="Sorts page" />

      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Required Qty.</th>
            <th>Available Qty.</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(chars).map(([char, { available, required }]) => (
            <tr key={char}>
              <td>{char}</td>
              <td>{required}</td>
              <td>{available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SortsPage
