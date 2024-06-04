import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import LoginForm from '../components/loginForm/LoginForm'
import Navbar from '../components/navbar'
import SignupForm from '../components/registrationForm/SignupForm'

const Login = (showLoginPage) => {
    //const navigate = useNavigate()
    //const user = storage?.get('user') || useAppSelector(userInfo)
    const [showLogin, setShowLogin] = useState(true)

    const toggleForm = () => {
        setShowLogin(!showLogin)
    }

    useEffect(() => {
        setShowLogin(showLoginPage.showLoginPage)
    }, [showLoginPage])

    const SignForm = () => {
        if (showLogin) return <LoginForm toggleForm={toggleForm} />

        return <SignupForm toggleForm={toggleForm} />
    }
    
    return (
        <Wrapper>
            <Navbar />
            <Main>
                <SignForm />
            </Main>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    background-color: #f1f3f5;
    min-height: 100vh;
    height: 100%;
`

const Main = styled.main`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
