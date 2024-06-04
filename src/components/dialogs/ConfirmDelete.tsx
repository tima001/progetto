import * as React from 'react'
import { useIntl } from 'react-intl'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box, IconButton, IconButtonProps } from '@mui/material'

import TrashIcon from '../../assets/icons/Edit/Trash.svg'

const ConfirmDelete: React.FC<{
    confirmAction: () => void
    iconButtonProps?: IconButtonProps
}> = ({ confirmAction, iconButtonProps }) => {
    const { formatMessage } = useIntl()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ m: 'auto' }}>
            <IconButton
                color="error"
                onClick={() => handleClickOpen()}
                sx={{
                    background: 'rgba(255, 70, 70, 0.25)',
                    '&:hover': {
                        background: 'rgba(237, 50, 50, 0.25)',
                    },
                }}
                {...iconButtonProps}
            >
                <img src={TrashIcon} alt="delete" />
            </IconButton>

            <Dialog maxWidth={'sm'} fullWidth open={open} onClose={handleClose}>
                <DialogTitle id="responsive-dialog-title">
                    Подтверждение
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы уверены что хотите удалить этот объект?
                    </DialogContentText>
                </DialogContent>

                <DialogActions sx={{ m: 2 }}>
                    <Button onClick={handleClose}>
                        {formatMessage({ id: 'cancel' })}
                    </Button>

                    <Button
                        variant="contained"
                        color={'error'}
                        onClick={() => {
                            confirmAction()
                            handleClose()
                        }}
                    >
                        {formatMessage({ id: 'delete' })}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ConfirmDelete
