import React, {useState, useEffect} from 'react';
import {Box, Button, capitalize, Typography} from "@mui/material";
import {Trash} from "@phosphor-icons/react";
import styled from "@emotion/styled";
import axios from "axios";
import storage from "../../../../utils/storageService";
import {recourcesApiSlice} from "../../../../features/recources/recourcesSlice";
import DownloadResourceDialog from "./DownloadResourceDialog";
import {useIntl} from "react-intl";

const NewsItem = ({news, refetch}) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [deleteNews] = recourcesApiSlice.useDeleteNewsMutation();
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const {locale} = useIntl()
    useEffect(() => {
        const getImage = async () => {
            try {
                const response = await axios.get(`http://192.168.0.11:4000/file/image/${news.image}`, {
                    headers: {
                        Authorization: `Bearer ${storage?.get('token')}`
                    },
                    responseType: 'blob'
                });
                const imageUrl = URL.createObjectURL(response.data);
                setImgUrl(imageUrl);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        if (news && news.image) {
            getImage();
        }
    }, [news]);

    const handleDelete = async () => {
        try {
            await deleteNews({id: news.id}).unwrap();
            refetch();
        } catch (error) {
            console.error('Failed to delete the news item:', error);
        }
    };

    const handleOpenDialog = (studentId) => {
        setOpenDialog(true);
        setSelectedStudentId(studentId);
    };

    return (
        <>
            <StyledBox src={imgUrl} height={500} onClick={() => handleOpenDialog(news.id)}>
                <NewsContentWrapper>
                    <FlexBox align="center" justify="space-between">
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
                        </Box>
                        <StyledButton variant="contained" onClick={handleDelete}>
                            <Trash size={32} color={"white"}/>
                        </StyledButton>
                    </FlexBox>
                </NewsContentWrapper>

            </StyledBox>

            <DownloadResourceDialog
                news={news}
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
            />
        </>
    );
};

export default NewsItem;

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
  background-position: center;
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
  margin-right: 16px;
`;
