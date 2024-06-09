import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { useIntl } from 'react-intl'
import { toast } from 'react-toastify'
import AuthCode from 'react-auth-code-input'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from '@emotion/styled'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    useTheme,
} from '@mui/material'
import { Body1, BoldText } from '../../layouts/TextStyles'
import { studentApiSlice } from '../../features/student/studentSlice'
import { StudentRegisterState } from '../../features/types'
import { email, requiredMobile, requiredString } from '../../utils/validation'
import { convertToMobile } from '../../utils/functions'
import { userApiSlice } from '../../features/user/userSlice'
import CustomInput from '../muiComponents/customInput/CustomInput'
import SignupTimer from './components/SignupTimer'
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";



const SMS_CODE_LENGTH = 6

const SignupForm = () => {
    const theme = useTheme()
    const styles = {
        logo: {
            width: 150,
            height: 22,
            margin: '0 auto 32px',
        },
        radioGroup: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 16,
        },
        smsCodeBox: {
            mt: 4,
            width: '760px',
            display: 'grid',
            justifyContent: 'center',
            background: 'white',
            borderRadius: 1,
            padding: 4,
            textAlign: 'center',
        },
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
        },
        flexRowCenter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        fullWidth: {
            width: '100%',
        },
        toggleSpan: {
            color: theme.palette.primary.main,
            marginLeft: 4,
            cursor: 'pointer',
        },
    }
    const navigate = useNavigate()

    const { formatMessage } = useIntl()
    const [signupType, setSignupType] = useState('email')
    const [showPassword, setShowPassword] = useState(false)
    const [showSmsCode, setShowSmsCode] = useState(false)
    const [smsCodeDuration, setSmsCodeDuration] = useState(0)
    const [isTimeExpired, setTimeExpired] = useState(undefined)
    const [smsCode, setSmsCode] = useState('')

    const [registerByEmail, { isLoading: isLoadingByEmail }] =
        studentApiSlice.useRegisterByEmailMutation()
    const [registerByPhone, { isLoading: isLoadingByPhone }] =
        studentApiSlice.useRegisterByPhoneMutation()
    const [activateSmsCode, { isLoading: isLoadingActivate }] =
        userApiSlice.useActivateSmsCodeMutation()

    const disabledSignUpButton =
        showSmsCode || isLoadingByEmail || isLoadingByPhone
    const isLoadingSignUp =
        !showSmsCode && (isLoadingByEmail || isLoadingByPhone)

    const user: StudentRegisterState = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = yup.object().shape({
        firstName: requiredString({ formatMessage }),
        lastName: requiredString({ formatMessage }),
        mobile: signupType === 'phone' && requiredMobile({ formatMessage }),
        password: requiredString({ formatMessage }),
        confirmPassword: requiredString({ formatMessage }),
        email: signupType === 'email' && email({ formatMessage }),
    })

    const formik = useFormik({
        initialValues: user,
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: () => {
            const isPasswordMatch =
                formik.values.password === formik.values.confirmPassword

            if (isPasswordMatch) {
                if (signupType === 'email') {
                    handleRegisterByEmail()
                } else {
                    handleRegisterByPhone()
                }
            } else {
                toast.error(formatMessage({ id: 'mustPasswordsMatch' }))
            }
        },
    })

    const handleRegisterByEmail = async () => {
        try {
            await registerByEmail(formik.values).unwrap()
            toast.success(formatMessage({ id: 'linkIsSentCheckEmail' }))
        } catch (error) {}
    }

    const handleRegisterByPhone = async () => {
        try {
            const result = await registerByPhone({
                ...formik.values,
                mobile: convertToMobile(formik.values.mobile),
            }).unwrap()
            setSmsCodeDuration(result)
            setShowSmsCode(true)
            toast.success(formatMessage({ id: 'smsIsSentCheckPhone' }))
        } catch (error) {}
    }

    const handleActivateCode = async () => {
        try {
            await activateSmsCode({
                mobile: convertToMobile(formik.values.mobile),
                code: +smsCode,
            }).unwrap()
            toast.success(formatMessage({ id: 'registerSuccess' }))
        } catch (error) {}
    }

    const handleSubmitCode = async () => {
        if (isTimeExpired) {
            await handleRegisterByPhone()
            setTimeExpired(false)
        } else {
            if (smsCode.length === SMS_CODE_LENGTH) {
                handleActivateCode()
            } else {
                toast.error(
                    formatMessage(
                        { id: 'fillNumbers' },
                        { value: SMS_CODE_LENGTH },
                    ),
                )
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignupType((event.target as HTMLInputElement).value)
    }

    const handleSmsCodeChange = (value: string) => {
        setSmsCode(value)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault()
    }

    return (
        <Box mt="10px">
            <Wrapper onSubmit={formik.handleSubmit}>
                <Typography
                    variant="h5"
                    component="div"
                    color="text.secondary"
                    sx={{
                        fontWeight: 300,
                        fontSize: '42px',
                        color: '#000000',
                        textAlign: 'center',
                        mb: 4
                    }}
                >
                    Создать учетную запись
                </Typography>

                <Box mb={1} sx={styles.flexRow}>

                    <Box
                        sx={styles.fullWidth}
                        mr={4}
                    >
                        <BoldText>{formatMessage({ id: 'email' })}</BoldText>

                        <CustomInput
                            id="email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={Boolean(formik.errors.email)}
                            helperText={formik.errors.email}
                            fullWidth
                        />
                    </Box>

                    <Box sx={styles.fullWidth}>
                        <BoldText>{formatMessage({ id: 'phone' })}</BoldText>

                        <InputMask
                            mask="+7 (999) 999-99-99"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <CustomInput
                                id="mobile"
                                name="mobile"
                                placeholder={formatMessage({
                                    id: 'enterPhone',
                                })}
                                fullWidth
                                helperText={formik.errors.mobile}
                                error={Boolean(formik.errors.mobile)}
                            />
                        </InputMask>
                    </Box>
                </Box>

                <Box mb={1} sx={styles.flexRow}>
                    <Box
                        sx={styles.fullWidth}
                        mr={4}
                    >
                        <BoldText>
                            {formatMessage({ id: 'firstName' })}
                        </BoldText>

                        <CustomInput
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={Boolean(formik.errors.firstName)}
                            helperText={formik.errors.firstName}
                            fullWidth
                        />
                    </Box>

                    <Box sx={styles.fullWidth}>
                        <BoldText>{formatMessage({ id: 'lastName' })}</BoldText>

                        <CustomInput
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={Boolean(formik.errors.lastName)}
                            helperText={formik.errors.lastName}
                            fullWidth
                        />
                    </Box>
                </Box>

                <Box
                    sx={styles.flexRow}
                    mb={4}
                >
                    <Box
                        sx={styles.fullWidth}
                        mr={4}
                    >
                        <BoldText>{formatMessage({ id: 'password' })}</BoldText>

                        <CustomInput
                            id="password"
                            placeholder={formatMessage({
                                id: 'enterPassword',
                            })}
                            type={showPassword ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={Boolean(formik.errors.password)}
                            helperText={formik.errors.password}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
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

                    <Box sx={styles.fullWidth}>
                        <BoldText>
                            {formatMessage({ id: 'password_confirm' })}
                        </BoldText>

                        <CustomInput
                            id="confirmPassword"
                            placeholder={formatMessage({
                                id: 'password_confirm',
                            })}
                            type={showPassword ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={Boolean(formik.errors.confirmPassword)}
                            helperText={formik.errors.confirmPassword}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
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
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    disabled={disabledSignUpButton}
                    onClick={() => formik.handleSubmit()}
                >
                    {isLoadingSignUp ? (
                        <CircularProgress
                            size={20}
                            style={{ marginRight: '8px' }}
                        />
                    ) : (
                        formatMessage({ id: 'sign_up' })
                    )}
                </Button>

                <Box style={{ margin: '16px 0' }}>
                    <Body1>
                        {formatMessage({ id: 'haveAccount' })}

                        <span
                            style={styles.toggleSpan}
                            onClick={() => navigate('/login')}
                        >
                            {formatMessage({ id: 'sign_in' })}
                        </span>
                    </Body1>
                </Box>
            </Wrapper>

            {showSmsCode && (
                <Box sx={styles.smsCodeBox}>
                    <Box sx={styles.flexRowCenter}>
                        <BoldText>
                            {formatMessage({ id: 'sentSmsCodeMore' })}&nbsp;
                        </BoldText>

                        <BoldText>
                            <SignupTimer
                                smsCodeDuration={smsCodeDuration}
                                isTimeExpired={isTimeExpired}
                                onExpire={() => setTimeExpired(true)}
                            />
                        </BoldText>
                    </Box>

                    <AuthCode
                        onChange={handleSmsCodeChange}
                        allowedCharacters="numeric"
                        length={6}
                        containerClassName="authCodeContainer"
                        inputClassName="authCodeInput"
                    />

                    <Button
                        sx={{ mt: 2 }}
                        variant="contained"
                        onClick={handleSubmitCode}
                        disabled={isLoadingActivate || isLoadingByPhone}
                    >
                        {isLoadingActivate || isLoadingByPhone ? (
                            <CircularProgress
                                size={20}
                                style={{ marginRight: '8px' }}
                            />
                        ) : isTimeExpired ? (
                            formatMessage({ id: 'sentSmsCodeMore' })
                        ) : (
                            formatMessage({ id: 'submit' })
                        )}
                    </Button>
                </Box>
            )}
        </Box>
    )
}

export default SignupForm

const Wrapper = styled.form`
    background-color: white;
    width: 760px;
    min-height: 450px;
    border-radius: 8px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    text-align: left;
`
