import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
import {
    Button,
    CircularProgress,
    Alert,
    InputAdornment,
    IconButton,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Body1, BoldText } from '../../layouts/TextStyles'
import { userLogin } from '../../features/user/userActions'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { resetError } from '../../features/user/userSlice'
import CustomInput from '../muiComponents/customInput'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Typography from "@mui/material/Typography";

const LoginForm = () => {
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { formatMessage } = useIntl()

    const { loading, error } = useAppSelector(
        (state) => state.user,
    )
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '', grant_type: 'password' })
    const [showPassword, setShowPassword] = useState(false)

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const result = await dispatch(userLogin(loginInfo)).unwrap()
            navigate('/user-page')
        } catch (error) {}
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(resetError())
        setLoginInfo({ ...loginInfo, username: e.target.value })
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(resetError())
        setLoginInfo({ ...loginInfo, password: e.target.value })
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault()
    }


    return (
        <Wrapper onSubmit={submitForm}>

            <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{
                    fontWeight: 300,
                    fontSize: '42px',
                    color: '#000000',
                    textAlign: 'center',
                    mb: 6
                }}
            >
                {formatMessage({ id: 'loginAccount' })}

            </Typography>

            <BoldText>{formatMessage({ id: 'email' })}</BoldText>

            <CustomInput
                id="username"
                type="username"
                onChange={handleName}
            />

            <Subtitle>
                <BoldText>{formatMessage({ id: 'password' })}</BoldText>
            </Subtitle>

            <CustomInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                onChange={handlePassword}
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

            {error && (
                <Alert
                    severity="error"
                    sx={{ mt: 2 }}
                >
                    Логин или пароль дұрыс емес
                </Alert>
            )}

            <Button
                variant="contained"
                size="large"
                type="submit"
                disabled={loading}
                sx={{mt: 4}}
            >
                {loading ? (
                    <CircularProgress
                        size={20}
                        style={{ marginRight: '8px' }}
                    />
                ) : (
                    formatMessage({ id: 'sign_in' })
                )}
            </Button>

            <div style={{ margin: '16px 0' }}>
                <Body1 >
                    {formatMessage({ id: 'haveNotAccount' })}
                    <span
                        style={{
                            color: theme.palette.primary.main,
                            marginLeft: 4,
                            cursor: 'pointer',
                        }}
                        onClick={() => navigate('/sign-up')}
                    >
                        {formatMessage({ id: 'sign_up' })}
                    </span>
                </Body1>
            </div>
        </Wrapper>
    )
}

export default LoginForm

const Wrapper = styled.form`
    background-color: white;
    width: 400px;
    min-height: 450px;
    border-radius: 8px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    text-align: left;
`

const Subtitle = styled.div`
    margin-top: 24px;
`
