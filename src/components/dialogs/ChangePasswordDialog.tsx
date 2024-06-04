import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useIntl } from 'react-intl'
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    InputAdornment,
} from '@mui/material'
import { Box } from '@mui/system'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { H6 } from '../../layouts/TextStyles'
import CustomInput from '../muiComponents/customInput/CustomInput'

interface Props {
    open: boolean
    isLoading: boolean
    handleClose?: () => void
    confirmAction: (password: string) => void
}

const ChangePasswordDialog: React.FC<Props> = ({
    open,
    isLoading,
    confirmAction,
}) => {
    const { formatMessage } = useIntl()
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault()
    }

    const submitPassword = () => {
        if (password === confirmPassword) {
            confirmAction(password)
        } else {
            toast.error(formatMessage({ id: 'mustPasswordsMatch' }))
        }
    }

    return (
        <Dialog
            maxWidth={'sm'}
            fullWidth
            open={open}
        >
            <DialogTitle
                id="responsive-dialog-title"
                sx={{ fontWeight: 600 }}
            >
                {formatMessage({ id: 'payAttention' })}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {formatMessage({ id: 'changeTempPassword' })}
                </DialogContentText>

                <Box mt={4}>
                    <Box>
                        <H6>{formatMessage({ id: 'new_password' })}</H6>
                    </Box>

                    <CustomInput
                        id="password"
                        placeholder={formatMessage({ id: 'enterPassword' })}
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box mt={2}>
                    <Box>
                        <H6>{formatMessage({ id: 'password_confirm' })}</H6>
                    </Box>

                    <CustomInput
                        id="confirmPassword"
                        placeholder={formatMessage({ id: 'password_confirm' })}
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </DialogContent>

            <DialogActions sx={{ m: 2 }}>
                <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={() => submitPassword()}
                >
                    {isLoading ? (
                        <CircularProgress
                            size={20}
                            style={{ marginRight: '8px' }}
                        />
                    ) : (
                        formatMessage({ id: 'confirm' })
                    )}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ChangePasswordDialog
