import React from 'react'
import '../style'
import { StatisticsContainer, StatsDesc, StatsText } from '../style'

const LandingStatistics = () => {
    return (
        <StatisticsContainer>
            <div>
                <StatsText>19 792+</StatsText>
                <StatsDesc>құрастырылған</StatsDesc>
                <StatsDesc>
                    <span>сұрақ</span> саны
                </StatsDesc>
            </div>

            <div>
                <StatsText>44</StatsText>
                <StatsDesc>өтілетін</StatsDesc>
                <StatsDesc>
                    <span>пән</span> саны
                </StatsDesc>
            </div>

            <div>
                <StatsText>1200+</StatsText>
                <StatsDesc>құрастырылған</StatsDesc>
                <StatsDesc>
                    <span>видео сабақ</span> саны
                </StatsDesc>
            </div>
        </StatisticsContainer>
    )
}

export default LandingStatistics
