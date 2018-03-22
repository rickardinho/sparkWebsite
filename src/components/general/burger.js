import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { NavButton, NavLabel, NavbarWrapper, BurgerStyles } from './../../styles/styles';

class BurgerMenu extends Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    return (
      <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          styles={ BurgerStyles }
          id={ "sidebar" }
          className={ "burger-menu" }
          right
      >

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
      </Menu>
    );
  }
}

export default BurgerMenu;
