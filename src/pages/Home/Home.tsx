import React from 'react'
import Navbar from '../../components/navbar'
import styled from "@emotion/styled";
import BannerBgEn from '../../assets/img/landing/banner-bg-en.png'
import BannerBgRu from '../../assets/img/landing/banner-bg-ru.png'
import {useIntl} from 'react-intl';
import BannerAdvertisement from './mainPage/BannerAdvertisement';
import WhyUs from "./mainPage/WhyUs/WhyUs";
import FreeResources from "./mainPage/FreeResources/FreeResources";
import FreeWorks from "./mainPage/FreeWorks/FreeWorks";
import ContactUs from "./mainPage/ContactUs/ContactUs";
import Footer from "../../components/footer";

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
                <WhyUs/>
                <FreeResources/>
                <FreeWorks/>
                <ContactUs/>
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