import React from 'react'
import styled from '@emotion/styled'
import {useNavigate} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import {FooterText} from "../../utils/constants";
import {useIntl} from 'react-intl'

const Footer = () => {

    return (
        <>
            <Container>
                <FlexBox>
                    <Typography
                        variant="h5"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 300,
                            fontSize: '24px',
                            color: '#404044',
                        }}
                    >
                        With a commitment to quality content for the design community.
                        Founded by IT1CCO-2113 and IIT UNI. 2023-2024.
                        Smashing is proudly running on Netlify, TinaCMS and Swell.
                        Fonts by Latinotype.
                    </Typography>
                    <GridBox>

                        {FooterText.map((b, index) => {
                            return (
                                  <StyledLi key={index}>{b.title}</StyledLi>
                            )
                        })}

                    </GridBox>
                </FlexBox>

            </Container>
        <StyledBox>
            <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{
                    fontWeight: 300,
                    fontSize: '24px',
                    color: '#fff',
                    textAlign: 'center'
                }}
            >
            CREATED BY GROUP IT1CCO-2113
            </Typography>
        </StyledBox>
        </>

    )
}

export default Footer



const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;
  background: #D9D9D9;
`

interface FlexBoxProps {
    gap?: string;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: ${(props) => props.gap || '50px'};
`
const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: end;
`

const StyledLi = styled.li`
  font-weight: 300;
  font-size: 24px;
  color: #404044;
`

const StyledBox = styled.div`
  background: #23854A;
  padding: 10px 0;
`