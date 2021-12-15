import React from 'react'
import queryString from "query-string";
import { useForm } from '@hooks/useForm';
import { HeroCard } from '@components/HeroCard';
import { getHeroByName } from '@models/HeroModel';
import { useNavigate, useLocation } from 'react-router-dom';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q="" } = queryString.parse(location.search);

    const [state, inputChange] = useForm({ termToSearch: q });
    const { termToSearch } = state;

    const heroesFiltered = getHeroByName(q);

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${ termToSearch }`);
    };
    
    return (
        <>
            <h3>Search</h3>
            <hr />

            <div className="row">
                <div className="col-5">
                    <p>Search results</p>

                    <form onSubmit={ onSubmit } autoComplete='off'>
                        <input 
                            type="text" 
                            name="termToSearch"
                            onChange={ inputChange }
                            value={ termToSearch }
                            className="form-control" 
                            placeholder='Buscar heroe' />

                        <button className='btn btn-outline-primary mt-4' type="submit">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <p>Results</p>
                    {heroesFiltered.map(hero => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
                </div>
            </div>
        </>
    )
}
