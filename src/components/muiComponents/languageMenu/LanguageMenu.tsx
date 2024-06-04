import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { Caption } from '../../../layouts/TextStyles'
import Flag from '../../../assets/icons/Flag.svg'
import flagKz from '../../../assets/img/flag-kz.png'
import flagRu from '../../../assets/img/flag-ru.png'
import { lang, setLanguage } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { Box } from '@mui/system'

export default function LanguageMenu() {
    const dispatch = useAppDispatch()
    const language = useAppSelector(lang)
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return
        }

        setOpen(false)
    }

    const handleClick = (option: string) => {
        dispatch(setLanguage(option))
        setOpen(false)
    }

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        } else if (event.key === 'Escape') {
            setOpen(false)
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open)

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus()
        }

        prevOpen.current = open
    }, [open])

    const ButtonText = () => {
        if (language === 'kz') {
            return (
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        sx={{ textTransform: 'none' }}
                    >
                        <img
                            src={flagKz}
                            alt="flag"
                            style={{ marginRight: 8 }}
                        />
                        Қазақша
                    </Button>
                </Box>
            )
        }

        return (
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    sx={{ textTransform: 'none' }}
                >
                    <img
                        src={flagRu}
                        alt="flag"
                        style={{ marginRight: 8 }}
                    />
                    Русский
                </Button>
            </Box>
        )
    }

    return (
        <div>
            <Box
                sx={{
                    display: 'grid',
                    alignItems: 'center',
                    gap: 1,
                    gridTemplateColumns: '30px auto',
                    justifyContent: 'space-between',
                    m: '8px 0',
                    mb: 4,
                }}
            >
                <img
                    alt="flag"
                    src={Flag}
                    style={{ height: 24, width: 24, cursor: 'pointer' }}
                    onClick={handleToggle}
                />

                {ButtonText()}
            </Box>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start'
                                    ? 'left top'
                                    : 'left bottom',
                        }}
                    >
                        <Paper sx={{ borderRadius: 2 }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={() => handleClick('kz')}>
                                        <img
                                            src={flagKz}
                                            alt="flag"
                                            style={{ marginRight: 8 }}
                                        />
                                        Қазақша
                                    </MenuItem>

                                    <MenuItem onClick={() => handleClick('ru')}>
                                        <img
                                            src={flagRu}
                                            alt="flag"
                                            style={{ marginRight: 8 }}
                                        />
                                        Русский
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}
