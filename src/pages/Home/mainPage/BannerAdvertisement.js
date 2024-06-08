import React from "react";
import {useIntl} from "react-intl";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const BannerAdvertisement = () => {
    const {formatMessage} = useIntl()

    return (
        <Wrapper>

            <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{
                    fontWeight: 400,
                    fontSize: '54px',
                    color: '#FFF',
                    textAlign: 'center',
                mb: 4
            }}
        >
            {formatMessage({id: "welcomeToProgetto"})}
        </Typography>
            <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{
                    fontWeight: 400,
                    fontSize: '32px',
                    color: '#93918D',
                    textAlign: 'center',
                }}
            >
                <StyledSpan>PROGETTO</StyledSpan> - {formatMessage({id: "progettoMainInfo"})}
            </Typography>
        </Wrapper>


    )
}

export default BannerAdvertisement

const Wrapper = styled.div`
  padding: 60px 120px;
`
const StyledSpan = styled.span`
color: #23854A;
`