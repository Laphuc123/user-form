import { Outlet, Link } from "react-router-dom";
import React  from 'react';
import './navbar.css';

function Navbar() {
    return (
    <>
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/"><button>Home</button></Link>
                </li>
                <li>
                    <Link to="/add"><button>Add</button></Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
};

export default Navbar;