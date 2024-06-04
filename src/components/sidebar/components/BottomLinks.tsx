import React from 'react'
import styled from '@emotion/styled'
import SettingsOutlined from '../../../assets/icons/settingsOutlined.svg'

import LogoutIcon from '../../../assets/icons/logout.svg'
import { Box, Button, Divider, IconButton, useTheme } from '@mui/material'
import CustomMenuList from '../../muiComponents/languageMenu'
import { logout, userInfo } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

const boxStlyes = {
    display: 'grid',
    alignItems: 'center',
    gap: 1,
    gridTemplateColumns: '30px auto',
    justifyContent: 'space-between',
    m: '8px 0',
}

const BottomLinks = () => {
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const user = useAppSelector(userInfo)

    return (
        <Wrapper>
            <Divider />

            <Box sx={{ ...boxStlyes, mt: 4 }}>
                <img
                    alt="settings"
                    src={SettingsOutlined}
                    style={{ height: 24, width: 24 }}
                />

                <Button sx={{ textTransform: 'none' }}>
                    <Caption>Баптаулар</Caption>
                </Button>
            </Box>

            <CustomMenuList />

            <Divider sx={{ mb: 4 }} />

            <Caption>
                {user?.firstName} {user?.lastName}
            </Caption>

            <Caption color={theme.palette.grey[600]}>{user?.email}</Caption>

            <IconButton
                sx={{ mt: 1, width: '44px' }}
                onClick={() => dispatch(logout())}
            >
                <img
                    src={LogoutIcon}
                    alt="logout"
                />
            </IconButton>
        </Wrapper>
    )
}

export default BottomLinks

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Caption = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    margin: 0;
    color: ${(props) => (props.color ? props.color : '#1d1e1c')};

    @media screen and (max-width: 500px) {
        color: #fff;
    }
`
