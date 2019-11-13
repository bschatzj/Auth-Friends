import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {

    console.log(localStorage.getItem('token'))
    return (
        <div>
            <NavLink to={'/'}><h1>Home</h1></NavLink>
            <NavLink to={localStorage.getItem('token') ? '/friends' : '/signin' }><h1>{localStorage.getItem('token') ? 'Friends' : 'Sign In' }</h1></NavLink>
            {localStorage.getItem('token') ? <NavLink  onClick={() => localStorage.removeItem('token')} to={'/'}><h1>Sign Out</h1></NavLink> : null}
        </div>
    )
}