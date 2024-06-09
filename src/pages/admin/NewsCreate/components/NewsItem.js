import React, {useEffect, useState} from "react";
import {newsApiSlice} from "../../../../features/news/newsSlice";
import axios from "axios";
import storage from "../../../../utils/storageService";
import {Box} from "@mui/system";
import {Button, capitalize, Typography} from "@mui/material";
import {Pen, Trash} from "@phosphor-icons/react";
import styled from "@emotion/styled";

const NewsItem = ({news, locale, refetch}) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [deleteNews] = newsApiSlice.useDeleteNewsMutation(); // Use the mutation hook


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

        if (news && news.image) {
            getImage();
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
        <StyledBox src={imgUrl} height={700}>
            <NewsContentWrapper className="contentWrapper">
                <FlexBox align="center" justify="space-between" padding="16px 24px">

                    <Box sx={{padding: '20px'}}>
                        <Typography
                            variant="caption"
                            component="div"
                            color="text.secondary"
                            sx={{
                                fontWeight: 500,
                                fontSize: '28px',
                                color: '#FFF',
                            }}
                        >
                            {news[`title${capitalize(locale)}`]}
                        </Typography>
                        <Typography
                            variant="caption"
                            component="div"
                            color="text.secondary"
                            sx={{
                                fontWeight: 300,
                                fontSize: '20px',
                                color: '#FFF',
                            }}
                        >
                            {news[`content${capitalize(locale)}`]}
                        </Typography>
                    </Box>
                    <FlexBox gap="16px">
                        <StyledButton variant="contained">
                            <Pen size={32} color={"white"}/>
                        </StyledButton>
                        <StyledButton variant="contained" onClick={handleDelete}>
                            <Trash size={32} color={"white"} />
                        </StyledButton>
                    </FlexBox>
                </FlexBox>


            </NewsContentWrapper>
        </StyledBox>
    );
};

export default NewsItem

const StyledBox = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  height: ${(props) => `${props.height}px`};
  background-size: cover;
  border-radius: 32px;
  align-items: end;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-bottom: 36px;
  border: 2px solid #FFF;
`;

const NewsContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.83);
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  opacity: 1;
  visibility: visible;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '8px'};
  align-items: ${(props) => props.align || 'left'};
  justify-content: ${(props) => props.justify || 'left'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
`;

const StyledButton = styled(Button)`
padding: 20px;
  
`

