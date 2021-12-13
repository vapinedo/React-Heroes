import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate("/login", { replace: true });
    };
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/">Heroes</Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink to="/marvel"
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? "active": "") }>
                        Marvel
                    </NavLink>

                    <NavLink to="/dc"
                        className={ ({ isActive }) => "nav-item nav-link " + (isActive ? "active": "") }>
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>Valp</span>
                    
                    <button onClick={ logout }
                        className="nav-item nav-link btn">Logout</button>
                </ul>
            </div>
        </nav>
    )
}