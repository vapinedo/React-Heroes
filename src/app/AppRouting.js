import { LoginGuard } from '@core/guards/LoginGuard';
import { HeroesGuard } from '@core/guards/HeroesGuard';
import { LoginPage } from '@feature/login/pages/LoginPage';
import { HeoresRouting } from '@feature/heroes/HeroesRouting';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <LoginGuard>
                        <LoginPage />
                    </LoginGuard>
                } />

                <Route path="/*" element={
                    <HeroesGuard>
                        <HeoresRouting />
                    </HeroesGuard>
                } />
            </Routes>
        </BrowserRouter>
    )
}
