import { Box, Typography } from '@mui/material'
import React from 'react'
import StudentsTable from './components/studentsTable/StudentsTable'

const StudentsPage = () => {
    return (
        <Box>
            <Box mb={2}>
                <Typography
                    variant="h5"
                    component="h5"
                    fontWeight={600}
                >
                    Оқушылар
                </Typography>
            </Box>
            sdfdsfsdf

            <StudentsTable />
        </Box>
    )
}

export default StudentsPage
