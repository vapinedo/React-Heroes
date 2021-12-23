import React, { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getHeroById } from '@core/services/HeroService';

export const HeroDetailPage = () => {

    const { id } = useParams();
    const hero = useMemo(() => getHeroById(id), [id]); 
    const imagePath = `/assets/${hero.id}.jpg`;
    
    const navigate = useNavigate();
    const goBack = () => {
        const pageBefore = -1;
        navigate(pageBefore);
    };

    if(!hero) {
        return <Navigate to="/" />
    }
    
    return (
        <div className='row mt-4'>
            <div className="col-4">
                <img src={imagePath} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero} />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h4>{hero.superhero}</h4>
                <ul className="list-group">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                    <li className="list-group-item"><b>Characteres:</b> {hero.characters}</li>
                </ul>

                <button onClick={ goBack } className="btn btn-outline-info mt-4">Go Back</button>
            </div>
        </div>
    )
}
