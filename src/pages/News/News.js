import React from 'react';
import Navbar from '../../components/navbar';
import styled from "@emotion/styled";
import {useIntl} from 'react-intl';
import Footer from "../../components/footer";
import BannerBgEn from "../../assets/img/landing/banner-bg-news-en.png";
import BannerBgRu from "../../assets/img/landing/banner-bg-news-ru.png";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import {BestWorks} from "../../utils/constants";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {newsApiSlice} from "../../features/news/newsSlice";
import NewsItem from "./components/NewsItem";

const News = () => {
    const {locale} = useIntl();
    const [alignment, setAlignment] = React.useState('web');
    const {data: newsData, refetch} = newsApiSlice.useFetchNewsQuery();

    const handleChange = (event, newAlignment,) => {
        setAlignment(newAlignment);
    };

    const CustomToggleButton = styled(ToggleButton)(() => ({
        '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: '#23854A',
            color: 'white',
        },
        '&.MuiToggleButton-root': {
            background: '#D9D9D9',
            border: 'none',
            '&.Mui-selected': {
                backgroundColor: '#23854A',
                color: 'white',
                borderRadius: '8px'
            },
        },
    }));

    const getClippedContent = (content) => {
        const words = content.split(' ');
        if (words.length > 15) {
            return words.slice(0, 15).join(' ') + '...';
        }
        return content;
    };

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
                <GridBox firstPadding={24} secondPadding={48}>
                    <Box sx={{justifySelf: 'end'}}>

                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            sx={{background: '#D9D9D9', height: '40px', p: '4px', borderRadius: '10px'}}
                        >
                            <CustomToggleButton value="web">Все</CustomToggleButton>
                            <CustomToggleButton value="android">Новый</CustomToggleButton>
                        </ToggleButtonGroup>
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

                                        <NewsContentWrapper className="fullContentWrapper">
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
            <Footer/>
        </Wrapper>
    )
}

export default News;

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

  &:hover .contentWrapper {
    opacity: 0;
    transition: opacity 1s ease-in;
    visibility: hidden;
  }

  &:hover .fullContentWrapper {
    opacity: 1;
    transition: opacity 1s ease-out;
    visibility: visible;
    height: 100%;
  }
`;



const NewsContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.83);
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  opacity: 1;
  visibility: visible;
  //transition: opacity 0.5s ease-in;

  &.fullContentWrapper {
    opacity: 0;
    visibility: hidden;
    //transition: opacity 0.5s ease-out;

  }
`;

