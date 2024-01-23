import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { Link, routes } from '@redwoodjs/router'
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

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete font ' + id + '?')) {
      deleteFont({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
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
                      href={routes.font({ id: font.id })}
                      title={'Show font ' + font.id + ' detail'}
                    >
                      Show
                    </Button>
                    <Button
                      href={routes.editFont({ id: font.id })}
                      title={'Edit font ' + font.id}
                    >
                      Edit
                    </Button>
                    <Button
                      href={routes.font({ id: font.id })}
                      title={'Delete font ' + font.id}
                      onClick={() => onDeleteClick(font.id)}
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
    </div>
  )
}

export default FontsList
