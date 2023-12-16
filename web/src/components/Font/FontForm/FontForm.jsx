import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'

import { Form, Submit } from '@redwoodjs/forms'

const FontForm = (props) => {
  const onSubmit = (data) => {
    console.log(data.name)
    console.log(data.size)
    console.log(data.chars)
    if (data.size) {
      data.size = parseInt(data.size)
    } else {
      delete data.size
    }
    console.log(data)
    props.onSave(data, props?.font?.id)
  }

  const formMethods = useForm({ mode: 'onBlur' })
  const { register } = formMethods

  return (
    <Form
      autoComplete="off"
      onSubmit={onSubmit}
      error={props.error}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      formMethods={formMethods}
    >
      <TextField
        {...register('name', { required: true })}
        required
        label="Name"
        defaultValue={props.font?.name}
        placeholder="Comic Sans"
      />

      <TextField
        {...register('size')}
        label="Size"
        defaultValue={props.font?.size}
        InputProps={{
          endAdornment: <InputAdornment position="end">pt.</InputAdornment>,
        }}
      />

      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          component={Submit}
          loading={props.loading}
          variant="contained"
        >
          <span>save</span>
        </LoadingButton>
      </Box>
    </Form>
  )
}

export default FontForm
