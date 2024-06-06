import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import {useIntl} from "react-intl";
import {Box} from "@mui/system";
import mobileGroup from '../../../../assets/img/landing/mobileGroup.png'

const WhyUs = () => {
    const {formatMessage} = useIntl()
    return (
        <IntroWrapper id="aboutWineInvesting">
            <FlexBox>
                <Box >
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: '48px',
                            color: '#000',
                            mb:6
                        }}
                    >
                        {formatMessage({id: "advertisementTitle"})}
                     <StyledSpan>
                            Progetto
                        </StyledSpan>
                    </Typography>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 200,
                            fontSize: '34px',
                            color: '#313131',
                            maxWidth: '550px'
                        }}
                    >
                        {formatMessage({id: "advertisemenetContent"})}
                    </Typography>
                </Box>

                <StyledImg src={mobileGroup}/>
            </FlexBox>

        </IntroWrapper>
    )
}

export default WhyUs

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  background: #D9D9D9;
  padding: 60px 60px;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 100vh;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`


const StyledImg = styled.img`
  height: 440px;
`

const StyledSpan = styled.span`
    color: #23854A;
`

