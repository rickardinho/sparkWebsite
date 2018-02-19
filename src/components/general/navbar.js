import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Navbar = ({ currentLocation }) => {

    if (process.env.DEVELOPMENT) {
        currentLocation = '/about';
    }

    let navbarClasses = classnames("navbar", {
        "display-none": currentLocation === "/"
    });

    let aboutClasses = classnames("nav-button", {
        "selected": currentLocation.indexOf("/about") > -1
    });

    let helpClasses = classnames("nav-button", {
        "selected": currentLocation.indexOf("/help") > -1
    });
    
    let comtactClasses = classnames("nav-button", {
        "selected": currentLocation.indexOf("/contact") > -1
    });


    return (
        <div className={ navbarClasses }>
            <Link className={ homeClasses } to="home">
                <div >
                    <i className="fa fa-camera nav-icon "></i>
                    <label className="menu-label">Home</label>
                </div>
            </Link>

            <Link className={ aboutClasses } to="about">
                <div>
                    <i className="fa fa-calendar nav-icon"></i>
                    <label className="menu-label">About</label>
                </div>
            </Link>

        </div>
    );
};

export default Navbar;
