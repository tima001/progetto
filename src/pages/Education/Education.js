import React from 'react'
import Navbar from '../../components/navbar'
import styled from "@emotion/styled";
import {useIntl} from 'react-intl';
import Footer from "../../components/footer";
import BannerBgEn from "../../assets/img/landing/banner-bg-education-en.png";
import BannerBgRu from "../../assets/img/landing/banner-bg-education-ru.png";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import {EducationContent} from "../../utils/constants";
import {capitalize} from "@mui/material";

const Home = () => {
    const {locale} = useIntl()
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
                        Топ 50 каналов и Полезных Ресурсов для Дизайнеров!
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

                        Привет, увлеченные дизайном! Если вы ищете вдохновение, знания и уникальные идеи, то эта
                        страница для вас. Мир дизайна богат разнообразием и креативом. Мы подготовили для вас подборку
                        лучших Каналов и полезных ресурсов, которые помогут вам раскрыть свой талант и стать еще лучше!
                    </Typography>
                    {EducationContent.map((row) => {
                        return (
                            <>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '42px',
                                        color: '#FFF',
                                        mt: 12,
                                        mb: 4
                                    }}
                                >
                                    {row[`title${capitalize(locale)}`]}

                                </Typography>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 200,
                                        fontSize: '32px',
                                        color: '#93918D',
                                        mb: 8
                                    }}
                                >
                                    {row[`description${capitalize(locale)}`]}
                                </Typography>
                                {
                                    row.content.map((b, index) => {
                                        return (
                                            <StyledCard key={index}>
                                                <FlexBox direction="column" justify="space-between" padding="24px">
                                                    <FlexBox gap="24px">
                                                        <img alt="logo" src={b.logo} width={60} height={60}
                                                             style={{borderRadius: '50%'}}/>
                                                        <Typography
                                                            variant="h1"
                                                            component="div"
                                                            color="text.secondary"
                                                            sx={{
                                                                fontWeight: 400,
                                                                fontSize: '32px',
                                                                color: '#000'
                                                            }}
                                                        >
                                                            {b[`title${capitalize(locale)}`]}
                                                        </Typography>

                                                    </FlexBox>
                                                    <Typography
                                                        variant="h1"
                                                        component="div"
                                                        color="text.secondary"
                                                        sx={{
                                                            fontWeight: 300,
                                                            fontSize: '32px',
                                                            color: 'rgba(0,0,0,0.78)'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: b[`description${capitalize(locale)}`]}}
                                                    />
                                                    <Typography
                                                        variant="h1"
                                                        component="div"
                                                        color="text.secondary"
                                                        sx={{
                                                            fontWeight: 400,
                                                            fontSize: '32px',
                                                            color: 'rgba(0,0,0,0.78)'
                                                        }}
                                                    >
                                                        {b.link}
                                                    </Typography>
                                                </FlexBox>
                                                <StyledImg src={b.photo}/>
                                            </StyledCard>
                                        )
                                    })
                                }

                            </>
                        )
                    })}
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