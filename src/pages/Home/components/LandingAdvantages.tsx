import React from 'react'
import '../style'
import advantageImg from '../../../assets/img/landing/landing-advantages.png'
import {
    AdvantagesContainer,
    AdvantagesContent,
    AdvantagesImgBox,
    AdvantagesText,
    AdvantagesTitle,
    AdvantagesWrapper,
} from '../style'

const LandingAdvantages = () => {
    return (
        <AdvantagesContainer>
            <AdvantagesWrapper>
                <AdvantagesContent>
                    <AdvantagesTitle>
                        оқушылармен <span>бір толқында</span>
                    </AdvantagesTitle>
                    <AdvantagesText>
                        мұғалімдеріміз оқушылармен бір тілде сөйлеседі, пәнге
                        деген қызығушылығын ояту жолдарын біледі
                    </AdvantagesText>
                </AdvantagesContent>
                <AdvantagesImgBox>
                    <img
                        src={advantageImg}
                        alt="landing intro"
                    />
                </AdvantagesImgBox>
            </AdvantagesWrapper>
        </AdvantagesContainer>
    )
}

export default LandingAdvantages
