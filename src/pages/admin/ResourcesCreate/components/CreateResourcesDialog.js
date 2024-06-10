import React from 'react';
import {useIntl} from 'react-intl';
import {useFormik} from "formik";
import {toast} from "react-toastify";
import styled from "@emotion/styled";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
} from '@mui/material'
import CustomInput from "../../../../components/muiComponents/customInput";
import SingleSelect from "../../../../components/muiComponents/singleSelect";
import {recourcesApiSlice} from "../../../../features/recources/recourcesSlice";


const CreateNewsDialog = ({open, handleClose, refetch}) => {
    const {formatMessage} = useIntl();
    const [createNews] = recourcesApiSlice.useCreateEducationMutation();
    const [createImg] = recourcesApiSlice.useCreateImgMutation();
    const [createFile] = recourcesApiSlice.useCreateFileMutation();

    const formik = useFormik({
        initialValues: {
            titleEn: '',
            titleRu: '',
            type: '',
            file: null,
            image: null
        },

        onSubmit: async (values) => {
            let imageUrl = null;
            let fileUrl = null;


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
            if (values.file) {
                const formData = new FormData();
                formData.append('file', values.file);

                try {
                    const response = await createFile(formData).unwrap();
                    fileUrl = response.value;
                } catch (error) {
                    return;
                }
            }

            // Prepare data to send to backend
            const newsData = {
                titleEn: values.titleEn,
                titleRu: values.titleRu,
                type: values.type,
                image: imageUrl,
                file: fileUrl
            };

            try {
                await createNews(newsData).unwrap();
                toast.success('News created successfully');
                formik.resetForm();
                refetch();
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
    const handleFileChange = (event) => {
        formik.setFieldValue("file", event.currentTarget.files[0]);
    };

    const genderItems = [
        {id: 'FONTS', title: formatMessage({id: 'fonts'})},
        {id: 'MATERIALS', title: formatMessage({id: 'materials'})},
        {id: 'MODELS', title: formatMessage({id: 'models'})},
        {id: 'ICONS', title: formatMessage({id: 'icons'})},
    ]

    const handleChange = (event) => {
        const {
            target: {value},
        } = event

        formik.setFieldValue('type', value)
    }

    return (
        <Dialog
            maxWidth={'md'}
            fullWidth
            open={open}
            onClose={handleClose}
        >
            <DialogTitle
                id="responsive-dialog-title"
                sx={{fontWeight: 600}}
            >
                {formatMessage({id: 'Create News'})}
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
                    <FlexBox direction="column" style={{maxWidth: '800px', margin: '0 auto'}}>
                        <CustomInput
                            type="text"
                            id="titleEn"
                            name="titleEn"
                            placeholder="Title (English)"
                            label={"Title (English)"}
                            onChange={formik.handleChange}
                            value={formik.values.titleEn}
                        />
                        <CustomInput
                            type="text"
                            id="titleRu"
                            name="titleRu"
                            placeholder="Title (Russian)"
                            label={"Title (Russian)"}
                            onChange={formik.handleChange}
                            value={formik.values.titleRu}
                        />

                        Img
                        <CustomInput
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        file
                        <CustomInput
                            type="file"
                            id="file"
                            name="file"
                            accept="*/*"
                            onChange={handleFileChange}
                        />
                        <SingleSelect
                            name="type"
                            value={formik.values.type}
                            handleChange={handleChange}
                            menuItems={genderItems}
                            handleBlur={formik.handleBlur}
                            handleError={Boolean(
                                formik.errors.type
                            )}

                        />
                        <Button sx={{padding: '24px', mt: 2}} variant="contained" type="submit">Submit</Button>
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
`