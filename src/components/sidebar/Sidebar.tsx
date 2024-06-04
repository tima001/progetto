import React from 'react'
import { useIntl } from 'react-intl'
import { Box, Divider } from '@mui/material'
import Logo from '../../assets/icons/Logo.svg'
import { sidebarLinks } from '../../utils/constants'
import { useAppSelector } from '../../app/hooks'
import BottomLinks from './components/BottomLinks'
import { MenuItem } from './components/MenuItem'
import { Main, Wrapper, logo, section } from './style'

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        openSideBar?: boolean
    }
}

const Sidebar = ({ openSideBar }) => {
    const { formatMessage } = useIntl()
    const userRole = useAppSelector(
        (state) => state.user.userInfo.roles[0] || 'noData',
    )

    const filteredLinks = sidebarLinks({ formatMessage }).filter((link) =>
        link.allowedRoles.includes(userRole),
    )

    return (
        <Wrapper openSideBar={openSideBar}>
            <Main>
                <Box>
                    <img
                        alt="logo"
                        src={Logo}
                        style={logo}
                    />
                </Box>

                <Divider style={{ margin: '20px 0' }} />

                <nav>
                    <ul>
                        {/* <li>
                            <Box sx={section}>
                                {formatMessage({ id: userRole })}
                            </Box>
                        </li> */}

                        { sidebarLinks({ formatMessage }).map((link) => (
                            <MenuItem
                                key={link.id}
                                path={link.path}
                                title={link.title}
                            />
                        ))}
                    </ul>
                </nav>
            </Main>

            <BottomLinks />
        </Wrapper>
    )
}

export default Sidebar
