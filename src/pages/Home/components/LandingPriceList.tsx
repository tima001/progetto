import React from 'react'
import '../style'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import {
    PlayCircle,
    NotePencil,
    ChartLineUp,
    HourglassLow,
    PresentationChart,
    ChartBar,
} from '@phosphor-icons/react'
import {
    FlexBox,
    PriceListCard,
    PriceListCardBtnBox,
    PriceListCardDescription,
    PriceListCardItem,
    PriceListCardLabel,
    PriceListCardList,
    PriceListCardPrice,
    PriceListCardStartDate,
    PriceListCardTitle,
    PriceListContainer,
    PriceListList,
    PricelistTitle,
} from '../style'
const PriceListComponent = () => {
    return (
        <>
            <PriceListCardList>
                <PriceListCardItem>
                    <ChartLineUp
                        style={{ marginRight: '6px' }}
                        size={24}
                        color="black"
                        weight="regular"
                    />
                    <p style={{ width: 'max-content' }}>қатемен жұмыс</p>
                </PriceListCardItem>
                <PriceListCardItem>
                    <PlayCircle
                        style={{ marginRight: '6px' }}
                        size={24}
                        color="black"
                        weight="regular"
                    />
                    <p style={{ width: 'max-content' }}>видео сабақтар</p>
                </PriceListCardItem>
                <PriceListCardItem>
                    <NotePencil
                        style={{ marginRight: '6px' }}
                        size={24}
                        color="black"
                        weight="regular"
                    />
                    <p style={{ width: 'max-content' }}>тақырыптық тесттер</p>
                </PriceListCardItem>

                <PriceListCardItem>
                    <HourglassLow
                        style={{ marginRight: '6px' }}
                        size={24}
                        color="black"
                        weight="regular"
                    />
                    <p style={{ width: 'max-content' }}>12 ай</p>
                </PriceListCardItem>
                <PriceListCardItem>
                    <PresentationChart
                        style={{ marginRight: '6px' }}
                        size={24}
                        color="black"
                        weight="regular"
                    />
                    <p style={{ width: 'max-content' }}>
                        сұрақтардың видео шешімі
                    </p>
                </PriceListCardItem>
                <PriceListCardItem>
                    <ChartBar
                        style={{ marginRight: '6px' }}
                        size={24}
                        color="black"
                        weight="regular"
                    />
                    <p style={{ width: 'max-content' }}>прогресс анализі</p>
                </PriceListCardItem>
            </PriceListCardList>
        </>
    )
}
const LandingPriceList = () => (
    <PriceListContainer>
        <PricelistTitle>біздің курстарымыз</PricelistTitle>
        <PriceListList>
            <PriceListCard>
                <PriceListCardLabel>Ең мықты курс</PriceListCardLabel>
                <PriceListCardPrice>
                    <PriceListCardTitle>ҰБТ курсы</PriceListCardTitle>
                    <PriceListCardTitle>54 000тг</PriceListCardTitle>
                </PriceListCardPrice>
                <PriceListCardDescription>
                    12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді
                    және оның тақырыптарынтаңдап ал да өзіңе ыңғайлы курс
                    құрастыр.
                </PriceListCardDescription>
                <PriceListComponent />
                <PriceListCardBtnBox>
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
                                Толығырақ
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
                                курсқа жазылу
                            </Button>
                        </Link>
                    </FlexBox>
                </PriceListCardBtnBox>
            </PriceListCard>
            <PriceListCard>
                <PriceListCardStartDate>
                    30 қыркүйекке дейін
                </PriceListCardStartDate>
                <PriceListCardLabel>50% жеңілдік</PriceListCardLabel>
                <PriceListCardPrice>
                    <PriceListCardTitle>БИЛ курсы</PriceListCardTitle>
                    <PriceListCardTitle>50 000тг</PriceListCardTitle>
                </PriceListCardPrice>
                <PriceListCardDescription>
                    12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді
                    және оның тақырыптарынтаңдап ал да өзіңе ыңғайлы курс
                    құрастыр.
                </PriceListCardDescription>
                <PriceListComponent />
                <PriceListCardBtnBox>
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
                                Толығырақ
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
                                курсқа жазылу
                            </Button>
                        </Link>
                    </FlexBox>
                </PriceListCardBtnBox>
            </PriceListCard>
        </PriceListList>
    </PriceListContainer>
)

export default LandingPriceList
