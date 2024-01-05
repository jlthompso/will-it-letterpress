import { useSelector } from 'react-redux'

import { Metadata } from '@redwoodjs/web'

import charNames from 'src/lib/charNames'

const SortsPage = () => {
  const availableChars = useSelector((state) => state.printJob.chars)
  const text = useSelector((state) => state.printJob.text)

  const chars = {}
  for (let c of text) {
    switch (c) {
      case ' ':
        c = '3/em space'
        break
      default:
        break
    }
    const [charName, _] = Object.entries(charNames).find(
      ([_, char]) => char === c
    )
    if (charName) {
      if (charName in chars) {
        chars[charName].required++
      } else {
        chars[charName] = {
          available: availableChars[charName] ?? 0,
          required: 1,
          char: c,
        }
      }
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
          {Object.entries(chars).map(
            ([charName, { char, available, required }]) => (
              <tr key={charName}>
                <td>{char}</td>
                <td>{required}</td>
                <td>{available}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  )
}

export default SortsPage
