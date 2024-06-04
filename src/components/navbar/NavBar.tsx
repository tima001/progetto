import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Logo from '../../assets/icons/Logo.svg'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Login from '../../pages/Login'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Container>
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <FlexBox>
                    <Button
                        size="large"
                        variant={'outlined'}
                        onClick={() => navigate('/login')}
                    >
                        Кіру
                    </Button>
                    <ButtonRemove>
                        <Button
                            size="large"
                            variant={'contained'}
                            onClick={() => navigate('/sign-up')}
                        >
                            Тіркелу
                        </Button>
                    </ButtonRemove>
                </FlexBox>
            </Container>
        </Wrapper>
    )
}

export default NavBar

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    background: white;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

const Container = styled.div`
    max-width: 1340px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1380px) {
        padding: 0px 20px;
    }
`

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`
const ButtonRemove = styled.div`
    display: block;
    @media (max-width: 500px) {
        display: none;
    }
`
