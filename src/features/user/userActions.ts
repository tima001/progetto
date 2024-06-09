import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { REACT_APP_IAM_SERVICE_BASE_URL } from '../../utils/constants'
import storage from '../../utils/storageService'

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }: any, { rejectWithValue }) => {
        const payload = new URLSearchParams({
            username: username,
            password,
            grant_type: 'password',
        });

        try {
            const response = await axios.post(
                `${REACT_APP_IAM_SERVICE_BASE_URL}/uaa/oauth/token`,
                payload,
                {
                    auth: {
                        username: 'browser',
                        password: '',
                    },
                }
            );

            // store user's token in local storage
            storage?.set('token', response.data.access_token);

            return response.data;
        } catch (error) {
            // return custom error message from API if any
            return rejectWithValue(error.response ? error.response.data : null);
        }
    },
);




// export const userChangePassword = createAsyncThunk(
//     'user/changePassword',
//     async (password: string, { dispatch, rejectWithValue }) => {
//         try {
//             const token = storage?.get('token')
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     authorization: `Bearer ${token}`,
//                 },
//             }

//             await axios.post(
//                 REACT_APP_IAM_SERVICE_BASE_URL + '/auth/force-change-password',
//                 { password },
//                 config,
//             )

//             dispatch(passwordChanged())

//             return true
//         } catch (error) {
//             // return custom error message from API if any
//             return rejectWithValue(error)
//         }
//     },
// )
