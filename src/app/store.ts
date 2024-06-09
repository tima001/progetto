
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from './rtkQueryErrorLogger'
import userReducer, {userApiSlice} from '../features/user/userSlice'
import { studentApiSlice } from '../features/student/studentSlice'
import {newsApiSlice} from "../features/news/newsSlice";
import {educationApiSlice} from "../features/education/educationSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [studentApiSlice.reducerPath]: studentApiSlice.reducer,
        [newsApiSlice.reducerPath]: newsApiSlice.reducer,
        [educationApiSlice.reducerPath]: educationApiSlice.reducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            studentApiSlice.middleware,
            newsApiSlice.middleware,
            educationApiSlice.middleware,
            userApiSlice.middleware,
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
