import { createApi } from '@reduxjs/toolkit/dist/query/react'
import baseQueryWithIam from '../../app/baseQueryWithIam'
import { StudentState} from '../types'

interface Props {
    id: string
}
export const newsApiSlice = createApi({
    reducerPath: 'newsApi',
    baseQuery: baseQueryWithIam,
    tagTypes: ['Student'],
    endpoints: (build) => ({
        fetchNews: build.query<any, string>({
            query: () => ({
                url: `/main/news/list`,
            }),

            transformResponse: (response: any) => response,

        }),
        fetchImage: build.query<any, Props>({
            query: (props) => ({
                url: `/file/image/${props.id}`,
            }),


        }),

        createNews: build.mutation<void, any>({
            query: (news) => ({
                url: '/main/news/create',
                method: 'POST',
                body: news,
            }),
            invalidatesTags: [{ type: 'Student', id: 'LIST' }],
        }),
        createImg: build.mutation<any, any>({
            query: (news) => ({
                url: '/file/image/upload',
                method: 'POST',
                body: news,
            }),
            transformResponse: (response: any) => response,
        }),

        updateStudent: build.mutation<void, StudentState>({
            query: (student) => ({
                url: `student/${student.id}`,
                method: 'PUT',
                body: student,
            }),
            invalidatesTags: [{ type: 'Student', id: 'LIST' }],
        }),

        deleteNews: build.mutation<void, Props>({
            query: (props) => ({
                url: `/main/news/delete/${props.id}`,
                method: 'DELETE',
            }),
        }),

        getStudentsInfoByIds: build.mutation<any, Array<number>>({
            query: (ids) => ({
                url: `student/group`,
                method: 'POST',
                body: ids,
            }),
            transformResponse: (response: any) => response.data,
        }),

        registerUser: build.mutation<any, StudentState>({
            query: (user) => ({
                url: `users/registration`,
                method: 'POST',
                body: user,
            }),
        }),
    }),
})
