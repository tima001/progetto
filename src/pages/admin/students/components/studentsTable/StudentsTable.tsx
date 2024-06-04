import * as React from 'react'
import { useIntl } from 'react-intl'
import {  TableHead } from '@mui/material'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { fakeStudents } from '../../../../../utils/constants'
import TablePaginationActions from '../../../../../components/muiComponents/tablePaginationActions/TablePaginationActions'

const StudentsTable = () => {
    const { formatMessage } = useIntl()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0
            ? Math.max(0, (1 + page) * rowsPerPage - fakeStudents.length)
            : 0

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const columns = [
        { value: '#', active: 'true' },
        { value: formatMessage({ id: 'status' }), active: 'true' },
        { value: formatMessage({ id: 'fullName' }), active: 'true' },
        { value: formatMessage({ id: 'group' }), active: 'true' },
        { value: formatMessage({ id: 'index' }), active: 'true' },
        { value: formatMessage({ id: 'nationalId' }), active: 'true' },
        { value: formatMessage({ id: 'phone' }), active: 'true' },
        { value: formatMessage({ id: 'parentsPhone' }), active: 'true' },
        { value: formatMessage({ id: 'registeredTime' }), active: 'true' },
        { value: formatMessage({ id: 'exitTime' }), active: 'true' },
        { value: formatMessage({ id: 'gender' }), active: 'true' },
        { value: formatMessage({ id: 'grade' }), active: 'true' },
        { value: formatMessage({ id: 'languageGroup' }), active: 'true' },
        { value: formatMessage({ id: 'school' }), active: 'true' },
        { value: formatMessage({ id: 'firm' }), active: 'true' },
        { value: formatMessage({ id: 'email' }), active: 'true' },
        { value: formatMessage({ id: 'Тіркеу коды' }), active: 'true' },
        { value: formatMessage({ id: 'Туған күні' }), active: 'true' },
        { value: formatMessage({ id: 'Кету себебі' }), active: 'true' },
    ]

    return (
        <Box>
            <TableContainer
                component={Paper}
                sx={{ border: 1, borderColor: 'grey.100', borderRadius: 2 }}
                elevation={0}
            >
                <Table
                    sx={{ minWidth: 500 }}
                    aria-label="custom pagination table"
                >
                    <TableHead
                        sx={{
                            bgcolor: 'grey.100',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <TableRow>
                            {columns?.map((col) => {
                                return (
                                    <TableCell
                                        component="th"
                                        scope="col"
                                        key={col.value}
                                    >
                                        {col.value}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    {fakeStudents.length ? (
                        <TableBody sx={{ whiteSpace: 'nowrap' }}>
                            {fakeStudents.map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        {index + 1}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        {row.firstName} {row.lastName}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        {row.mobile}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        asdf
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        asdf
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        asdf
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        asdf
                                    </TableCell>

                                    <TableCell
                                        style={{ width: 60 }}
                                        align="right"
                                    >
                                        asdf
                                    </TableCell>

                                    <TableCell
                                        style={{ width: 60 }}
                                        align="right"
                                    >
                                        asdf
                                    </TableCell>

                                    <TableCell
                                        style={{ width: 60 }}
                                        align="right"
                                    >
                                        asdf
                                    </TableCell>
                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={10} />
                                </TableRow>
                            )}
                        </TableBody>
                    ) : (
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                    colSpan={10}
                                >
                                    {formatMessage({ id: 'noData' })}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: 'All', value: -1 },
                            ]}
                            colSpan={columns.length}
                            count={fakeStudents.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                            sx={{ border: 0 }}
                        />
                    </TableRow>
                </TableFooter>
            </TableContainer>
        </Box>
    )
}

export default StudentsTable
