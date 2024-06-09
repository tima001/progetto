import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ProtectedRoute from '../components/ProtectedRoute'
import ConfirmMail from '../components/registrationForm/components/ConfirmMail'
import NewsCreate from "../pages/admin/NewsCreate/NewsCreate";
import Education from "../pages/Education/Education";
import News from "../pages/News/News";
import Works from "../pages/Works/Works";
import AdminPage from "../pages/admin/adminPage/AdminPage";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/education"
                    element={<Education />}
                />
                <Route
                    path="/news"
                    element={<News />}
                />
                <Route
                    path="/works"
                    element={<Works />}
                />
                <Route
                    path="/login"
                    element={<Login showLoginPage={true} />}
                />
                <Route
                    path="/sign-up"
                    element={<Login showLoginPage={false} />}
                />
                <Route
                    path="/api/auth/mail-activate/:token"
                    element={<ConfirmMail />}
                />

                <Route element={<ProtectedRoute />}>
                        <Route path='/user-page'>
                            <Route index element={<AdminPage />}/>
                        </Route>
                    <Route path='/news-create'>
                            <Route index element={<NewsCreate />}/>
                        </Route>
                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </>
    )
}

export default AppRouter
