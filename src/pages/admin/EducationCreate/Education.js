import React, {useState} from 'react'
import {useIntl} from 'react-intl';
import {Box} from "@mui/system";
import styled from "@emotion/styled";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Footer from "../../../components/footer";
import BannerBgEn from "../../../assets/img/landing/banner-bg-education-en.png";
import BannerBgRu from "../../../assets/img/landing/banner-bg-education-ru.png";
import NavbarForAdmin from "../../../components/navbarForAdmin";
import {userApiSlice} from "../../../features/user/userSlice";
import CreateEducationDialog from "./components/CreateEducationDialog";
import {educationApiSlice} from "../../../features/education/educationSlice";
import EducationItem from "./components/EducationItem";

const Home = () => {
    const {formatMessage} = useIntl()
    const {locale} = useIntl()
    const {data: data, isFetching: isLoading} = userApiSlice.useFetchCurrentUserQuery()

    const {data: eduData, refetch} = educationApiSlice.useFetchNewsQuery()

    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    return (
        <Wrapper>
            <NavbarForAdmin avatar={data?.avatar} fio={data?.fio}/>
            <Main>
                {
                    locale === 'en' ?
                        <BannerImg src={BannerBgEn}/>
                        :
                        <BannerImg src={BannerBgRu}/>
                }
                <Box sx={{maxWidth: '1280px', margin: '0 auto', padding: '40px'}}>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 400,
                            fontSize: '48px',
                            color: '#FFF',
                            mb: 3,
                            textAlign: 'center'
                        }}
                    >
                        {formatMessage({id: '50Chanels'})}

                    </Typography>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 200,
                            fontSize: '34px',
                            textAlign: 'center',
                            color: '#93918D'
                        }}
                    >

                        {formatMessage({id: '50ChanelsInfo'})}

                    </Typography>

                    <StyledButton variant={"contained"} onClick={() => handleOpenDialog()}>
                        Создать ресурс
                    </StyledButton>
                    {eduData?.map((news) => (
                        <EducationItem key={news.id} news={news} locale={locale} refetch={refetch}/>
                    ))}
                </Box>

            </Main>
            <CreateEducationDialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                refetch={refetch}
            />
            <Footer/>
        </Wrapper>
    )
}


export default Home

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

const StyledButton = styled(Button)`
  padding: 24px 48px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 48px;
  margin-bottom: 48px;
  width: 100%;
`