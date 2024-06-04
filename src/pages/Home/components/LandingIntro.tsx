import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import introImg from '../../../assets/img/landing/landing-advantages.png'
import '../style'
import {
    FlexBox,
    IntroContainer,
    IntroImg,
    LandingIntroDescription,
    LandingIntroImgBox,
    LandingIntroTitle,
    LandingIntroWrapper,
} from '../style'

function LandingIntro() {
    return (
        <IntroContainer>
            <LandingIntroWrapper>
                <LandingIntroImgBox>
                    <IntroImg
                        src={introImg}
                        alt="landing intro"
                    />
                </LandingIntroImgBox>

                <LandingIntroTitle>
                    ұбт-ға дайындайтын онлайн-мектеп
                </LandingIntroTitle>

                <LandingIntroDescription>
                    баланың оқуға деген қызығушылығын арттыра отырып ҰБТ-ға
                    дайындаймыз
                </LandingIntroDescription>

                <FlexBox>
                    <Link
                        to="/subjects"
                        style={{ width: 'inherit' }}
                    >
                        <Button
                            fullWidth={true}
                            size="large"
                            variant={'outlined'}
                        >
                            Курс таңда
                        </Button>
                    </Link>
                    <Link
                        to="/subjects"
                        style={{ width: 'inherit' }}
                    >
                        <Button
                            fullWidth={true}
                            size="large"
                            variant={'contained'}
                        >
                            тегін кеңес ал
                        </Button>
                    </Link>
                </FlexBox>
            </LandingIntroWrapper>
        </IntroContainer>
    )
}

export default LandingIntro
