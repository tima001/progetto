import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { REACT_APP_ONLINE_COURSE_BASE_URL } from '../../utils/constants'
import storage from '../../utils/storageService'
import { UseScript } from '../../utils/UseScript'
import { CircularProgress } from '@mui/material'

interface Props {
    value: string
    inline?: boolean
    editable?: boolean
    onEditorChange?: (e: any) => void
    onPaste?: () => void
}
export function CustomRichTextEditor({
    value,
    inline = false,
    onEditorChange,
    editable = true,
    onPaste,
}: Props) {
    // eslint-disable-next-line no-empty-pattern
    const {} = UseScript(
        'https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image',
        'wiris',
    )

    const [loading, setLoading] = useState(true)

    return (
        <div>
            {loading && <CircularProgress sx={{ p: '2px' }} />}

            <Editor
                //https://www.tiny.cloud/docs/integrations/react/#usingthetinymcereactcomponentasacontrolledcomponent
                textareaName="textarea.questionText"
                value={value}
                apiKey="3xu59domqq5vnadqfly3mgpyd46atuhcqwmu3elmtb9b1wue"
                disabled={!editable}
                onInit={() => {
                    setLoading(false)
                }}
                init={{
                    //https://www.tiny.cloud/docs/general-configuration-guide/customize-ui/
                    // selector: 'textarea',
                    height: 400,
                    min_height: 400,
                    width: '100%',
                    menubar: true,
                    inline,
                    toolbar_mode: 'floating',
                    external_plugins: {
                        tiny_mce_wiris:
                            'https://www.wiris.net/demo/plugins/tiny_mce/plugin.min.js',
                        //  '../../../node_modules/@wiris/mathtype-tinymce6/plugin.min.js'
                    },
                    paste_data_images: true,
                    paste_as_text: true,
                    //https://www.tiny.cloud/docs-3x/reference/TinyMCE3x@Plugins/
                    //https://docs.wiris.com/en/mathtype/integrations/html/tinymce
                    plugins: [
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'lists',
                        'media',
                        'table ',
                        'insertdatetime',
                        'media',
                        'table',
                        'code',
                        'help',
                        'wordcount',

                        // print , imagetools, paste
                    ],
                    toolbar: [
                        'undo redo | paste pastetext| formatselect | maths | bold italic underline backcolor | superscript subscript',
                        'alignleft aligncenter alignright alignjustify | a11ycheck | addcomment | imagetools  | showcomments | casechange | checklist | code | formatpainter | pageembed | permanentpen | table | bullist numlist outdent indent | removeformat | latex | help | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry',
                        // 'bullist numlist outdent indent | removeformat | latex | help | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry',
                        // 'fontselect '
                    ],
                    image_title: true,
                    /* enable automatic uploads of images represented by blob or data URIs*/
                    automatic_uploads: true,
                    //https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                    file_picker_types: 'image',
                    /* and here's our custom image picker*/
                    images_upload_handler: image_upload_handler,
                    images_upload_url:
                        REACT_APP_ONLINE_COURSE_BASE_URL +
                        '/upload-image-for-editor',
                    content_style: 'body { font-family: Arial; }',
                    extended_valid_elements: '*[.*]',
                }}
                onEditorChange={onEditorChange}
                onPaste={(text) => console.log(text)}
            />
        </div>
    )
}

function image_upload_handler(blobInfo, success, failure, progress) {
    //let xhr, formData

    const xhr = new XMLHttpRequest()

    xhr.open(
        'POST',
        REACT_APP_ONLINE_COURSE_BASE_URL + '/upload-image-for-editor',
    )
    xhr.setRequestHeader('Authorization', 'Bearer ' + storage?.get('token'))

    // xhr.responseType = 'json';

    xhr.upload.onprogress = function (e) {
        progress((e.loaded / e.total) * 100)
    }

    xhr.onload = function () {
        //let json

        console.log(xhr.response)
        console.log(xhr.responseText)

        if (xhr.status === 403) {
            failure('HTTP Error: ' + xhr.status, { remove: true })
            return
        }

        if (xhr.status < 200 || xhr.status >= 300) {
            failure('HTTP Error: ' + xhr.status)
            return
        }

        const json = JSON.parse(xhr.responseText)

        if (!json || typeof json.data != 'string') {
            failure('Invalid JSON: ' + xhr.responseText)
            return
        }

        success(json.data)
    }

    xhr.onerror = function () {
        failure(
            'Image upload failed due to a XHR Transport error. Code: ' +
                xhr.status,
        )
    }

    const formData = new FormData()
    formData.append('file', blobInfo.blob(), blobInfo.filename())

    xhr.send(formData)
}
