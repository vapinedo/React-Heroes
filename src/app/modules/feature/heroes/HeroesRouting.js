import { Routes, Route } from "react-router-dom";
import { DcPage } from "@feature/heroes/pages/DcPage";
import { Navbar } from "@shared/components/Navbar";
import { MarvelPage } from "@feature/heroes/pages/MarvelPage";
import { SearchPage } from "@feature/search/pages/SearchPage";
import { HeroDetailPage } from "@feature/heroes/pages/HeroDetailPage";

export const HeoresRouting = () => {
    return (
        <>
            <Navbar />

            <div className="container-lg main-wrapper">
                <Routes>
                    <Route path="dc" element={<DcPage />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="hero/:id" element={<HeroDetailPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="/" element={<MarvelPage />} />
                </Routes>
            </div>
        </>
    )
}
