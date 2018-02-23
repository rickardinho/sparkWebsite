import styled from 'styled-components';
import colours from './colours';

const fonts = {
  default: "Arial, Helvetica, sans-serif",
  thin: 500
};

export const Title = styled.h1`
  font-family: ${fonts.default};
  font-size: 1.5em;
  text-align: center;
  color: ${colours.blue};

`;

export const H2 = styled.h2`
  font-family: ${fonts.default};
  font-size: 1.2em;
  text-align: center;
  color: ${colours.blue};

`;

export const H3 = styled.h3`
  font-family: ${fonts.default};
  font-size: 1.0em;
  text-align: center;
  color: ${colours.blue};

`;


export const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

export const NavButton = styled.button`
  font-family: ${fonts.default};
  font-size: 1.2em;
  font-weight: ${fonts.thin};
  text-align: center;
  color: ${colours.white};
  background: ${colours.blue};
  border-color: ${colours.offwhite};
`;

export const NavbarWrapper = styled.section`
  padding: 2em;
  background: ${colours.offWhite};
`;

export const BurgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: colours.gray
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};
