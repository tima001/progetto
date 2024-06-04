import styled from '@emotion/styled'

export const SectionContainer = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    margin-bottom: 150px;
    @media (max-width: 767px) {
        margin-bottom: 100px;
    }
`
export const LandingSectionContainer = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    margin-bottom: 150px;
    @media (max-width: 1370px) {
        margin-left: 20px;
        margin-right: 20px;
    }
    @media (max-width: 767px) {
        margin-bottom: 100px;
    }
`
export const ContactsWrapper = styled.div`
    position: relative;
    padding: 48px 82px 48px 56px;
    background-color: var(--lightblue-color);
    border-radius: 24px;
    justify-content: space-between;
    display: flex;
    margin-right: 20px;
    margin-left: 20px;
    @media (max-width: 800px) {
        flex-direction: column;
        gap: 40px;
        padding: 20px 24px 28px;
        border-radius: 16px;
    }
`

export const ContactsContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 606px;
    padding-top: 8px;
    padding-right: 20px;
    margin-right: auto;
`

export const ContactsTitle = styled.h2`
    margin-bottom: 16px;
    font-size: 50px;
    font-weight: 500;
    line-height: 54px;
    @media (max-width: 1040px) {
        margin-bottom: 12px;
        font-size: 28px;
        line-height: 34px;
    }
    @media (max-width: 1279px) {
        font-size: 38px;
        line-height: 44px;
        letter-spacing: 0.02em;
    }
`

export const ContactsText = styled.p`
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0.02em;
    opacity: 0.8;
    @media (max-width: 1040px) {
        font-size: 18px;
        line-height: 22px;
    }
    @media (max-width: 1279px) {
        font-size: 20px;
        line-height: 24px;
    }
`

export const ContactsForm = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    @media (max-width: 800px) {
        width: auto;
        max-width: none;
    }
`

export const InputTextInput = styled.input`
    padding: 8px 0px 8px 16px;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.02em;
    background-color: #fff;
    border-radius: 12px;
    border-width: 0px;
    @media (max-width: 1040px) {
        padding: 9px 14px 11px;
        font-size: 20px;
        line-height: 24px;
        border-radius: 8px;
    }
`

export const CallbackInput = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

export const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    @media (max-width: 440px) {
        flex-direction: column;
        width: 100%;
    }
`
export const Wrapper = styled.div`
    background-color: #fff;
    min-height: 100vh;
    height: 100%;
`

export const Main = styled.main`
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const TeachersWrapper = styled.div`
    padding: 64px;
    @media (max-width: 1160px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1600px) {
        padding: 20px;
        padding-bottom: 0px;
    }
`

export const TeacherCardTop = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
    gap: 40px;
    @media (max-width: 1160px) {
        max-width: 100%;
    }
    @media (max-width: 700px) {
        max-width: 80%;
    }
`

export const TeacherCardName = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 100%;
    @media (max-width: 700px) {
        font-size: 48px;
    }
`

export const TeacherCardUniversity = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    @media (max-width: 700px) {
        font-size: 20px;
    }
`

export const TeachersButtonAll = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 480px;
    margin-top: 40px;
    @media (max-width: 1160px) {
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        max-width: 100%;
        padding-bottom: 50px;
    }
`

export const TeachersButton = styled.button`
    border: 1px solid var(--toastify-color-dark);
    border-radius: 30px;
    padding: 8px 24px;
    background: transparent;
    color: var(--toastify-color-dark);
    text-align: middle;
    margin-right: 10px;
    font-weight: 500;
    font-size: 18px;
    text-transform: lowercase;
    margin-bottom: 16px;

    &:hover {
        transform: rotate(3deg);
    }

    &.active {
        border-radius: 30px;
        padding: 8px 24px;
        background: var(--toastify-color-dark);
        transform: rotate(2deg);
        color: var(--toastify-color-light);
        font-weight: 400;
        font-size: 18px;
        text-transform: lowercase;
    }
`

