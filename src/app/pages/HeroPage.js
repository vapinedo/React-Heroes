import React from 'react';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getHeroById } from '@models/HeroModel';

export const HeroPage = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const { id } = useParams();
    const hero = getHeroById(id);
    const imagePath = `/assets/${hero.id}.jpg`;

    if(!hero) {
        return <Navigate to="/" />
    }
    
    return (
        <div className='row mt-4'>
            <div className="col-4">
                <img src={imagePath} className="img-thumbnail" alt={hero.superhero} />
            </div>

            <div className="col-8">
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
