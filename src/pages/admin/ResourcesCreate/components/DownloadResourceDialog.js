import React, { useEffect, useState } from 'react';
import {Button, Dialog, DialogContent, IconButton} from '@mui/material';
import { ArrowDown, Heart, XCircle } from "@phosphor-icons/react";
import axios from "axios";
import storage from "../../../../utils/storageService";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const DownloadResourceDialog = ({ open, handleClose, news }) => {
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        const getImage = async () => {
            try {
                const response = await axios.get(`http://192.168.0.11:4000/file/image/${news?.image}`, {
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

        if (news && news?.image) {
            getImage();
        }
    }, [news]);

    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://192.168.0.11:4000/file/download/${news?.file}?filename=Men`, {
                headers: {
                    Authorization: `Bearer ${storage?.get('token')}`
                },
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'filename.extension'); // Replace with your file name and extension
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    return (
        <Dialog
            maxWidth={'md'}
            fullWidth
            open={open}
            onClose={handleClose}
        >
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <XCircle size={32} weight="fill" />
            </IconButton>
            <DialogContent
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    padding: 0,
                }}
            >
                <StyledImg src={imgUrl} />
                <StyledBox>
                    <FlexBox justify="space-between" align="center" padding="0">
                        <Button
                            variant={"contained"}
                            sx={{ height: '60px', borderRadius: '16px' }}
                            onClick={handleDownload}
                        >
                            Download <ArrowDown style={{ marginLeft: 2 }} size={24} weight="fill" />
                        </Button>
                        <FlexBox align="center" gap="16px">
                            <StyledButton variant="outlined">
                                <Heart size={24} weight="fill" color="#fff" />
                            </StyledButton>
                            <Button sx={{ height: '60px', borderRadius: '16px' }} variant={"contained"}>
                                Free
                            </Button>
                        </FlexBox>
                    </FlexBox>
                    <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 300,
                            fontSize: '24px',
                            color: '#fff',
                            cursor: 'pointer',
                            mt: 4
                        }}
                    >
                        {news?.titleRu}
                    </Typography>
                </StyledBox>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadResourceDialog;

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '8px'};
  align-items: ${(props) => props.align || 'left'};
  justify-content: ${(props) => props.justify || 'left'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
`;

const StyledBox = styled.div`
  align-items: start;
  background: #3D3D3D;
  padding: 24px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  border: 2px solid #fff;
  width: 60px;
  height: 60px;
  padding: 0;
`;

