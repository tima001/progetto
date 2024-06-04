import React from 'react'
import _ from 'lodash'
import { styled, Theme, useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Checkbox, ListItemText } from '@mui/material'
import { CheckCircle, RadioButtonUncheckedOutlined } from '@mui/icons-material'
import { lang } from '../../../features/user/userSlice'
import { useAppSelector } from '../../../app/hooks'
import { capitalize } from '../../../utils/functions'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
        elevation: 2,
    },
}

const CustomSelect = styled(OutlinedInput)({
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
    '.MuiInputBase-root': {
        backgroundColor: 'rgb(241, 243, 245)',
        borderRadius: '8px',
    },
})

export default function SingleSelect({
    id = '',
    name = '',
    value = null,
    placeholder = '',
    handleChange,
    handleBlur = null,
    handleError = null,
    menuItems = [],
    disabled = false,
    small = false,
    marginTop = 1,
}) {
    const theme = useTheme()
    const language = useAppSelector(lang)
    console.log('value', value)
    return (
        <div>
            <FormControl
                sx={{
                    mt: marginTop,
                    width: '100%',
                    backgroundColor: 'rgb(241, 243, 245)',
                    borderRadius: '8px',

                    boxShadow: 0,
                }}
                size={small ? 'small' : 'medium'}
            >
                <Select
                    id={id}
                    name={name}
                    displayEmpty
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    input={<CustomSelect />}
                    error={handleError}
                    renderValue={(selected) => {
                        if (!selected) {
                            return (
                                <div style={{ color: theme.palette.grey[600] }}>
                                    {placeholder}
                                </div>
                            )
                        }

                        const result = menuItems.find(
                            (item) => item.id === selected,
                        )

                        return (
                            result?.name ||
                            result?.[`title${capitalize(language)}`] ||
                            result?.title ||
                            result?.firstName + ' ' + result?.lastName
                        )
                    }}
                    MenuProps={MenuProps}
                    inputProps={{
                        'aria-label': 'Without label',
                    }}
                >
                    {menuItems?.map((item) => (
                        <MenuItem
                            key={item.id}
                            value={item.id}
                        >
                            <ListItemText
                                primary={
                                    item.name ||
                                    item[`title${capitalize(language)}`] ||
                                    item.title ||
                                    item.firstName + ' ' + item.lastName
                                }
                            />
                            <Checkbox
                                icon={<RadioButtonUncheckedOutlined />}
                                checkedIcon={<CheckCircle />}
                                checked={value === item.id}
                            />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
