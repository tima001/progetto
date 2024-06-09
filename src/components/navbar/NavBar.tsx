import React, { useState} from 'react'
import styled from '@emotion/styled'
import Logo from '../../assets/img/Logo.png'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import {NavBarContentText} from "../../utils/constants";
import {useIntl} from 'react-intl'
import LanguageMenu from '../muiComponents/languageMenu/LanguageMenu'
import { ArrowCircleRight, PencilLine } from "@phosphor-icons/react";

const NavBar = () => {
    const navigate = useNavigate()
    const {formatMessage} = useIntl()
    const [selectedNavItem, setSelectedNavItem] = useState(null);

    const handleNavClick = (title) => {
        setSelectedNavItem(title);
        navigate(`/${title}`);
    };



    return (
        <Wrapper>
            <Container>
                <FlexBox>
                    <Link to="/">
                        <img height={62} src={Logo} alt={"logo"}/>
                    </Link>
                    {NavBarContentText.map((b,index) => {
                        return (
                            <Typography
                                key={index}
                                variant="caption"
                                component="div"
                                color="text.secondary"
                                onClick={() => handleNavClick(b.title)}
                                sx={{
                                    fontWeight: 300,
                                    fontSize: '24px',
                                    color: '#93918D',
                                    cursor: 'pointer',
                                    borderBottom: selectedNavItem === b.title ? '2px solid #23854A' : 'none'
                                }}
                            >
                                {formatMessage({ id: b.title })}
                            </Typography>
                        )
                    })}


                </FlexBox>
                <FlexBox>
                    <FlexBox gap={'24px'}>

                        <LanguageMenu/>
                        <StyledLine/>
                    </FlexBox>


                    <Button
                        size="medium"
                        variant={'contained'}
                        color={"secondary"}
                        onClick={() => navigate('/sign-up')}
                        sx={{color: '#fff'}}
                    >
                        <PencilLine size={24} />
                        Sign up
                    </Button>
                    <Button
                        size="medium"
                        variant={'contained'}
                        color={"primary"}
                        onClick={() => navigate('/login')}
                        sx={{color: '#000'}}
                    >
                        <ArrowCircleRight size={24} />
                        Sign in
                    </Button>
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
  background: #1D1818;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  @media (max-width: 1380px) {
    padding: 0 20px;
  }
`

interface FlexBoxProps {
    gap?: string;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: ${(props) => props.gap || '50px'};
`
const StyledLine = styled.div`
  height: 36px;
  width: 2px;
  border-radius: 10%;
  background: #93918D;
`

