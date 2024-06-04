import React, { useState } from 'react'
import { TeacherInfo } from '../../../utils/constants'
import {
    TeacherCardImage,
    TeacherCardName,
    TeacherCardTop,
    TeacherCardUniversity,
    TeachersButton,
    TeachersButtonAll,
    TeachersContainer,
    TeachersWrapper,
    LandingSectionContainer,
} from '../style'
function LandingTeachers() {
    const [contentInfo, setContentInfo] = useState(TeacherInfo[0])

    return (
        <LandingSectionContainer>
            <TeachersContainer>
                <TeachersWrapper>
                    <TeacherCardTop>
                        <TeacherCardName>{contentInfo.name}</TeacherCardName>
                        <TeacherCardUniversity>
                            {contentInfo.university}
                        </TeacherCardUniversity>
                    </TeacherCardTop>

                    <TeacherCardImage>
                        <img
                            src={contentInfo.img}
                            style={{
                                width: '100%',
                            }}
                        />
                    </TeacherCardImage>
                    <TeachersButtonAll>
                        {TeacherInfo.map((item, index) => (
                            <TeachersButton
                                key={index}
                                type="button"
                                className={
                                    contentInfo.id === item.id ? 'active' : ''
                                }
                                onClick={() => setContentInfo(item)}
                            >
                                {item.buttonText}
                            </TeachersButton>
                        ))}
                    </TeachersButtonAll>
                </TeachersWrapper>
            </TeachersContainer>
        </LandingSectionContainer>
    )
}

export default LandingTeachers
