import React from 'react'
import Navbar from '../../components/navbar'
import LandingIntro from './components/LandingIntro'
import LandingStatistics from './components/LandingStatistics'
import LandingTeachers from './components/LandingTeachers'
import LandingPriceList from './components/LandingPriceList'
import Contacts from './components/Contacts'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer'
import LandingFeatures from './components/LandingFeatures'
import { Main, Wrapper } from './style'
const Home = () => {
    return (
        <Wrapper>
            <Navbar />
            <Main>
                <LandingIntro />
                <LandingStatistics />
                <LandingFeatures />
                <LandingTeachers />
                <LandingPriceList />
                <Contacts />
                <Reviews />
                <Footer />
            </Main>
        </Wrapper>
    )
}

export default Home
