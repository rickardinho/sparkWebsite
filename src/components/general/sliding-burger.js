import React from 'react';
import { Link } from 'react-router-dom';
import { NavButton, NavLabel, BurgerDiv } from './../../styles/styles';


const SlidingBurgerContent = ({onBurgerClick}) => (

      <BurgerDiv onClick={() => onBurgerClick()}>
        <div>
          <NavButton>

          </NavButton>
        </div>

        <Link to='/' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Home</NavLabel>
            </NavButton>
        </Link>


        <Link to='/about' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>About</NavLabel>
            </NavButton>
        </Link>

        <Link to='/download' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Download</NavLabel>
            </NavButton>
        </Link>

        <Link to='/help' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Help</NavLabel>
            </NavButton>
        </Link>

        <Link to='/press' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Press</NavLabel>
            </NavButton>
        </Link>

        <Link to='/contact' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Contact</NavLabel>
            </NavButton>
        </Link>
      </BurgerDiv>

);

export default SlidingBurgerContent;
