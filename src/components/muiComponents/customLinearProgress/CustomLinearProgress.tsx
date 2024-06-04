import React from 'react'
import { LinearProgress, LinearProgressProps } from '@mui/material'

export default function CustomLinearProgress(
    props: LinearProgressProps & {
        backgroundcolor: string
        barbackgroundcolor: string
    },
) {
    return (
        <LinearProgress
            sx={{
                backgroundColor: props.backgroundcolor,
                '.MuiLinearProgress-bar': {
                    backgroundColor: props.barbackgroundcolor,
                },
            }}
            {...props}
        />
    )
}
