import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useIntl } from 'react-intl'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { userApiSlice } from '../../../features/user/userSlice'

const styles = {
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        m: 1,
        p: 1,
    },
    confirmButton: {
        mt: 2,
    },
}

const ConfirmMail = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const { formatMessage } = useIntl()
    const [confirmKey, setConfirmKey] = useState('')
    const [confirmMail, { isSuccess }] = userApiSlice.useLazyConfirmMailQuery()

    const handleRecaptcha = (value: string) => {
        if (value.length > 0) {
            setConfirmKey(value)
        }
    }

    if (isSuccess) {
        toast.success(
            formatMessage({
                id: 'registerSuccess',
            }),
        )
        navigate('/')
    }

    const confirm = () => {
        try {
            confirmMail(token).unwrap()
        } catch (error) {}
    }

    return (
        <Box sx={styles.flexCenter}>
            <Box p={1}>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptcha}
                />

                <Button
                    sx={styles.confirmButton}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={confirmKey.length == 0}
                    onClick={confirm}
                >
                    {formatMessage({ id: 'confirm' })}
                </Button>
            </Box>
        </Box>
    )
}
export default ConfirmMail
