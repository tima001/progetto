import React, {useEffect, useState} from "react";
import axios from "axios";
import storage from "../../../../utils/storageService";
import {Button, capitalize, Typography} from "@mui/material";
import { Trash} from "@phosphor-icons/react";
import styled from "@emotion/styled";
import {educationApiSlice} from "../../../../features/education/educationSlice";

const NewsItem = ({news, locale, refetch}) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [iconUrl, setIconUrl] = useState(null);
    const [deleteNews] = educationApiSlice.useDeleteNewsMutation(); // Use the mutation hook


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


    const handleDelete = async () => {
        try {
            await deleteNews({ id: news.id }).unwrap();
            refetch()
        } catch (error) {
            console.error('Failed to delete the news item:', error); // Add error handling
        }
    };


    return (
        <StyledCard
            key={news.id} style={{position: 'relative'}}
        >
            <FlexBox style={{cursor: 'pointer'}} gap="24px"
                     onClick={() => window.open(news.link, '_blank')}
                     direction="column" justify="space-between" padding="24px">
                <FlexBox>
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
            <FlexBox gap="16px" style={{position: 'absolute', top:0, right: 0}}>

                <StyledButton variant="contained" onClick={handleDelete}>
                    <Trash size={32} color={"white"} />
                </StyledButton>
            </FlexBox>
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


