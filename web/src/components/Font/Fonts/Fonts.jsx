import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Font/FontsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_FONT_MUTATION = gql`
  mutation DeleteFontMutation($id: String!) {
    deleteFont(id: $id) {
      id
    }
  }
`

const FontsList = ({ fonts }) => {
  const [deleteFont] = useMutation(DELETE_FONT_MUTATION, {
    onCompleted: () => {
      toast.success('Font deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id, name) => {
    if (confirm('Are you sure you want to delete font ' + name + '?')) {
      deleteFont({ variables: { id } })
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Type Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fonts.map((font) => (
            <TableRow
              key={font.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{truncate(font.name)}</TableCell>
              <TableCell>{truncate(font.size)}</TableCell>
              <TableCell>
                {Object.values(JSON.parse(font.chars)).reduce(
                  (sum, val) => sum + val,
                  0
                )}
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Button
                    href={routes.editFont({ id: font.id })}
                    title={'Edit font ' + font.id}
                  >
                    Edit
                  </Button>
                  <Button
                    title={'Delete font ' + font.id}
                    onClick={() => onDeleteClick(font.id, font.name)}
                  >
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FontsList
