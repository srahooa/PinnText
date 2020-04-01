import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </>
    )
}