import React, { useState } from 'react'
import './Reviews.css'
import { StudentContent } from '../../../../utils/constants'
import { ParentContent } from '../../../../utils/constants'
import styled from '@emotion/styled'

function Reviews() {
    const [activeTab, setActiveTab] = useState('student')
    const content = activeTab === 'student' ? StudentContent : ParentContent

    return (
        <ReviewContainer>
            <ReviewTabs>
                <ReviewControls>
                    <ReviewsControlBtn
                        className={
                            activeTab === 'student'
                                ? 'reviews-control-active'
                                : ''
                        }
                        onClick={() => setActiveTab('student')}
                    >
                        оқушы пікірлері
                    </ReviewsControlBtn>
                    <ReviewsControlBtn
                        className={
                            activeTab === 'parent'
                                ? 'reviews-control-active'
                                : ''
                        }
                        onClick={() => setActiveTab('parent')}
                    >
                        ата-ана пікірлері
                    </ReviewsControlBtn>
                </ReviewControls>{' '}
                <ReviewContentWrapper>
                    <ReviewContent>
                        <ReviewContentItem key={content[0].id}>
                            <a className="reviews-card-text-border">
                                <div className="reviews-card-text-userBlock">
                                    <div className="reviews-card-text-userAvatar">
                                        <img
                                            style={{ width: '100%' }}
                                            src={content[0].img}
                                        />
                                    </div>
                                    <div className="reviews-card-text-info">
                                        <span className="reviews-card-text-infoItem-white">
                                            {content[0].name}
                                        </span>
                                        {activeTab === 'student' && (
                                            <span className="reviews-card-text-infoItem-black">
                                                {content[0].ball}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="reviews-card-text-content">
                                    <p>{content[0].text}</p>
                                </div>
                            </a>
                        </ReviewContentItem>
                        {content.slice(1).map((item) => (
                            <div
                                key={item.id + 1}
                                className={`review-content-item-${item.id}`}
                            >
                                <a className="reviews-card-text">
                                    <div className="reviews-card-text-userBlock">
                                        <div className="reviews-card-text-userAvatar">
                                            <img
                                                style={{
                                                    width: '100%',
                                                }}
                                                src={item.img}
                                            />
                                        </div>
                                        <div className="reviews-card-text-info">
                                            <span className="reviews-card-text-infoItem-white">
                                                {item.name}
                                            </span>
                                            {activeTab === 'student' && (
                                                <span className="reviews-card-text-infoItem-black">
                                                    {item.ball}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="reviews-card-text4-content">
                                        <p>{item.text}</p>
                                    </div>
                                    <span className="reviews-card-text-btn">
                                        толығырақ оқу
                                    </span>
                                </a>
                            </div>
                        ))}
                    </ReviewContent>
                </ReviewContentWrapper>
            </ReviewTabs>
        </ReviewContainer>
    )
}

export default Reviews

const ReviewContainer = styled.div`
    max-width: 1360px;
    padding: 0 24px;
    margin: 0 auto;
    margin-bottom: 150px;
`

const ReviewTabs = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
const ReviewControls = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 1023px) {
        margin-bottom: 32px;
    }
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`
const ReviewContent = styled.div`
    display: grid;
    grid-template-rows: 324px 116px 324px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    @media (max-width: 1023px) {
        grid-template-rows: repeat(2, 222px);
        gap: 12px;
    }
    @media (max-width: 700px) {
        min-width: 690px;
        width: 100%;
        gap: 20px;
    }
`
const ReviewsControlBtn = styled.button`
    font-family: 'Gilroy';
    font-size: 48px;
    font-weight: 400;
    line-height: 54px;
    color: var(--grey-color);
    letter-spacing: 0.02em;
    transition: color 0.3s ease;
    background-color: transparent;
    border-width: 0;
    cursor: pointer;
    margin-right: 45px;

    &:focus {
        outline: none;
    }

    &.reviews-control-active {
        color: var(--toastify-color-dark);
        pointer-events: none;
    }
    @media (max-width: 1023px) {
        font-size: 34px;
        font-weight: 500;
        line-height: 36px;
    }
    @media (max-width: 440px) {
        font-size: 28px;
        font-weight: 500;
        line-height: 36px;
    }
`
const ReviewContentItem = styled.div`
    grid-row: 1/2;
    grid-column: 1/3;
`

const ReviewsCardTextBorder = styled.a`
    --avatar-width: 56px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 24px;
    border-radius: 20px;
    transition: background-color 0.3s ease;
    background-color: var(--ghost-white-color);
    box-sizing: border-box;
    padding: 20px 24px;
    border: 3px solid var(--toastify-color-dark);
    background-color: transparent;
`

const ReviewsCardTextUserBlock = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 16px;
`

const ReviewsCardTextUserAvatar = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: var(--avatar-width);
    height: var(--avatar-width);
    overflow: hidden;
    border-radius: 50%;
`

const ReviewsCardTextInfo = styled.div`
    position: absolute;
    top: -2px;
    left: calc(var(--avatar-width) + 14px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - var(--avatar-width));
`

const ReviewsCardTextInfoItemWhite = styled.span`
    position: relative;
    max-width: 100%;
    padding: 4px 15px;
    overflow: hidden;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-overflow: ellipsis;
    letter-spacing: 0.02em;
    white-space: nowrap;
    border-style: solid;
    border-width: 2px;
    border-radius: 68px;
    z-index: 1;
    margin-bottom: -2px;
    color: var(--toastify-color-dark);
    background-color: var(--toastify-color-light);
    border-color: var(--toastify-color-dark);
    transform: rotate(3deg);
`

const ReviewsCardTextInfoItemBlack = styled.span`
    position: relative;
    max-width: 100%;
    padding: 4px 15px;
    overflow: hidden;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-overflow: ellipsis;
    letter-spacing: 0.02em;
    white-space: nowrap;
    border-style: solid;
    border-width: 2px;
    border-radius: 68px;
    color: var(--toastify-color-light);
    background-color: var(--toastify-color-dark);
    border-color: var(--toastify-color-light);
    transform: rotate(-2deg);
`

const ReviewsCardTextContent = styled.div`
    font-size: 32px;
    line-height: 40px;
    max-height: 194px;
    overflow: hidden;
    color: var(--toastify-color-dark);
`
const ReviewContentWrapper = styled.div`
    overflow-x: hidden;
    @media (max-width: 700px) {
        width: 100%;
        overflow-x: auto;
    }
`
