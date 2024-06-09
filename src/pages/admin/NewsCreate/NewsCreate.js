import React, {useState} from 'react';
import NavbarForAdmin from "../../../components/navbarForAdmin";
import styled from "@emotion/styled";
import {newsApiSlice} from "../../../features/news/newsSlice";
import {Button, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Footer from "../../../components/footer";
import {useIntl} from "react-intl";
import CreateNewsDialog from "./components/CreateNewsDialog";
import BannerBgEn from '../../../assets/img/landing/banner-bg-news-en.png'
import BannerBgRu from '../../../assets/img/landing/banner-bg-news-ru.png'
import NewsItem from "./components/NewsItem";
import {BestWorks} from "../../../utils/constants";
import {userApiSlice} from "../../../features/user/userSlice";

const NewsCreate = () => {
    const {locale} = useIntl();
    const {data: newsData, isFetching: isLoadingNews, refetch} = newsApiSlice.useFetchNewsQuery();

    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
    const {data: data, isFetching: isLoading} = userApiSlice.useFetchCurrentUserQuery()



    return (
        <Wrapper>
            <NavbarForAdmin avatar={data?.avatar} fio={data?.fio}/>
            <Main>
                <BannerImg src={locale === 'en' ? BannerBgEn : BannerBgRu}/>
                <GridBox firstPadding={24} secondPadding={48}>
                    <Box sx={{justifySelf: 'end'}}>
                        <Button sx={{height: '100%', fontSize: '24px', textTransform: 'capitalize', fontWeight: '400'}} variant="contained" onClick={() => handleOpenDialog()}>
                            Create News
                        </Button>
                    </Box>

                    <Typography
                        variant="h5"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 400,
                            fontSize: '24px',
                            color: '#FFF',
                            textAlign: 'center',
                            background: 'rgba(35, 133, 74, 1)',
                            borderRadius: '10px',
                            padding: '4px',
                        }}
                    >
                        Лучшие работы за этот месяц
                    </Typography>
                </GridBox>
                <GridBox firstPadding={24} secondPadding={48}>
                    <Box>
                        {newsData?.map((news) => (
                            <NewsItem key={news.id} news={news} locale={locale} refetch={refetch}/>
                        ))}
                    </Box>
                    <Box>
                        {BestWorks.map((b, index) => {
                            return (
                                <StyledBox key={index} src={b.img} height={330}>

                                    <NewsContentWrapper className="contentWrapper">
                                        <Box sx={{padding: '20px'}}>

                                            <Typography
                                                key={index}
                                                variant="caption"
                                                component="div"
                                                color="text.secondary"
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '28px',
                                                    color: '#FFF',
                                                }}
                                            >
                                                {b.name}
                                            </Typography>
                                        </Box>

                                    </NewsContentWrapper>

                                </StyledBox>
                            )
                        })}


                    </Box>

                </GridBox>
            </Main>
            <CreateNewsDialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                refetch={refetch}
            />
            <Footer/>
        </Wrapper>
    );
};


export default NewsCreate;

const Wrapper = styled.div`
  background-color: #1C1C1C;
  min-height: 100vh;
  height: 100%;
`;

const Main = styled.main`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const BannerImg = styled.img`
  object-fit: contain;
  width: 100%;
  background: no-repeat;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: ${(props) => `${props.firstPadding}px ${props.secondPadding}px`};
  gap: 24px;
`;


const StyledBox = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  height: ${(props) => `${props.height}px`};
  background-size: cover;
  border-radius: 32px;
  align-items: end;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-bottom: 36px;
  border: 2px solid #FFF;
`;

const NewsContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.83);
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  opacity: 1;
  visibility: visible;
`;
