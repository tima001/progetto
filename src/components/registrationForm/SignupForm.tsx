import React, {useState} from 'react'
import InputMask from 'react-input-mask'
import {useIntl} from 'react-intl'
import {toast} from 'react-toastify'
import * as yup from 'yup'
import {useFormik} from 'formik'
import styled from '@emotion/styled'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    useTheme,
} from '@mui/material'
import {Body1, BoldText} from '../../layouts/TextStyles'
import {studentApiSlice} from '../../features/student/studentSlice'
import {StudentState} from '../../features/types'
import {email, requiredString} from '../../utils/validation'
import CustomInput from '../muiComponents/customInput/CustomInput'
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import SingleSelect from "../muiComponents/singleSelect";
import {SelectChangeEvent} from "@mui/material/Select";
import {convertToMobile} from "../../utils/functions";


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

    const {formatMessage} = useIntl()
    const [showPassword, setShowPassword] = useState(false)

    const [registerUser, {isLoading: isLoading}] =
        studentApiSlice.useRegisterUserMutation()

    const disabledSignUpButton =
        isLoading

    const user: StudentState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        type: ''
    }

    const validationSchema = yup.object().shape({
        firstName: requiredString({formatMessage}),
        lastName: requiredString({formatMessage}),
        password: requiredString({formatMessage}),
        email: email({formatMessage}),
    })

    const formik = useFormik({
        initialValues: user,
        validationSchema: validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: () => {
            handleRegister()
        },
    })

    const handleRegister = async () => {
        try {
            const phoneNumber = convertToMobile(formik.values.phone); // Convert phone number format
            const response = await registerUser({
                ...formik.values,
                phone: phoneNumber,
            }).unwrap();
            if (response.status === 0 || response.status === 2) {
                toast.error(response.message || 'Registration failed');
            } else {
                toast.success(response.message || 'Registration successful');
            }
        } catch (error) {
            toast.error(error.message || 'An error occurred');
        }
    }


    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault()
    }

    const genderItems = [
        {id: 'ADMIN', title: formatMessage({id: 'admin'})},
        {id: 'DESIGNER', title: formatMessage({id: 'designer'})},
    ]

    const handleChange = (
        event: SelectChangeEvent<typeof formik.values.type>,
    ) => {
        const {
            target: {value},
        } = event

        formik.setFieldValue('type', value)
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
                    {formatMessage({ id: 'createAccount' })}

                </Typography>

                <Box mb={1} sx={styles.flexRow}>

                    <Box
                        sx={styles.fullWidth}
                        mr={4}
                    >
                        <BoldText>{formatMessage({id: 'email'})}</BoldText>

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
                        <BoldText>{formatMessage({id: 'phone'})}</BoldText>

                        <InputMask
                            mask="+7 (999) 999-99-99"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <CustomInput
                                id="phone"
                                name="phone"
                                placeholder={formatMessage({
                                    id: 'enterPhone',
                                })}
                                fullWidth
                                helperText={formik.errors.phone}
                                error={Boolean(formik.errors.phone)}
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
                            {formatMessage({id: 'firstName'})}
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
                        <BoldText>{formatMessage({id: 'lastName'})}</BoldText>

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
                        <BoldText>{formatMessage({id: 'password'})}</BoldText>

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
                                                <VisibilityOff/>
                                            ) : (
                                                <Visibility/>
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box sx={styles.fullWidth}>
                        <BoldText>
                            {formatMessage({id: 'type'})}
                        </BoldText>
                        <SingleSelect
                            name="type"
                            value={formik.values.type}
                            handleChange={handleChange}
                            menuItems={genderItems}
                            handleBlur={formik.handleBlur}
                            handleError={Boolean(
                                formik.errors.type
                            )}

                        />

                    </Box>
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    disabled={disabledSignUpButton}
                    onClick={() => formik.handleSubmit()}
                >
                    {isLoading ? (
                        <CircularProgress
                            size={20}
                            style={{marginRight: '8px'}}
                        />
                    ) : (
                        formatMessage({id: 'sign_up'})
                    )}
                </Button>

                <Box style={{margin: '16px 0'}}>
                    <Body1>
                        {formatMessage({id: 'haveAccount'})}

                        <span
                            style={styles.toggleSpan}
                            onClick={() => navigate('/login')}
                        >
                            {formatMessage({id: 'sign_in'})}
                        </span>
                    </Body1>
                </Box>
            </Wrapper>

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
