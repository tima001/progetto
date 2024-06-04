import * as React from 'react'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DesktopDatePicker } from '@mui/x-date-pickers'

export default function DatePicker({
    id = '',
    name = '',
    value = null,
    label,
    handleChange,
    handleBlur = null,
    handleError = null,
}) {
    //const [value, setValue] = React.useState<Moment | null>(null)

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
                label={label}
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                    <TextField
                        id={id}
                        name={name}
                        error={handleError}
                        onBlur={handleBlur}
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
    )
}
