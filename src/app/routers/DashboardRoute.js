import { Routes, Route } from "react-router-dom";
import { DcPage } from "@pages/DcPage";
import { Navbar } from "@components/Navbar";
import { HeroPage } from "@pages/HeroPage";
import { MarvelPage } from "@pages/MarvelPage";
import { SearchPage } from "@pages/SearchPage";

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="dc" element={<DcPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="heroes" element={<HeroPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="/" element={<MarvelPage />} />
            </Routes>
        </>
    )
}
