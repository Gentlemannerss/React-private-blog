import React from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';

function Nav({ auth, setAuth }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(false);
        navigate('/');
    };

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {!auth && (
                        <li>
                            <Link to="/login">Inloggen</Link>
                        </li>
                    )}
                    {auth && (
                        <>
                            <li>
                                <Link to="/blogposts">Blog overview</Link>
                            </li>
                            <li>
                                <button type="button" onClick={handleLogout}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <hr />
        </>
    );
}

export default Nav;