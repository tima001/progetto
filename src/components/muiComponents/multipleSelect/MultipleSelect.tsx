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

function getStyles(name: string, subjectName: string[], theme: Theme) {
    return {
        fontWeight:
            _.isArray(subjectName) && subjectName?.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

export default function MultipleSelect({
    id = '',
    name = '',
    value = [],
    placeholder = '',
    handleChange,
    handleBlur = null,
    handleError = null,
    menuItems = [],
    multiple = false,
    disabled = false,
}) {
    const theme = useTheme()
    const language = useAppSelector(lang)

    return (
        <div>
            <FormControl
                sx={{
                    mt: 1,
                    width: '100%',
                    backgroundColor: 'rgb(241, 243, 245)',
                    borderRadius: '8px',

                    boxShadow: 0,
                }}
            >
                <Select
                    id={id}
                    name={name}
                    multiple={multiple}
                    disabled={disabled}
                    displayEmpty
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    input={<CustomSelect />}
                    error={handleError}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return (
                                <div style={{ color: theme.palette.grey[600] }}>
                                    {placeholder}
                                </div>
                            )
                        }

                        const result = []

                        for (const menuItem of menuItems) {
                            if (selected.includes(menuItem.id)) {
                                result.push(
                                    menuItem.name ||
                                        menuItem[
                                            `title${capitalize(language)}`
                                        ] ||
                                        menuItem.firstName +
                                            ' ' +
                                            menuItem.lastName,
                                )
                            }
                        }

                        return result.join(', ')
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
                            style={getStyles(
                                `item.title${capitalize(language)}`,
                                value,
                                theme,
                            )}
                        >
                            <ListItemText
                                primary={
                                    item.name ||
                                    item[`title${capitalize(language)}`] ||
                                    item.title_kz ||
                                    item.firstName + ' ' + item.lastName
                                }
                            />
                            <Checkbox
                                icon={<RadioButtonUncheckedOutlined />}
                                checkedIcon={<CheckCircle />}
                                checked={
                                    _.isArray(value) &&
                                    value.indexOf(
                                        item.id ||
                                            item.name ||
                                            item[
                                                `title${capitalize(language)}`
                                            ],
                                    ) > -1
                                }
                            />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