export const TeacherCardImage = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 700px;
    @media (max-width: 1160px) {
        position: relative;
        width: 500px;
    }
    @media (max-width: 700px) {
        position: relative;
        width: 400px;
    }
    @media (max-width: 600px) {
        position: relative;
        width: 300px;
    }
`
export const TeachersContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    max-width: 1360px;
    margin: 0 auto;
    margin-bottom: 150px;
    border-radius: 24px;
    background-color: var(--ghost-white-color);
    margin-top: 200px;
    @media (max-width: 1400px) {
        padding: 0;
        border-radius: 24px;
    }
    @media (max-width: 767px) {
        margin-bottom: 100px;
    }
`
export const LandingFeaturesSection = styled.section`
    padding-top: 100px;
    padding-bottom: 40px;
    color: #121212;
    background-color: var(--ghost-white-color);
`

export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1360px;
    padding: 0 24px;
    margin: 0 auto;
`

export const FeaturesTop = styled.div`
    display: flex;
    margin-bottom: 80px;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const FeaturesTitle = styled.h2`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 10px;
    margin: 0;
    font-size: 80px;
    font-weight: 500;
    line-height: 100px;
    width: 100%;
    @media (max-width: 1040px) {
        padding-left: 0;
        font-size: 50px;
        line-height: 54px;
    }
    @media (max-width: 767px) {
        margin-bottom: 12px;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 0.02em;
    }
`

export const FeaturesTitleTopLine = styled.span`
    margin-bottom: 0;
`

export const FeaturesTitleBottomLine = styled.span`
    transform: none;
    display: inline-flex;
`

export const FeaturesDescriptionText = styled.p`
    width: 48%;
    margin: 75px 0 0 48px;
    font-size: 30px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.02em;

    span {
        padding: 0 8px 2px;
        margin-left: 6px;
        margin-right: 6px;
        border: 2px solid;
        border-radius: 40px;
        -webkit-box-decoration-break: clone;
    }
    @media (max-width: 1040px) {
        width: 65%;
        margin-top: 24px;
        margin-left: 3.6%;
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
    }
    @media (max-width: 767px) {
        width: 100%;
        margin-top: 0;
        margin-left: 0;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
`

export const FeaturesBottom = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    @media (max-width: 1040px) {
        display: none;
    }
`
export const FeatureBottomMobile = styled.div`
    display: none;
    @media (max-width: 1040px) {
        display: flex;
        flex-direction: column;
    }
`
export const FeaturesNavigationSlideBtn = styled.button`
    font-family: 'Gilroy';
    display: flex;
    align-items: center;
    min-height: 62px;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    color: var(--grey-color);
    text-align: left;
    text-transform: lowercase;
    cursor: pointer;
    border-width: 0;
    background-color: var(--ghost-white-color);
    @media (max-width: 1040px) {
        color: #1f1f1f;
        font-weight: 500;
        width: 100%;
        justify-content: space-between;
    }

    &.activeFeature {
        color: #1f1f1f;
        font-weight: 500;
    }

    &.activeVideo {
        color: red;
    }
    @media (max-width: 767px) {
        padding: 18px 0;
        font-size: 22px;
        line-height: 24px;
        text-align: left;
    }
`
export const FeatureTextWrapper = styled.div`
    @media (max-width: 580px) {
        max-width: 300px;
    }
    @media (max-width: 400px) {
        max-width: 200px;
    }
`
export const FeaturesSlidesSlidesBox = styled.div`
    width: 49%;
    max-width: 640px;
    padding-top: 10px;
    margin-right: 0;
    margin-left: auto;
    @media (max-width: 1040px) {
        max-width: 1000px;
        height: 800px;
        overflow: visible;
        width: 100%;
    }
`

export const FeatureDescription = styled.div`
    margin-top: 24px;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    color: var(--grey-color);
    letter-spacing: 0.04px;
