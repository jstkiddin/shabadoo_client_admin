import styled from '@emotion/styled'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Teacher } from '@shared/types/teachers'

type ListTable = {
  headers: GridColDef[]
  data?: Teacher[]
}

const paginationModel = { page: 0, pageSize: 20 }

function ListTable({ headers, data }: ListTable) {
  return (
    <Paper sx={{ height: '80%', width: '80%' }}>
      <DataGrid
        rows={data}
        columns={headers}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20]}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>

    // <TableContainer
    //   sx={{ minWidth: 650, width: '70%', height: '80vh' }}
    //   component={Paper}
    // >
    //   <Table size="small" aria-label="a dense table">
    //     <TableHead>
    //       <TableRow>
    //         {headers.map(header => (
    //           <TableCell>{header}</TableCell>
    //         ))}
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {data?.map((dataItem: (typeof data)[0]) => {
    //         const objectCells: string[] = Object.keys(dataItem)
    //         return (
    //           <TableRow>
    //             {objectCells.map((cell: string) => (
    //               <TableCell
    //                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //                 id=""
    //               >
    //                 {dataItem[cell as keyof typeof dataItem]}
    //               </TableCell>
    //             ))}
    //           </TableRow>
    //         )
    //       })}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  )
}

export default ListTable

const StyledTable = styled(Table)`
  height: 100%;
`
