import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import '../assets/css/Navbar.scss'

function NavbarComponent() {
    return (
        <div>
            <Navbar className='nav-color'>
                <NavbarBrand className='mx-auto'>
                    <h1>copyTrello</h1>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
