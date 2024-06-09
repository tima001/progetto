import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import LoginForm from '../components/loginForm/LoginForm'
import SignupForm from '../components/registrationForm/SignupForm'
import Bg from '../assets/img/login-bg.png'
import Logo from '../assets/img/landing/LogoWithText.png'
import {useNavigate} from "react-router-dom";

const Login = (showLoginPage) => {
    const navigate = useNavigate()
    //const user = storage?.get('user') || useAppSelector(userInfo)
    const [showLogin, setShowLogin] = useState(true)

    useEffect(() => {
        setShowLogin(showLoginPage.showLoginPage)
    }, [showLoginPage])

    const SignForm = () => {
        if (showLogin) return <LoginForm />

        return <SignupForm />
    }
    
    return (
        <Wrapper src={Bg}>
            <Main>
                <img alt="Logo" src={Logo} height={240} onClick={() => navigate('/')} style={{cursor: 'pointer'}}/>
                <SignForm />
            </Main>
        </Wrapper>
    )
}

export default Login

interface Props {
    src: any
}
const Wrapper = styled.div<Props>`
  background-color: #f1f3f5;
  min-height: 100vh;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: left;
`

const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
`
