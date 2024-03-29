import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'

import { Metadata } from '@redwoodjs/web'

import ShortageChart from 'src/components/ShortageChart'
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

      <Box width="50%">
        <Typography variant="h5" gutterBottom>
          {Object.values(chars).find((char) => char.available < char.required)
            ? 'Insufficient type to print text.'
            : 'Text can be printed!'}
        </Typography>
        <ShortageChart dataset={Object.values(chars)} />
      </Box>
    </>
  )
}

export default SortsPage
