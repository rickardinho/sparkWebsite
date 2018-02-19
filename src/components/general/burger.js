import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu'

class BurgerMenu extends Component {

  render () {
    return (
      <Menu id={ "sidebar" } className={ "burger-menu" } right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="help" className="menu-item" href="/help">Help</a>
        <a id="contact" className="menu-item" href="/contact">Contact Us</a>
      </Menu>
    );
  }
}

export default BurgerMenu;
