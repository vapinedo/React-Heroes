import { LoginPage } from '@pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardRoute } from '@routers/DashboardRoute';
import { PrivateRoute } from '@routers/PrivateRoute';
import { PublicRoute } from '@routers/PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoute />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}
