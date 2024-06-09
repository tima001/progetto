import React from 'react'
import { styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'

const CssTextField = styled(TextField)({
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: '#C1C1C1',
    },
    '.MuiInputBase-root': {
        backgroundColor: '#fff',
        borderRadius: '8px',
    },
})

export default function CustomInput(props: TextFieldProps) {
    return (
        <CssTextField
            margin="normal"
            {...props}
        />
    )
}
