import React from 'react'
import { NavLink } from 'react-router-dom'
import { Body1 } from '../../../layouts/TextStyles'
import Document from '../../../assets/icons/Documents/Copy-Document-Filled.svg'
import styled from '@emotion/styled'

const MenuItem = ({ path, title }) => {
    return (
        <li>
            <NavLink to={path}>
                {({ isActive }) => (
                    <LinkContainer active={isActive}>
                        <img
                            alt="document-copyw"
                            src={Document}
                        />
                        <Body1>{title}</Body1>
                    </LinkContainer>
                )}
            </NavLink>
        </li>
    )
}

export { MenuItem }

const LinkContainer = styled.div<{ active: boolean }>`
    margin: 10px 0;
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    text-align: left;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: ${({ active }) => (active ? '#cde5f8' : 'default')};

    p {
        color: ${({ active }) => (active ? '#4F72EA' : 'default')};
    }

    @media screen and (max-width: 500px) {
        p {
            color: ${({ active }) => (active ? '#4F72EA' : '#e3e3e3')};
        }
    }
`
