import React from 'react'
import Navbar from '../../components/navbar'
import styled from "@emotion/styled";
import {useIntl} from 'react-intl';
import Footer from "../../components/footer";
import BannerBgEn from "../../assets/img/landing/works-bg-en.png";
import BannerBgRu from "../../assets/img/landing/works-bg-ru.png";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
import { WorksContent} from "../../utils/constants";
import {Button} from "@mui/material";
import BgImg from '../../assets/img/landing/bg-works.png'

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
                        Добро пожаловать в раздел Работы нашего проекта &quot; Progetto &quot; !
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
                        Добро пожаловать в раздел &quot;Работы&quot; - живой хроники нашего творческого союза! Здесь вы
                        обнаружите вдохновляющие и успешные проекты, созданные нашим сообществом. Дизайн, который мы
                        разрабатываем, не просто соответствует стандартам – он задает их.
                    </Typography>

                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 300,
                            fontSize: '42px',
                            color: '#FFF',
                            mb: 6,
                            textAlign: 'left'
                        }}
                    >
                        Боллее 100+ готовых работ созданные вмести с нашими подписчиками
                    </Typography>

                    <StyledBg src={BgImg}>
                        <Typography
                            variant="h1"
                            component="div"
                            color="text.secondary"
                            sx={{
                                fontWeight: 500,
                                fontSize: '72px',
                                color: '#FFF',
                                mb: 3,
                                textAlign: 'center',
                            }}
                        >
                            Развивайте Творчество Вместе с Progetto! 🚀
                        </Typography>
                        <Typography
                            variant="h1"
                            component="div"
                            color="text.secondary"
                            sx={{
                                fontWeight: 400,
                                fontSize: '40px',
                                color: '#FFF',
                                mb: 3,
                                textAlign: 'center'
                            }}
                        >
                            Мы всегда готовы вдохновляться вашим талантом! Если у вас есть уникальные работы, которыми
                            вы хотели бы поделиться с нашим творческим сообществом, отправляйте их на нашу почту [ваша
                            почта]. Мы уважаем вашу индивидуальность и труд, и готовы поддержать ваши лучшие работы.
                        </Typography>
                        <StyledButton>
                            Отправить свою работу
                        </StyledButton>
                    </StyledBg>

                    <GridBox>
                        {WorksContent.map(b => {
                            return (
                                <StyledBox key={b.id} src={b.img} height={500}>
                                    <NewsContentWrapper>
                                        <Box sx={{padding: '20px'}}>

                                            <Typography
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

const StyledButton = styled(Button)`
  background: rgba(35, 133, 74, 1);
  font-size: 24px;
  color: white;
  font-weight: 400;
  padding: 32px;
  width: 100%;
  border-radius: 16px;
  margin-top: 24px;

  &:hover {
    background: rgba(35, 133, 74, 0.9);

  }
`