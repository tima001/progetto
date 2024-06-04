import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Box } from '@mui/material'
import { OnProgressProps } from 'react-player/base'

const styles = {
    player: {
        background: '#24282d',
        height: '450px',
        mb: 3,
        borderRadius: '8px',
        overflow: 'hidden',
    },
}

interface Props {
    link: string
    onStart?: () => void
    onProgress?: (state: OnProgressProps) => void
}

const VideoPlayer: React.FC<Props> = ({ link, onStart, onProgress }) => {
    return (
        <Box sx={styles.player}>
            <ReactPlayer
                width={'100%'}
                height={'100%'}
                controls={true}
                url={link}
                onStart={onStart}
                onProgress={onProgress}
            />
        </Box>
    )
}

export default VideoPlayer
