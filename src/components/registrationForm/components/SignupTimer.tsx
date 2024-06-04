import React, { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { padTo2Digits } from '../../../utils/functions'

interface Props {
    smsCodeDuration: number
    isTimeExpired?: boolean
    onExpire?: () => void
}
const SignupTimer: React.FC<Props> = ({
    smsCodeDuration,
    isTimeExpired,
    onExpire,
}) => {
    const expiryTimestamp = new Date()
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + smsCodeDuration)

    const { seconds, minutes, restart } = useTimer({
        expiryTimestamp,
        onExpire,
    })

    useEffect(() => {
        if (!isTimeExpired && isTimeExpired != undefined) {
            restart(expiryTimestamp)
        }
    }, [isTimeExpired])

    return (
        <span>
            <span>({padTo2Digits(minutes)}</span>:
            <span>{padTo2Digits(seconds)})</span>
        </span>
    )
}

export default SignupTimer
