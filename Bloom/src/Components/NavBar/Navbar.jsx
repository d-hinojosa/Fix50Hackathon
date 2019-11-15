import React from 'react'
import './navbar.scss'

const Navbar = () =>{
    return(
        <nav>
            <header>
                <h1>Bloom</h1>
            </header>
            <div className="pages">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
            </div>
        </nav>
    )
}

export default Navbar