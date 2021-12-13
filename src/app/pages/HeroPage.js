import React from 'react';
import { useParams, Mavigate, Navigate } from "react-router-dom";
import { getHeroById } from '@models/HeroModel';
import { HeroCard } from '@components/HeroCard';

export const HeroPage = () => {

    const { id } = useParams();
    const hero = getHeroById(id);

    if(!hero) {
        return <Navigate to="/" />
    }
    
    return (
        <div>
            <h3>Hero</h3>
            <hr />

            {/* <HeroCard hero={hero}> */}
            {hero.superhero}
        </div>
    )
}
