import React from 'react'
import { DcPage } from '@pages/DcPage';
import { Navbar } from '@components/Navbar';
import { LoginPage } from '@pages/LoginPage';
import { SearchPage } from '@pages/SearchPage';
import { MarvelPage } from '@pages/MarvelPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <div className="container-lg main-wrapper">
                <Routes>
                    <Route path="/" element={<MarvelPage />} />
                    <Route path="/dc" element={<DcPage />} />
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
