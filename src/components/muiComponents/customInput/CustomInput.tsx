import React from 'react'
import { styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'

const CssTextField = styled(TextField)({
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
    '.MuiInputBase-root': {
        backgroundColor: 'rgb(241, 243, 245)',
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
