import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Logo from '../../assets/icons/Logo.svg'
import { useAppSelector } from '../../app/hooks'
import { userInfo } from '../../features/user/userSlice'

const MobileNavBar = ({ openSideBar, toggleSideBar }) => {
    const user = useAppSelector(userInfo)

    return (
        <Wrapper>
            <Container>
                <img src={Logo} />

                {user.token ? (
                    <Hamburger
                        rounded
                        size={18}
                        toggled={openSideBar}
                        toggle={toggleSideBar}
                    />
                ) : (
                    <FlexBox>
                        <Link to="/subjects">
                            <Button variant={'outlined'}>Кіру</Button>
                        </Link>
                        <Link to="/subjects">
                            <Button variant={'contained'}>Тіркелу</Button>
                        </Link>
                    </FlexBox>
                )}
            </Container>
        </Wrapper>
    )
}

export default MobileNavBar

const Wrapper = styled.div`
    background: white;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 500px) {
        display: none;
    }
`

const Container = styled.div`
    max-width: 1234px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`
