import React from 'react';
import { HeroListPage } from '@feature/heroes/pages/HeroListPage';

export const MarvelPage = () => {
    return (
        <>
            <h3>Marvel Comics</h3>
            <hr />

            <HeroListPage publisher="Marvel Comics" />
        </>
    )
}
