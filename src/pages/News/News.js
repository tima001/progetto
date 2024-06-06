import React from 'react'
import Navbar from '../../components/navbar'
import styled from "@emotion/styled";
import {useIntl} from 'react-intl';
import Footer from "../../components/footer";
import BannerBgEn from "../../assets/img/landing/banner-bg-news-en.png";
import BannerBgRu from "../../assets/img/landing/banner-bg-news-ru.png";
import {Box} from "@mui/system";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

const News = () => {
    const {locale} = useIntl()
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment,) => {
        setAlignment(newAlignment);
    };

    const CustomToggleButton = styled(ToggleButton)(({theme}) => ({

        '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: '#23854A',
            color: 'white',
        },
        '&.MuiToggleButton-root': {
            background: '#D9D9D9',
            // margin: '4px',
            height: '32px',
            border: 'none',


            '&.Mui-selected': {
                backgroundColor: '#23854A',
                color: 'white',
                borderRadius: '8px'
            },
        },
    }));


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
                <GridBox>
                    <Box>
                        <Box sx={{background: '#D9D9D9', width: 'min-content', borderRadius: '8px'}}>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <CustomToggleButton value="web">Web</CustomToggleButton>
                                <CustomToggleButton value="android">Android</CustomToggleButton>
                                <CustomToggleButton value="ios">iOS</CustomToggleButton>
                            </ToggleButtonGroup>
                        </Box>


                    </Box>
                    <Box sx={{background: '#ffffff', height: 120}}/>
                </GridBox>
            </Main>
            <Footer/>
        </Wrapper>
    )
}


export default News

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
  grid-template-columns: 2.5fr 1.5fr;
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