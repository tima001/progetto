import React, {useState} from 'react'
import styled from '@emotion/styled'
import Logo from '../../assets/img/Logo.png'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import {useIntl} from 'react-intl'
import LanguageMenu from '../muiComponents/languageMenu/LanguageMenu'
import Photo from '../../assets/img/ava.png'
import {Button, Menu} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useAppDispatch} from "../../app/hooks";
import {logout} from "../../features/user/userSlice";
import {ArrowLineLeft, UserCircle} from "@phosphor-icons/react";

const NavbarForAdmin = ({avatar, fio}) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useAppDispatch()


    return (
        <Wrapper>
            <Container>
                <FlexBox>
                    <Link to="/">
                        <img height={62} src={Logo} alt={"logo"}/>
                    </Link>
                    <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        onClick={() =>  navigate(`/news-create`)}
                        sx={{
                            fontWeight: 300,
                            fontSize: '24px',
                            color: '#93918D',
                            cursor: 'pointer',
                        }}
                    >
                        News Create
                    </Typography>


                </FlexBox>
                <FlexBox gap="24px">
                    <FlexBox gap={'24px'}>

                        <LanguageMenu/>
                        <StyledLine/>
                    </FlexBox>
                    <StyledButtonForMenu
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {avatar === null ?
                            <StyledAva src={Photo} width={32} height={32}/>
                            :
                            <StyledAva src={avatar} width={32} height={32}/>
                        }


                        <Typography
                            variant="h6"
                            sx={{
                                color: '#FFF',
                                fontSize: '14px',
                                fontWeight: '500'
                            }}
                        >
                            {fio}

                        </Typography>
                    </StyledButtonForMenu>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        sx={{ mt: 1}}

                    >
                        <MenuItem sx={{width:'190px'}} onClick={() => navigate('/user-page')}><UserCircle weight="duotone" size={24} style={{marginRight: '12px'}} /> Профиль</MenuItem>
                        <MenuItem sx={{width:'190px'}} onClick={() => dispatch(logout())}><ArrowLineLeft weight="duotone" size={24} style={{marginRight: '12px'}} /> Шығу</MenuItem>
                    </Menu>


                </FlexBox>

            </Container>
        </Wrapper>
    )
}

export default NavbarForAdmin

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
const StyledAva = styled.img`
  border-radius: 50%;
  background-color: rgb(243, 244, 245);
  border: 2px solid #212121;
`;

const StyledButtonForMenu = styled(Button)`
  gap: 12px;
  padding: 16px 16px;
`;
