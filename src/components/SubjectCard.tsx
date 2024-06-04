import React from 'react'
import _ from 'lodash'
import styled from '@emotion/styled'
import Link from '@mui/material/Link'
import { Box } from '@mui/system'
import { BoldText, Caption } from '../layouts/TextStyles'
import { lang } from '../features/user/userSlice'
import { useAppSelector } from '../app/hooks'
import { UserSubjectState } from '../features/types'

interface Props {
    subject: UserSubjectState
    onNavigate: (subject: UserSubjectState) => void
}

const styles = {
    wrapper: {
        width: '230px',
        height: '240px',
        overflow: 'hidden',
        background: '#ffffff',
        cursor: 'pointer',
        border: '2px solid #eeeeee',
        borderRadius: '20px',
        marginRight: '40px',
        marginBottom: '20px',

        '@media screen and (max-width: 500px)': {
            width: '100%',
        },
    },
    logo: {
        height: '150px',
        width: '100%',
        position: 'relative',
    },
    percentage: {
        background: '#627480',
        height: 44,
        width: 44,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        height: '100px',
        display: 'flex',
        alignItems: 'end',
    },
    link: {
        color: '#1976d2',
    },
}

const SubjectCard: React.FC<Props> = ({ subject, onNavigate }) => {
    const language = useAppSelector(lang)

    return (
        <Box
            sx={styles.wrapper}
            onClick={() => {
                onNavigate(subject)
            }}
        >
            <Box sx={styles.logo}>
                <img
                    alt="course-logo"
                    src={subject.logo}
                    style={{
                        height: '150px',
                        width: '100%',
                        position: 'relative',
                        objectFit: 'contain',
                        borderBottom: '2px solid #eeeeee',
                    }}
                />

                <Percentage>
                    <Box sx={styles.percentage}>
                        {subject.averagePercentage != null
                            ? Math.round(subject.averagePercentage)
                            : 0}
                        %
                    </Box>
                </Percentage>
            </Box>

            <Box sx={styles.description}>
                <Box sx={{ m: 2, mb: 3 }}>
                    <BoldText>
                        {_.capitalize(
                            subject[`title${_.capitalize(language)}`],
                        )}
                    </BoldText>
                    <Box>
                        <Link
                            href={subject.lessonLink}
                            underline="none"
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <Caption style={styles.link}>
                                {subject.lessonComment}
                            </Caption>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SubjectCard

const Percentage = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid rgba(98, 116, 128, 0.6);
    bottom: -30px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
