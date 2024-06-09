import { createApi } from '@reduxjs/toolkit/dist/query/react'
import baseQueryWithIam from '../../app/baseQueryWithIam'
import { ListResponse, StudentState } from '../types'

export const studentApiSlice = createApi({
    reducerPath: 'studentApi',
    baseQuery: baseQueryWithIam,
    tagTypes: ['Student'],
    endpoints: (build) => ({
        fetchAllStudents: build.query<ListResponse<StudentState>, string>({
            query: (params) => ({
                url: `student?${params}`,
            }),
            providesTags: (result) =>
                result
                    ? [
                          ...result.data.map(({ id }) => ({
                              type: 'Student' as const,
                              id,
                          })),
                          { type: 'Student', id: 'LIST' },
                      ]
                    : [{ type: 'Student', id: 'LIST' }],
            transformResponse: (response: {
                data: ListResponse<StudentState>
            }) => ({
                data: response.data.data,
                pageNumber: response.data.pageNumber,
                totalCount: response.data.totalCount,
                totalPages: response.data.totalPages,
            }),
        }),

        createStudent: build.mutation<void, StudentState>({
            query: (student) => ({
                url: 'student',
                method: 'POST',
                body: student,
            }),
            invalidatesTags: [{ type: 'Student', id: 'LIST' }],
        }),

        updateStudent: build.mutation<void, StudentState>({
            query: (student) => ({
                url: `student/${student.id}`,
                method: 'PUT',
                body: student,
            }),
            invalidatesTags: [{ type: 'Student', id: 'LIST' }],
        }),

        deleteStudent: build.mutation<void, number>({
            query: (id) => ({
                url: `/student/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Student', id }],
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
