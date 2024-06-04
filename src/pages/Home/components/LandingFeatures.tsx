import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FeaturesDescription } from '../../../utils/constants'
import VideoPlayer from '../../../components/videoPlayer/VideoPlayer'
import { PlayCircle, CaretDown, CaretUp } from '@phosphor-icons/react'
import Collapse from '@mui/material/Collapse'
import '../style'
import {
    FeatureContainer,
    FeatureDescription,
    FeaturesBottom,
    FeaturesDescriptionText,
    FeaturesNavigationSlideBtn,
    FeaturesSlidesSlidesBox,
    FeaturesTitle,
    FeaturesTitleBottomLine,
    FeaturesTitleTopLine,
    FeaturesTop,
    LandingFeaturesSection,
    FeatureBottomMobile,
    FeatureTextWrapper,
} from '../style'

const LandingFeatures = () => {
    const [contentInformation, setContentInformation] = useState(
        FeaturesDescription[0],
    )
    const [allCollapseClosed, setAllCollapseClosed] = useState(true)

    const collapseVideo = (item) => {
        if (contentInformation.id == item.id && !allCollapseClosed)
            setAllCollapseClosed(true)
        else setAllCollapseClosed(false)

        setContentInformation(item)
    }
    return (
        <LandingFeaturesSection>
            <FeatureContainer>
                <FeaturesTop>
                    <FeaturesTitle>
                        <FeaturesTitleTopLine>
                            оқу процессі
                        </FeaturesTitleTopLine>
                        <FeaturesTitleBottomLine>
                            қалай өтеді
                        </FeaturesTitleBottomLine>
                    </FeaturesTitle>
                    <FeaturesDescriptionText>
                        біз сіздерге <span>17 жылдан </span> бері керемет
                        нәтижелерді көрсететін онлайн оқыту әдістемесін
                        әзірледік
                    </FeaturesDescriptionText>
                </FeaturesTop>
                <FeaturesBottom>
                    <div>
                        {FeaturesDescription.map((item, index) => (
                            <FeaturesNavigationSlideBtn
                                key={index}
                                onClick={() => setContentInformation(item)}
                                className={`${
                                    contentInformation.id === item.id &&
                                    'activeFeature'
                                }`}
                            >
                                {contentInformation.id === item.id && (
                                    <PlayIcon
                                        size={36}
                                        color="black"
                                        weight="regular"
                                    />
                                )}
                                {item.title}
                            </FeaturesNavigationSlideBtn>
                        ))}
                    </div>
                    <FeaturesSlidesSlidesBox>
                        <div>
                            <VideoPlayer link={contentInformation.videolink} />
                        </div>
                        <FeatureDescription>
                            {contentInformation.desription}
                        </FeatureDescription>
                    </FeaturesSlidesSlidesBox>
                </FeaturesBottom>
                <FeatureBottomMobile>
                    <div>
                        {FeaturesDescription.map((item, index) => (
                            <div key={index}>
                                <FeaturesNavigationSlideBtn
                                    key={index}
                                    onClick={() => collapseVideo(item)}
                                >
                                    <FeatureTextWrapper>
                                        {item.title}
                                    </FeatureTextWrapper>
                                    {contentInformation.id == item.id &&
                                    !allCollapseClosed ? (
                                        <ArrowUp size={32} />
                                    ) : (
                                        <Arrow size={32} />
                                    )}
                                </FeaturesNavigationSlideBtn>
                                <Collapse
                                    key={index}
                                    in={
                                        contentInformation.id == item.id &&
                                        !allCollapseClosed
                                    }
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <FeaturesSlidesSlidesBox>
                                        <div>
                                            <VideoPlayer
                                                link={
                                                    contentInformation.videolink
                                                }
                                            />
                                        </div>
                                        <FeatureDescription>
                                            {contentInformation.desription}
                                        </FeatureDescription>
                                    </FeaturesSlidesSlidesBox>
                                </Collapse>
                            </div>
                        ))}
                    </div>
                </FeatureBottomMobile>
            </FeatureContainer>
        </LandingFeaturesSection>
    )
}

export default LandingFeatures

export const PlayIcon = styled(PlayCircle)`
    vertical-align: middle;
    margin-right: 8px;
    @media (max-width: 1023px) {
        display: none;
    }
`
export const Arrow = styled(CaretDown)`
    display: none;
    @media (max-width: 1023px) {
        display: block;
    }
`
export const ArrowUp = styled(CaretUp)`
    display: none;
    @media (max-width: 1023px) {
        display: block;
    }
`
