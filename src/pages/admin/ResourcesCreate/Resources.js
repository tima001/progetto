import React, { useState } from 'react';
import styled from "@emotion/styled";
import { useIntl } from 'react-intl';
import Footer from "../../../components/footer";
import BannerBgEn from "../../../assets/img/landing/works-bg-en.png";
import BannerBgRu from "../../../assets/img/landing/works-bg-ru.png";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { userApiSlice } from "../../../features/user/userSlice";
import NavbarForAdmin from "../../../components/navbarForAdmin";
import { recourcesApiSlice } from "../../../features/recources/recourcesSlice";
import CreateResourcesDialog from "./components/CreateResourcesDialog";
import NewsItem from './components/ResourcesItem';

const Home = () => {
    const { locale } = useIntl();
    const { data: newsData, refetch } = recourcesApiSlice.useFetchNewsQuery();
    const { data: userData } = userApiSlice.useFetchCurrentUserQuery();

    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Wrapper>
            <NavbarForAdmin avatar={userData?.avatar} fio={userData?.fio} />
            <Main>
                {locale === 'en' ? <BannerImg src={BannerBgEn} /> : <BannerImg src={BannerBgRu} />}
                <Box sx={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 0' }}>
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
                        Добро пожаловать в раздел Ресурсы нашего проекта &quot;Progetto&quot;!
                    </Typography>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 300,
                            fontSize: '30px',
                            color: '#93918D',
                            mb: 12,
                            textAlign: 'center'
                        }}
                    >
                        Здесь мы предоставляем вам множество бесплатных ресурсов, чтобы ваши творческие идеи легко превратились в реальность. Используйте наши бесплатные шрифты, захватывающие 3D-модели, и разнообразные текстуры для придания вашим проектам неповторимости.
                    </Typography>
                    <StyledButton variant={"contained"} onClick={handleOpenDialog}>
                        Создать ресурс
                    </StyledButton>
                    <GridBox>
                        {newsData?.map(news => (
                            <NewsItem key={news.id} news={news} refetch={refetch} />
                        ))}
                    </GridBox>
                </Box>
            </Main>
            <CreateResourcesDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                refetch={refetch}
            />
            <Footer />
        </Wrapper>
    );
};

export default Home;

const Main = styled.main`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #1C1C1C;
  min-height: 100vh;
  height: 100%;
`;

const BannerImg = styled.img`
  background-image: ${(props) => `url(${props.src})`};
  object-fit: contain;
  width: 100%;
  background: no-repeat;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 42px;
`;

const StyledButton = styled(Button)`
  background: rgba(35, 133, 74, 1);
  font-size: 24px;
  color: white;
  font-weight: 400;
  padding: 32px;
  width: 100%;
  border-radius: 16px;
  margin-bottom: 48px;

  &:hover {
    background: rgba(35, 133, 74, 0.9);
  }
`;
