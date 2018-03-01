import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger.js';
import { NavButton, NavbarWrapper, NavButtonWrapper, Logo, LogoName, LogoWrapper, BurgerWrapper } from './../../styles/styles';
import sparkIcon from './../../images/icons/sparkLogo.png';
import sparkName from './../../images/spark2.png';

const Navbar = () => {

    return (
        <NavbarWrapper>


              <LogoWrapper>
                <Logo src={sparkIcon} alt="SparkIcon" height="50"/>
                <LogoName src={sparkName} alt="SparkName" height="40"/>
              </LogoWrapper>

              <NavButtonWrapper>
                <Link to="/home">
                    <NavButton>

                        <label>Home</label>
                    </NavButton>
                </Link>


                <Link to="/about">
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
              </NavButtonWrapper>

              <BurgerWrapper>
                <BurgerMenu />
              </BurgerWrapper>



        </NavbarWrapper>
    );
};

export default Navbar;
