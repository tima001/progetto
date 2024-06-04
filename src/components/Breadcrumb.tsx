import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { ArrowBack } from '@mui/icons-material'
import { H5 } from '../layouts/TextStyles'

interface Props {
    links: Array<string | number>
}

const style = {
    arrow: {
        cursor: 'pointer',
        marginRight: 8,
    },
}

const Breadcrumb: React.FC<Props> = ({ links = [] }) => {
    const navigate = useNavigate()

    const renderLinks = () => {
        return links.map((item, index) =>
            item ? item + (index != links.length - 1 ? '/' : '') : '',
        )
    }
    return (
        <Title>
            <ArrowBack
                style={style.arrow}
                onClick={() => navigate(-1)}
            />

            <H5> {renderLinks()} </H5>
        </Title>
    )
}

export default Breadcrumb

const Title = styled.div`
    margin-bottom: 20px;
    text-align: left;
    display: flex;
    align-items: center;
`
