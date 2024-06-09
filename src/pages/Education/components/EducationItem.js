import React, {useEffect, useState} from "react";
import axios from "axios";
import storage from "../../../utils/storageService";
import {Button, capitalize, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {educationApiSlice} from "../../../features/education/educationSlice";

const NewsItem = ({news, locale}) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [iconUrl, setIconUrl] = useState(null);

    useEffect(() => {
        const getImage = async () => {
            try {
                const response = await axios.get(`http://192.168.0.11:4000/file/image/${news.image}`, {
                    headers: {
                        Authorization: `Bearer ${storage?.get('token')}` // Assuming token is stored in localStorage
                    },
                    responseType: 'blob' // Important to handle binary data
                });
                const imageUrl = URL.createObjectURL(response.data);
                setImgUrl(imageUrl);
            } catch (error) {
            }
        };
        const getIcon = async () => {
            try {
                const response = await axios.get(`http://192.168.0.11:4000/file/image/${news.icon}`, {
                    headers: {
                        Authorization: `Bearer ${storage?.get('token')}` // Assuming token is stored in localStorage
                    },
                    responseType: 'blob' // Important to handle binary data
                });
                const iconUrl = URL.createObjectURL(response.data);
                setIconUrl(iconUrl);
            } catch (error) {
            }
        };

        if (news && news.image && news.icon) {
            getImage();
            getIcon()
        }
    }, [news]);





    return (
        <StyledCard key={news.id} style={{position: 'relative'}}>
            <FlexBox direction="column" justify="space-between" padding="24px">
                <FlexBox gap="24px">
                    <img alt="logo" src={iconUrl} width={60} height={60}
                         style={{borderRadius: '50%', objectFit: 'cover', objectPosition: 'center'}}/>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 400,
                            fontSize: '32px',
                            color: '#000'
                        }}
                    >
                        {news[`title${capitalize(locale)}`]}
                    </Typography>

                </FlexBox>
                <Typography
                    variant="h1"
                    component="div"
                    color="text.secondary"
                    sx={{
                        fontWeight: 300,
                        fontSize: '32px',
                        color: 'rgba(0,0,0,0.78)'
                    }}
                    dangerouslySetInnerHTML={{__html: news[`content${capitalize(locale)}`]}}
                />
                <Typography
                    variant="h1"
                    component="div"
                    color="text.secondary"
                    sx={{
                        fontWeight: 400,
                        fontSize: '32px',
                        color: 'rgba(0,0,0,0.78)'
                    }}
                >
                    {news.link}
                </Typography>
            </FlexBox>
            <StyledImg src={imgUrl}/>
        </StyledCard>

    );
};

export default NewsItem

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  background: #fff;
  border-radius: 22px;
  border-bottom: 12px solid #23854A;
  overflow: hidden;
  margin-bottom: 24px;
`


const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '8px'};
  align-items: ${(props) => props.align || 'left'};
  justify-content: ${(props) => props.justify || 'left'};
  padding: ${(props) => props.padding || '0'};
`

const StyledImg = styled.img`
  max-width: 400px;
  height: 300px;
  width: 100%;
  object-fit: cover;
`

const StyledButton = styled(Button)`
padding: 20px;
  
`


