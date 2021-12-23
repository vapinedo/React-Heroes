import React from 'react';
import { HeroListPage } from '@feature/heroes/pages/HeroListPage'

export const DcPage = () => {
    return (
        <>
            <h3>Dc Comics</h3>
            <hr />

            <HeroListPage publisher="DC Comics" />
        </>
    )
}
