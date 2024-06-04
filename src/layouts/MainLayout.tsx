import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useIntl } from 'react-intl'
import { Navigate, Outlet } from 'react-router-dom'
import styled from '@emotion/styled'
import Sidebar from '../components/sidebar'
import storage from '../utils/storageService'
import ChangePasswordDialog from '../components/dialogs/ChangePasswordDialog'
import { useAppSelector } from '../app/hooks'
import { userApiSlice, userInfo } from '../features/user/userSlice'
import MobileNavBar from '../components/mobileNavBar/MobileNavBar'

interface Props {
    hideSidebar?: boolean
}

const MainLayout: React.FC<Props> = () => {
    const { formatMessage } = useIntl()

    const [open, setOpen] = useState(false)
    const [openSideBar, setOpenSidebar] = useState(false)

    const toggleSideBar = () => {
        setOpenSidebar(!openSideBar)
    }
    const user = useAppSelector(userInfo)

    const [changePassword, { isLoading }] =
        userApiSlice.useChangePasswordMutation()

    // if (!storage?.get('token')) {
    //     return <Navigate to="/" />
    // }

    const handleChangePassword = async (password: string) => {
        try {
            await changePassword(password).unwrap()
            storage.set('user', {
                ...user,
                isFirstEntry: false,
            })
            setOpen(false)
            toast.success(formatMessage({ id: 'updatedSuccess' }))
        } catch (error) {}
    }

    useEffect(() => {
        user?.isFirstEntry && setOpen(true)
    }, [user])

    return (
        <Wrapper>
            <Sidebar openSideBar={openSideBar} />

            <Main>
                <MobileNavBar
                    openSideBar={openSideBar}
                    toggleSideBar={toggleSideBar}
                />

                <Container>
                    <Outlet />
                </Container>
            </Main>

            <ChangePasswordDialog
                open={open}
                confirmAction={handleChangePassword}
                isLoading={isLoading}
                handleClose={() => setOpen(false)}
            />
        </Wrapper>
    )
}

export default MainLayout

const Wrapper = styled.div`
    display: flex;
    background: #fff;
    height: 100vh;
    overflow: hidden;
`

const Main = styled.div`
    width: 100%;
    padding-bottom: 60px;
    overflow: auto;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin: 24px;

    @media screen and (max-width: 500px) {
        margin: auto;
    }
`
