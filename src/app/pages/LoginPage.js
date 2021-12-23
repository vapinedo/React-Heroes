import React, { useContext } from 'react';
import { types } from "@types/types";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@auth/authContext';

export const LoginPage = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const login = () => {
        const action = {
            type: types.login,
            payload: { name: "Valp" }
        };
        dispatch(action);

        const lastPath = localStorage.getItem("lastPath") || "/marvel";
        navigate(lastPath, { replace: true });
    };
    
    return (
        <div className='container-lg main-wrapper'>
            <h3>Login Page</h3>
            <hr />

            <button onClick={login} className="btn btn-primary">Acceder</button>
        </div>
    )
}
