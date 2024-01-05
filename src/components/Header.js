import React from 'react';
import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandler = (event) => {
        event.preventDefault();

        dispatch(authActions.login());
    };

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <l1>
                            <a href='/'>My Sales</a>
                        </l1>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;