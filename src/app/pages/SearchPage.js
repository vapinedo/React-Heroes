import React from 'react'
import { useForm } from '../hooks/useForm';

export const SearchPage = () => {

    const [state, inputChange] = useForm({ queryString: "" });
    const { queryString } = state;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(queryString);
    };
    
    return (
        <>
            <h3>Search</h3>
            <hr />

            <div className="row">
                <div className="col-5"></div>
                <p>Search results</p>

                <form onSubmit={ onSubmit } autoComplete='off'>
                    <input 
                        type="text" 
                        name="queryString"
                        onChange={ inputChange }
                        value={ queryString }
                        className="form-control" 
                        placeholder='Buscar heroe' />

                    <button className='btn btn-outline-primary mt-4' type="submit">Search</button>
                </form>
            </div>
        </>
    )
}
