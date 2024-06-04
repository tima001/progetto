
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from './rtkQueryErrorLogger'
import userReducer from '../features/user/userSlice'
import { studentApiSlice } from '../features/student/studentSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        [studentApiSlice.reducerPath]: studentApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            studentApiSlice.middleware,
            rtkQueryErrorLogger,
        ]),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
