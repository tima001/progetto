import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { logout, setCredentials } from '../features/user/userSlice'
import {
    REACT_APP_IAM_SERVICE_BASE_URL,
    REACT_APP_ONLINE_COURSE_BASE_URL,
} from '../utils/constants'
import storage from '../utils/storageService'

// Create a new mutex
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
    baseUrl: REACT_APP_ONLINE_COURSE_BASE_URL,
    prepareHeaders: (headers) => {
        const token = storage?.get('token')
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})

const refreshQuery = fetchBaseQuery({
    baseUrl: REACT_APP_IAM_SERVICE_BASE_URL,
})

const baseQueryWithOnlineCourse: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    if ((result.error as any)?.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()

            try {
                const refreshResult: any = await refreshQuery(
                    {
                        credentials: 'include',
                        url: `auth/refresh-token/`,
                        method: 'POST',
                        body: { refreshToken: storage?.get('refreshToken') },
                    },
                    api,
                    extraOptions,
                )

                if (refreshResult.data) {
                    api.dispatch(setCredentials(refreshResult.data.data))
                    // Retry the initial query
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    api.dispatch(logout())
                }
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }

    return result
}

export default baseQueryWithOnlineCourse
