import React from 'react'
import Navbar from '../../components/navbar'
import styled from "@emotion/styled";
import {useIntl} from 'react-intl';
import Footer from "../../components/footer";
import BannerBgEn from "../../assets/img/landing/banner-bg-education-en.png";
import BannerBgRu from "../../assets/img/landing/banner-bg-education-ru.png";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import EducationItem from "./components/EducationItem"
import {educationApiSlice} from "../../features/education/educationSlice";

const Home = () => {
    const { formatMessage } = useIntl()
    const {locale} = useIntl()

    const {data: eduData, refetch} = educationApiSlice.useFetchNewsQuery()

    return (
        <Wrapper>
            <Navbar/>
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
                        {formatMessage({ id: '50Chanels' })}

                    </Typography>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 200,
                            fontSize: '34px',
                            textAlign: 'center',
                            color: '#93918D',
                            mb: '48px'
                        }}
                    >

                        {formatMessage({ id: '50ChanelsInfo' })}

                    </Typography>
                    {eduData?.map((news) => (
                        <EducationItem key={news.id} news={news} locale={locale}/>
                    ))}
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

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  background: #fff;
  border-radius: 22px;
  border-bottom: 12px solid #23854A;
  overflow: hidden;
  margin-bottom: 24px;
`


const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '8px'};
  align-items: ${(props) => props.align || 'left'};
  justify-content: ${(props) => props.justify || 'left'};
  padding: ${(props) => props.padding || '0'};
`

const StyledImg = styled.img`
  min-width: 400px;
  height: 300px;
  object-fit: cover;
`