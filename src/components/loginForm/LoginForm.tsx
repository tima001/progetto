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
import logo from '../../assets/icons/Logo.svg'
import { Body1, BoldText } from '../../layouts/TextStyles'
import { userLogin } from '../../features/user/userActions'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { resetError } from '../../features/user/userSlice'
import CustomInput from '../muiComponents/customInput'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const LoginForm = ({ toggleForm }) => {
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { formatMessage } = useIntl()

    const { loading, userInfo, success, error } = useAppSelector(
        (state) => state.user,
    )
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const result = await dispatch(userLogin(loginInfo)).unwrap()
            navigateToPage(result.roles)
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

    const navigateToPage = (roles) => {
        if (roles.includes('STUDENT')) {
            navigate('/my-courses')
        } else {
            navigate('/subjects')
        }
    }

    return (
        <Wrapper onSubmit={submitForm}>
            <img
                alt="logo"
                src={logo}
                style={{ width: 150, height: 22, margin: '0 auto 32px' }}
            />

            <BoldText>Почта немесе телефон</BoldText>

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

            <div style={{ margin: '16px 0' }}>
                <Body1 color={'#5185FF'}>Забыли пароль?</Body1>
            </div>

            <Button
                variant="contained"
                size="large"
                type="submit"
                disabled={loading}
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
                <Body1>
                    {formatMessage({ id: 'dontHaveAccount' })}
                    <span
                        style={{
                            color: theme.palette.primary.main,
                            marginLeft: 4,
                            cursor: 'pointer',
                        }}
                        onClick={toggleForm}
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
    margin-top: 160px;
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
