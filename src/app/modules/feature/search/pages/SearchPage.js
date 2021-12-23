import React, { useMemo } from 'react';
import queryString from "query-string";
import { useForm } from '@core/hooks/useForm';
import { getHeroByName } from '@core/services/HeroService';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeroCard } from '@feature/heroes/components/HeroCard';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q="" } = queryString.parse(location.search);

    const [state, inputChange] = useForm({ termToSearch: q });
    const { termToSearch } = state;

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

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

                    {
                        (q === "") 
                            ? <div className="alert alert-info">Hero search</div>
                            : (heroesFiltered.length === 0) &&
                            <div className="alert alert-info">No result for <strong>{q}</strong></div>
                    }

                    {heroesFiltered.map(hero => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
                </div>
            </div>
        </>
    )
}
