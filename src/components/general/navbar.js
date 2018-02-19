import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger.js';
import { NavButton } from './../../styles/styles'
import classnames from 'classnames';

const Navbar = () => {

    let navbarClasses = classnames("navbar", {});

    let homeClasses = classnames("nav-button", {});

    let aboutClasses = classnames("nav-button", {});

    let helpClasses = classnames("nav-button", {});

    let contactClasses = classnames("nav-button", {});


    return (
        <div className={ navbarClasses }>

            <BurgerMenu />

            <Link className={ homeClasses } to="home">
                <NavButton>
                    <i className="fa fa-camera nav-icon "></i>
                    <label className="menu-label">Home</label>
                </NavButton>
            </Link>

            <Link className={ aboutClasses } to="about">
                <NavButton>
                    <i className="fa fa-calendar nav-icon"></i>
                    <label className="menu-label">About</label>
                </NavButton>
            </Link>

            <Link className={ helpClasses } to="help">
                <NavButton>
                    <i className="fa fa-calendar nav-icon"></i>
                    <label className="menu-label">Help</label>
                </NavButton>
            </Link>

            <Link className={ contactClasses } to="contact">
                <NavButton>
                    <i className="fa fa-calendar nav-icon"></i>
                    <label className="menu-label">Contact</label>
                </NavButton>
            </Link>

        </div>
    );
};

export default Navbar;
