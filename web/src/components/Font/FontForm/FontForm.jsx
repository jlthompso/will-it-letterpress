import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'

import { Form, Submit } from '@redwoodjs/forms'

import CharQtyInput from 'src/components/CharQtyInput/CharQtyInput'

const FontForm = (props) => {
  const onSubmit = (data) => {
    if (data.size) {
      data.size = parseInt(data.size)
    } else {
      delete data.size
    }
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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            <TableRow>
              <CharQtyInput formMethods={formMethods}>ffi</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>fl</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>5/m</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>4/m</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>&apos;</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>k</CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={4} colSpan={2}>
                e
              </CharQtyInput>
              <TableCell sx={{ border: 1 }} rowSpan={9}></TableCell>
              <CharQtyInput formMethods={formMethods}>1</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>2</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>3</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>4</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>5</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>6</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>7</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>8</CharQtyInput>
              <TableCell sx={{ border: 1 }} rowSpan={9}></TableCell>
              <CharQtyInput formMethods={formMethods}>$</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>£</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>–</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>Æ</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>Œ</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>æ</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>œ</CharQtyInput>
            </TableRow>
            <TableRow>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                j
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3}>
                b
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                c
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                d
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                i
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                s
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3}>
                f
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3}>
                g
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                ff
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                9
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                A
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                B
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                C
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                D
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                E
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                F
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                G
              </CharQtyInput>
            </TableRow>
            <TableRow></TableRow>
            <TableRow>
              <CharQtyInput formMethods={formMethods}>?</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>fi</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>0</CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                H
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                I
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                K
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                L
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                M
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                N
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                O
              </CharQtyInput>
            </TableRow>
            <TableRow>
              <CharQtyInput formMethods={formMethods}>!</CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                l
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2} colSpan={2}>
                m
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2} colSpan={2}>
                n
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2} colSpan={2}>
                h
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2} colSpan={2}>
                o
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                y
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                p
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                w
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                ,
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                en quad
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                em quad
              </CharQtyInput>
            </TableRow>
            <TableRow>
              <CharQtyInput formMethods={formMethods}>z</CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                P
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                Q
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                R
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                S
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                T
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                V
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                W
              </CharQtyInput>
            </TableRow>
            <TableRow>
              <CharQtyInput formMethods={formMethods}>x</CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3}>
                v
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                u
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                t
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                3/em spaces
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                a
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                r
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods}>;</CharQtyInput>
              <CharQtyInput formMethods={formMethods}>:</CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={3} colSpan={2}>
                2 & 3-em quads
              </CharQtyInput>
            </TableRow>
            <TableRow>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                q
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                .
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                -
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                X
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                Y
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                Z
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                J
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                U
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                &
              </CharQtyInput>
              <CharQtyInput formMethods={formMethods} rowSpan={2}>
                ffl
              </CharQtyInput>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

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
