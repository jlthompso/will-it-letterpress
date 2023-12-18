import TableCell from '@mui/material/TableCell'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'

const CharQtyInput = (props) => {
  const { register } = props.formMethods

  return (
    <TableCell
      align="center"
      sx={{ border: 1 }}
      colSpan={props.colSpan || 1}
      rowSpan={props.rowSpan || 1}
    >
      <Tooltip title={props.children}>
        <TextField
          {...register('ffi')}
          label={props.children}
          defaultValue={props.font?.chars[props.children]}
          sx={{ width: props.children.length < 4 ? '4rem' : '8rem' }}
        />
      </Tooltip>
    </TableCell>
  )
}

export default CharQtyInput
