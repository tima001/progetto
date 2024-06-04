import _ from 'lodash'
import { MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { appIntl } from '../utils/IntlGlobalProvider'
import { logout } from '../features/user/userSlice'

export const rtkQueryErrorLogger =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            _.map(action.payload?.data?.errors, (error) => {
                if (error.code !== 1003) {
                    toast.error(
                        appIntl().formatMessage({
                            id: error.code,
                            defaultMessage: error.message,
                        }),
                    )
                }

                if (error.code === 1003) {
                    api.dispatch(logout())
                }
            })
        }

        return next(action)
    }
