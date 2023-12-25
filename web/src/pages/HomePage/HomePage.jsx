import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'

import { Form, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FontSelectCell from 'src/components/FontSelectCell'

const HomePage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  const onError = (error) => {
    toast.error(error.message)
  }

  const formMethods = useForm({ mode: 'onBlur' })
  const { register } = formMethods

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box width={'50%'}>
        <Form
          autoComplete="off"
          onSubmit={onSubmit}
          error={onError}
          formMethods={formMethods}
        >
          <FontSelectCell />

          <TextField
            {...register('text', { required: true })}
            required
            multiline
            label="Input Text"
            placeholder="Lorem ipsum dolor sit amet..."
            minRows={10}
            fullWidth
          />

          <Box sx={{ '& > button': { m: 1 } }}>
            <Button component={Submit} variant="contained">
              <span>Analyze Text</span>
            </Button>
          </Box>
        </Form>
      </Box>
    </>
  )
}

export default HomePage
