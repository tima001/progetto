import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import baseQueryWithIam from '../../app/baseQueryWithIam'
import customHistory from '../../utils/history'
import storage from '../../utils/storageService'
import { userLogin } from './userActions'

interface activateSmsCodeParams {
    mobile: string
    code: number
}

interface UserState {
    loading: boolean
    userInfo: {
        email: string
        firstName: string
        lastName: string
        mobile: string
        roles: Array<string>
        lang: string
        token: string
        refreshToken: string
        id?: number
        isFirstEntry: boolean
    }
    error: boolean
    success: boolean
}

const initialState: UserState = {
    loading: false,
    userInfo: storage?.get('user') || {
        email: '',
        firstName: '',
        lastName: '',
        mobile: '',
        roles: [],
        lang: storage?.get('language') || 'kz',
        token: '',
        refreshToken: '',
    }, // for user object
    error: false,
    success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = { lang: state.userInfo.lang, ...action.payload }
            storage.set('token', action.payload.token)
            storage.set('refreshToken', action.payload.refreshToken)
            storage.set('user', {
                ...action.payload,
                lang: storage?.get('language') || 'kz',
            })
        },

        setLanguage: (state, action: PayloadAction<string>) => {
            storage?.set('language', action.payload)
            state.userInfo.lang = action.payload
        },

        resetError: (state) => {
            state.error = false
        },

        logout: (state) => {
            storage?.remove('token')
            storage?.remove('refreshToken')
            storage?.remove('user')

            state.success = false
            state.userInfo = {
                ...initialState.userInfo,
            }
            customHistory.push('/')
        },
    },
    extraReducers: {
        [userLogin.pending.toString()]: (state) => {
            state.loading = true
            state.error = false
            state.success = false
        },

        [userLogin.fulfilled.toString()]: (state, { payload }) => {
            state.loading = false
            state.userInfo = { lang: state.userInfo.lang, ...payload }
            state.success = true
            storage?.set('user', {
                ...payload,
                lang: storage?.get('language') || 'kz',
            })
        },

        [userLogin.rejected.toString()]: (state) => {
            state.loading = false
            state.error = true
            state.success = false
        },
    },
})

export const userApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithIam,
    endpoints: (build) => ({
        deleteUser: build.mutation<void, number>({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            }),
        }),

        resetTemporaryPassword: build.mutation<void, number>({
            query: (id) => ({
                url: `/user/${id}/reset-password`,
                method: 'POST',
            }),
        }),

        changePassword: build.mutation<void, string>({
            query: (password) => ({
                url: `/auth/force-change-password`,
                method: 'POST',
                body: { password },
            }),
        }),

        confirmMail: build.query<void, string>({
            query: (token) => ({
                url: `auth/mail-activate/${token}`,
            }),
            transformResponse: (response: any) => response.data,
        }),

        activateSmsCode: build.mutation<void, activateSmsCodeParams>({
            query: (params) => ({
                url: `/auth/sms-activate`,
                method: 'PUT',
                body: params,
            }),
        }),
    }),
})

export const lang = (state: RootState) => state.user.userInfo.lang

export const userInfo = (state: RootState) => state.user.userInfo

export const { resetError, setLanguage, setCredentials, logout } =
    userSlice.actions

export default userSlice.reducer