`
export const StyledFooter = styled.div`
    background-color: #000;
    padding-top: 60px;
    padding-bottom: 80px;
    display: flex;
    justify-content: center;
`

export const StyledFooterContent = styled.div`
    display: grid;
    margin-left: calc(20% - 180px);
    margin-right: auto;
    gap: 16px;
    @media (max-width: 1000px) {
        margin-left: 10px;
    }
`

export const StyledFooterContentGrid = styled.div`
    display: grid;
    gap: 16px;
    margin: 0px 16px;
`

export const StyledLogo = styled.img`
    width: 180px;
    height: auto;
`

export const StyledMailInfo = styled.div`
    display: flex;
    color: var(--toastify-color-light);
    align-items: center;
`

export const StyledCompanyInfo = styled.div`
    color: var(--toastify-color-light);
    margin: 60px 16px 0px;
    line-height: 30px;
    @media (max-width: 767px) {
        max-width: 300px;
    }
`
export const StatisticsContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1360px;
    padding: 0px;
    margin: 0 auto;
    margin-bottom: 150px;
    justify-content: space-around;
    gap: 0;
    @media (max-width: 700px) {
        flex-direction: column;
        gap: 40px;
    }
    @media (max-width: 767px) {
        margin-bottom: 100px;
    }
`

export const Text = styled.p`
    max-width: 650px;
    text-align: center;
`

export const StatsText = styled(Text)`
    font-weight: 500;
    margin-bottom: 4px;
    font-size: 96px;
    line-height: 107px;
    @media (max-width: 1200px) {
        font-size: 80px;
    }
    @media (max-width: 850px) {
        font-size: 64px;
    }
    @media (max-width: 700px) {
        font-size: 80px;
    }
`

export const StatsDesc = styled(Text)`
    font-weight: 430;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.02em;

    span {
        position: relative;
        z-index: 0;
        display: inline-block;
        padding: 0 15px;
        margin: 0;
        vertical-align: initial;
        background-color: var(--lightblue-color);
        color: var(--toastify-color-dark);
        border-radius: 24px;
        @media (max-width: 1200px) {
            font-size: 28px;
        }
        @media (max-width: 700px) {
            font-size: 40px;
        }
        @media (max-width: 500px) {
            font-size: 32px;
        }
    }
    @media (max-width: 1200px) {
        font-size: 28px;
    }
    @media (max-width: 700px) {
        font-size: 40px;
    }
    @media (max-width: 500px) {
        font-size: 32px;
    }
`
export const IntroContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    max-width: 1360px;
    padding: 0px;
    margin: 0 auto;
    margin-bottom: 150px;
    @media (max-width: 1040px) {
        padding: 0px;
    }
    @media (max-width: 767px) {
        margin-bottom: 100px;
    }
`

export const LandingIntroWrapper = styled.div`
    position: relative;
    padding: 64px 64px 56px;
    color: var(--black-color);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    @media (max-width: 1380px) {
        margin: 0px 20px;
        padding: 64px 64px 56px;
    }
    @media (max-width: 1040px) {
        padding: 0px 20px;
        margin: 0px;
    }
`

export const LandingIntroImgBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--ghost-white-color);
    border-radius: 24px;
    vertical-align: bottom !important;
    padding: 0;
    margin: 0;
    @media (max-width: 1040px) {
        position: relative;
        margin-bottom: 30px;
        border-radius: 16px;
        padding: 200px 0px;
    }
`

export const IntroImg = styled.img`
    position: absolute;
    right: 0;
    width: 480px;
    bottom: 0;
    @media (max-width: 1040px) {
        position: absolute;
        top: 10px;
        object-position: center;
    }
`

