import React from 'react'
import NavbarForAdmin from "../../../components/navbarForAdmin";
import styled from "@emotion/styled";
import {useIntl} from 'react-intl';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import {userApiSlice} from "../../../features/user/userSlice";
import Photo from "../../../assets/img/ava.png";
import {Button} from "@mui/material";
import bg from '../../../assets/img/bg-of-user-info.png'

const AdminPage = () => {

    const {data: data } = userApiSlice.useFetchCurrentUserQuery()

    return (
        <Wrapper>
            <NavbarForAdmin avatar={data?.avatar} fio={data?.fio}/>
            <Box sx={{maxWidth: '1280px', margin: '0 auto'}}>
                <UserInfo src={bg} radius="0" height="160px">
                    {data?.avatar === null ?
                        <StyledAva src={Photo} width={180} height={180}/>
                        :
                        <StyledAva src={data?.avatar} width={180} height={180}/>
                    }
                </UserInfo>
                <UserInfo radius=" 0 0 24px 24px">
                    <FlexBox justify={"space-between"} align="center" width="100%">

                        <FlexBox direction="column">

                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#212121',
                                    fontSize: '24px',
                                    fontWeight: '500'
                                }}
                            >{data?.fio}</Typography>
                        </FlexBox>

                        <FlexBox>
                            <StyledButton variant="outlined">
                                мой материалы
                            </StyledButton>
                            <StyledButton variant="contained">
                                редактировать
                            </StyledButton>
                        </FlexBox>
                    </FlexBox>
                </UserInfo>

            </Box>

            {/*<Footer/>*/
            }
        </Wrapper>
    )
}


export default AdminPage

const Main = styled.main`
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  background-color: #1C1C1C;
  min-height: 100vh;
  height: 100%;
`
const BannerImg = styled.img`
  background-image: ${(props) => `url(${props.src})`};
  object-fit: contain;
  width: 100%;
  background: no-repeat;
`

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  background: #fff;
  border-radius: ${(props) => props.radius} ;
  padding: 80px 80px 40px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  height: ${(props) => props.height || 'auto'};;
  position: relative;
`


const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '8px'};
  align-items: ${(props) => props.align || 'left'};
  justify-content: ${(props) => props.justify || 'left'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
`

const StyledButton = styled(Button)`
  padding: 20px 54px;
  border-radius: 16px;
`

const StyledAva = styled.img`
  border-radius: 50%;
  background-color: rgb(243, 244, 245);
  border: 2px solid #212121;
  position: absolute;
  bottom:-70px;
  z-index: 3;
`;