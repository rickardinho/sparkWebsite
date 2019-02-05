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


        <Link to='/why' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Why</NavLabel>
            </NavButton>
        </Link>

        <Link to='/download' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Download</NavLabel>
            </NavButton>
        </Link>

        <Link to='/how' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>Help</NavLabel>
            </NavButton>
        </Link>

        <Link to='/faq' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>FAQ</NavLabel>
            </NavButton>
        </Link>

        <Link to='/history' onClick={() => this.closeMenu()}>
            <NavButton>

                <NavLabel>History</NavLabel>
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
