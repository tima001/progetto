import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import {useIntl} from "react-intl";
import {Box} from "@mui/system";
import contactUs from '../../../../assets/img/landing/contactUs.png'
import {Button} from "@mui/material";

const ContactUs = () => {
    return (
        <IntroWrapper id="aboutWineInvesting">
            <FlexBox>
                <Box sx={{ml:'20px'}}>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 400,
                            fontSize: '50px',
                            color: '#FFFFFF',
                            mb: 6
                        }}
                    >
                        <StyledSpan>
                            Присоединяйтесь {" "}
                        </StyledSpan>
                        к нам и станьте частью нашей дизайн-семьи
                    </Typography>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 200,
                            fontSize: '32px',
                            color: '#FFFFFF',
                        }}
                    >
                        Присоединяйтесь к нам и создайте вместе с нами дизайн-комьюнити в Казахстане, где творчество
                        здорово и где возможности безграничны. Давайте вдохновлять друг друга и строить будущее дизайна
                        вместе.
                    </Typography>
                </Box>
                <StyledBox>
                    <StyledImg src={contactUs}/>
                </StyledBox>
            </FlexBox>
<StyledButton>ПРИСОЕДИНИТЬСЯ К НАМ </StyledButton>
        </IntroWrapper>
    )
}

export default ContactUs

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
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
  border: 3px solid #F5F1E8;
  border-radius: 26px;
  padding: 20px 0;
`


const StyledImg = styled.img`
  height: 380px;
`

const StyledSpan = styled.span`
  color: #23854A;
`
const StyledBox = styled.div`
  background: #D9D9D9;
  padding: 30px 160px;
  border-radius: 22px;
  margin-right: 20px;
`

const StyledButton = styled(Button)`
  width: 100%;
  font-weight: 400;
  font-size: 24px;
  color: #23854A;
  border: 3px solid #F5F1E8;
  border-radius: 22px;
  padding: 24px;
  margin-top: 64px;
`