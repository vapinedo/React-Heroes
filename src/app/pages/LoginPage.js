import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate("/marvel", { replace: true });
    };
    
    return (
        <div className='container-lg main-wrapper'>
            <h3>Login Page</h3>
            <hr />

            <button onClick={login} className="btn btn-primary">Acceder</button>
        </div>
    )
}
