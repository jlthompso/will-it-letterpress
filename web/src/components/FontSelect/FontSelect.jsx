import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useDispatch } from 'react-redux'

import { setChars } from 'src/lib/printJobSlice'

const FontSelect = ({ fonts }) => {
  const [fontId, setFont] = React.useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setFont(event.target.value)
    const fontChars = fonts.find((font) => font.id === event.target.value).chars
    dispatch(setChars(fontChars))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="font-select-label">Font</InputLabel>
      <Select
        labelId="font-select-label"
        id="font-select"
        value={fontId}
        label="Font"
        onChange={handleChange}
        required
      >
        {fonts?.map((font) => (
          <MenuItem key={font.id} value={font.id}>
            {font.name + (font.size ? `, ${font.size}pt` : '')}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default FontSelect
