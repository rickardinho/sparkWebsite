import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger.js';
import { NavButton, NavbarWrapper } from './../../styles/styles';

const Navbar = () => {

    return (
        <NavbarWrapper>

            <BurgerMenu />

            <Link to="home">
                <NavButton>

                    <label>Home</label>
                </NavButton>
            </Link>

            <Link to="about">
                <NavButton>

                    <label>About</label>
                </NavButton>
            </Link>
        
            <Link to="Download">
                <NavButton>

                    <label>Download</label>
                </NavButton>
            </Link>

            <Link to="help">
                <NavButton>

                    <label>Help</label>
                </NavButton>
            </Link>
        
            <Link to="press">
                <NavButton>

                    <label>Press</label>
                </NavButton>
            </Link>

            <Link to="contact">
                <NavButton>

                    <label>Contact</label>
                </NavButton>
            </Link>

        </NavbarWrapper>
    );
};

export default Navbar;
