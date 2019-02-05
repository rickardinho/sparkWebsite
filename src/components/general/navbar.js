import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, Logo, LogoName, LogoWrapper, BurgerWrapper } from './../../styles/styles';
import sparkIcon from './../../images/icons/sparkLogo.png';
import sparkName from './../../images/spark2.png';
import colours from './../../styles/colours';


const BurgerIcon = ({onBurgerClick}) => {

  return (
    <LogoWrapper>
      {<a onClick={onBurgerClick}><FontAwesome name='bars' size='2x'
        style={{ color: colours.gray, textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /></a>}
    </LogoWrapper>
  );

};

const Navbar = ({onBurgerClick}) => {


    return (
        <NavbarWrapper>

              <LogoWrapper>
                <Logo src={sparkIcon} alt="SparkIcon" height="50"/>
                <LogoName src={sparkName} alt="SparkName" height="40"/>
              </LogoWrapper>

              <NavButtonWrapper>
                <Link to='/'>
                    <NavButton>

                        <NavLabel>Home</NavLabel>
                    </NavButton>
                </Link>


                <Link to='/why'>
                    <NavButton>

                        <NavLabel>Why</NavLabel>
                    </NavButton>
                </Link>

                <Link to='/download'>
                    <NavButton>

                        <NavLabel>Download</NavLabel>
                    </NavButton>
                </Link>

                <Link to='/how'>
                    <NavButton>

                        <NavLabel>Help</NavLabel>
                    </NavButton>
                </Link>

                <Link to='/press'>
                    <NavButton>

                        <NavLabel>Press</NavLabel>
                    </NavButton>
                </Link>

                <Link to='/contact'>
                    <NavButton>

                        <NavLabel>Contact</NavLabel>
                    </NavButton>
                </Link>
              </NavButtonWrapper>

              <BurgerWrapper>

                <BurgerIcon onBurgerClick={onBurgerClick}/>

              </BurgerWrapper>



        </NavbarWrapper>
    );
};

export default Navbar;
