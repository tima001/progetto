import React from 'react'
import Navbar from '../../components/navbar'
import styled from "@emotion/styled";
import BannerBgEn from '../../assets/img/landing/banner-bg-en.png'
import BannerBgRu from '../../assets/img/landing/banner-bg-ru.png'
import {useIntl} from 'react-intl';
import AnnouncementContent from './components/AnnouncementContent';
import BannerAdvertisement from './components/BannerAdvertisement';

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
                <BannerAdvertisement/>
                <AnnouncementContent/>
            </Main>
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
  background-color: #fff;
  min-height: 100vh;
  height: 100%;
`


const BannerImg = styled.img`
  background-image: ${(props) => `url(${props.src})`};
  object-fit: contain;
  width: 100%;
  background: no-repeat;
`