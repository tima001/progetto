import _ from 'lodash'
import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { H5 } from '../layouts/TextStyles'
import { lang } from '../features/user/userSlice'
import { useAppSelector } from '../app/hooks'
import { UserCourseState } from '../features/types'

interface Props {
    course: UserCourseState
    onNavigate: (course: UserCourseState) => void
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
}

const CourseCard: React.FC<Props> = ({ course, onNavigate }) => {
    const language = useAppSelector(lang)

    return (
        <Box
            sx={styles.wrapper}
            onClick={() => onNavigate(course)}
        >
            <Box sx={styles.logo}>
                <img
                    alt="course-logo"
                    src={course[`image${_.capitalize(language)}`]}
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
                        {course.averagePercentage != null
                            ? Math.round(course.averagePercentage)
                            : 0}
                        %
                    </Box>
                </Percentage>
            </Box>

            <Box sx={styles.description}>
                <Box sx={{ m: 2, mb: 3 }}>
                    <H5>{course[`title${_.capitalize(language)}`]}</H5>
                </Box>
            </Box>
        </Box>
    )
}

export default CourseCard

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