export const LandingIntroTitle = styled.h1`
    position: relative;
    width: 100%;
    max-width: 740px;
    margin-bottom: 22px;
    font-size: 72px;
    font-weight: 500;
    line-height: 72px;
    @media (max-width: 700px) {
        font-size: 60px;
    }
    @media (max-width: 500px) {
        font-size: 48px;
        line-height: 48px;
    }
`

export const LandingIntroDescription = styled.p`
    width: 100%;
    max-width: 526px;
    margin-bottom: 52px;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.02em;
    @media (max-width: 700px) {
        font-size: 24px;
    }
`
export const AdvantagesContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    margin-bottom: 150px;
    @media (max-width: 767px) {
        margin-bottom: 100px;
    }
`

export const AdvantagesWrapper = styled.div`
    position: relative;
    padding: 55px 40% 64px 64px;
    margin-top: 200px;
    background-color: var(--ghost-white-color);
    border-radius: 24px;
    display: flex;
    width: 100%;
`

export const AdvantagesContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const AdvantagesTitle = styled.h2`
    margin-bottom: 16px;
    font-size: 48px;
    font-weight: 400;
    line-height: 54px;
    span {
        padding-left: 15px;
        padding-right: 15px;
        display: inline-flex;
        background-color: var(--lightblue-color);
        border-radius: 64px;
    }
`
export const AdvantagesText = styled.p`
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0.02em;
    opacity: 0.8;
`

export const AdvantagesImgBox = styled.div`
    position: absolute;
    right: 60px;
    bottom: 0;
    display: flex;
    width: 35%;
    img {
        width: 100%;
        height: auto;
    }
`
export const PriceListCardList = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    height: 100%;
    gap: 8px;
    flex-wrap: wrap;
`

export const PriceListCardItem = styled.div`
    display: flex;
    padding: 4px 12px 4px 8px;
    align-items: center;
    border: 2px solid rgb(0, 0, 0, 15%);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
`
export const PriceListCardBtnBox = styled.div`
    margin-top: 32px;
    width: 100%;
    display: flex;
    justify-content: end;
`
export const PriceListContainer = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    margin-bottom: 150px;
    padding: 0 20px;
    @media (max-width: 767px) {
        margin-bottom: 100px;
    }
`
export const PricelistTitle = styled.div`
    max-width: 550px;
    font-size: 48px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: 0.02em;
    margin-bottom: 30px;
`
export const PriceListList = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
    @media (max-width: 1380px) {
        flex-direction: row;
        gap: 30px;
    }
    @media (max-width: 1020px) {
        flex-direction: column;
        width: 100%;
        gap: 50px;
    }
`
export const PriceListCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(50% - 20px);
    padding: 70px 36px 40px 45px;
    color: var(--toastify-color-dark);
    border-style: solid;
    border-width: 3px;
    border-radius: 20px;
    background-color: var(--toastify-color-light);
    border-color: var(--toastify-color-dark);

    @media (max-width: 1020px) {
        padding: 60px 22px 20px 20px;
        border-radius: 16px;
        width: calc(100% - 40px);
    }
`
export const PriceListCardLabel = styled.span`
    top: -14px;
    right: -8px;
    padding: 4px 15px 5px;
    font-size: 20px;
    background-color: var(--accent-color);
    transform: rotate(4deg);
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--black-color);
    letter-spacing: 0.02em;
`
export const PriceListCardPrice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const PriceListCardTitle = styled.p`
    margin-top: 8px;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 34px;
`
export const PriceListCardDescription = styled.ul`
    font-weight: 500;
    font-size: 20px;
    opacity: 0.7;
    margin-bottom: 8px;
`
export const PriceListCardStartDate = styled.span`
    top: 10px;
    right: -17px;
    background-color: var(--toastify-color-warning);
    position: absolute;
    font-weight: 500;
    color: var(--toastify-color-dark);
    letter-spacing: 0.02em;
    z-index: 1;
    padding: 4px 12px 6px;
    font-size: 16px;
    line-height: 20px;
    transform: rotate(6deg);
`
