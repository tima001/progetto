import React from 'react'
import { useIntl } from 'react-intl'
import { useFormik } from "formik";
import { toast } from "react-toastify";
import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
} from '@mui/material'
import { newsApiSlice } from "../../../../features/news/newsSlice";
import CustomInput from "../../../../components/muiComponents/customInput";


const CreateNewsDialog = ({ open, handleClose,refetch }) => {
    const { formatMessage } = useIntl();
    const [createNews] = newsApiSlice.useCreateNewsMutation();
    const [createImg] = newsApiSlice.useCreateImgMutation();

    const formik = useFormik({
        initialValues: {
            titleEn: '',
            titleRu: '',
            contentEn: '',
            contentRu: '',
            image: null
        },
        onSubmit: async (values) => {
            let imageUrl = null;

            // If there is an image, upload it first
            if (values.image) {
                const formData = new FormData();
                formData.append('file', values.image);

                try {
                    const response = await createImg(formData).unwrap();
                    imageUrl = response.value; // or whatever field the image URL is in the response
                } catch (error) {
                    return;
                }
            }

            // Prepare data to send to backend
            const newsData = {
                titleEn: values.titleEn,
                titleRu: values.titleRu,
                contentEn: values.contentEn,
                contentRu: values.contentRu,
                image: imageUrl
            };

            try {
                await createNews(newsData).unwrap();
                toast.success('News created successfully');
                formik.resetForm(); // Reset the form after successful creation
                refetch()
                handleClose();
            } catch (error) {
                handleClose();
            }
        },
    });

    // Function to handle image upload
    const handleImageChange = (event) => {
        formik.setFieldValue("image", event.currentTarget.files[0]);
    };

    return (
        <Dialog
            maxWidth={'md'}
            fullWidth
            open={open}
            onClose={handleClose}
        >
            <DialogTitle
                id="responsive-dialog-title"
                sx={{ fontWeight: 600 }}
            >
                {formatMessage({ id: 'Create News' })}
            </DialogTitle>

            <DialogContent
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    maxHeight: '600px'
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <FlexBox direction="column" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <CustomInput
                            type="text"
                            id="titleEn"
                            name="titleEn"
                            placeholder="Title (English)"
                            onChange={formik.handleChange}
                            value={formik.values.titleEn}
                        />
                        <CustomInput
                            type="text"
                            id="titleRu"
                            name="titleRu"
                            placeholder="Title (Russian)"
                            onChange={formik.handleChange}
                            value={formik.values.titleRu}
                        />
                        <TextField
                            id="contentEn"
                            variant="outlined"
                            name="contentEn"
                            placeholder="Content (English)"
                            onChange={formik.handleChange}
                            value={formik.values.contentEn}
                            multiline
                            rows={16}
                        />
                        <CustomInput
                            id="contentRu"
                            name="contentRu"
                            placeholder="Content (Russian)"
                            onChange={formik.handleChange}
                            value={formik.values.contentRu}
                            multiline
                            rows={16}
                        />
                        <CustomInput
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <Button sx={{ padding: '24px', mt: 2 }} variant="contained" type="submit">Submit</Button>
                    </FlexBox>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateNewsDialog;

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '8px'};
  align-items: ${(props) => props.align || 'left'};
  justify-content: ${(props) => props.justify || 'left'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
`;
