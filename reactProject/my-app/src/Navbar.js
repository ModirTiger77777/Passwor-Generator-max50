import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className = "nav">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li> <Link to="/pricing">Pricing</Link></li>
                </ul>
                <ul>
                    <li> <Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}
