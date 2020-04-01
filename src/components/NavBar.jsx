import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'

export default function NavBar() {

    return (
        <>
            <div className="nav">
                <header>SARAH ALDRICH</header>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </div>
        </>
    )
}