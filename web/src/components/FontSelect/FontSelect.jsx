import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const FontSelect = ({ fonts }) => {
  const [font, setFont] = React.useState('')

  const handleChange = (event) => {
    setFont(event.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="font-select-label">Font</InputLabel>
      <Select
        labelId="font-select-label"
        id="font-select"
        value={font}
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
