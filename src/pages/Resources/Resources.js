import React from 'react'
import styled from "@emotion/styled";
import {useIntl} from 'react-intl';
import Footer from "../../components/footer";
import BannerBgEn from "../../assets/img/landing/works-bg-en.png";
import BannerBgRu from "../../assets/img/landing/works-bg-ru.png";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import NewsItem from './components/ResourcesItem'
import NavBar from "../../components/navbar";
import {recourcesApiSlice} from "../../features/recources/recourcesSlice";

const Home = () => {
    const { formatMessage } = useIntl()
    const {locale} = useIntl()
    const {data: newsData, isFetching: isLoadingNews, refetch} = recourcesApiSlice.useFetchNewsQuery();

    return (
        <Wrapper>
            <NavBar/>
            <Main>
                {
                    locale === 'en' ?
                        <BannerImg src={BannerBgEn}/>
                        :
                        <BannerImg src={BannerBgRu}/>
                }
                <Box sx={{maxWidth: '1440px', margin: '0 auto', padding: '40px 0'}}>

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



                    <GridBox>
                        {newsData?.map(b => {
                            return (
                                <NewsItem key={b.id} b={b} locale={locale} refetch={refetch}/>
                            )
                        })}
                    </GridBox>

                </Box>


            </Main>

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

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 42px
`

const StyledBox = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  height: ${(props) => `${props.height}px`};
  background-size: cover;
  border-radius: 32px;
  align-items: end;
  display: flex;
  overflow: hidden;
  position: relative;
  border: 2px solid #FFF;
  background-position: center;
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
const StyledBg = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  border-radius: 28px;
  overflow: hidden;
  background-size: auto;
  background-position: top;
  margin-bottom: 42px;
  padding: 80px 40px 40px 40px;
`;

