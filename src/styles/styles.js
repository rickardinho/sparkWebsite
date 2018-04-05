import styled from 'styled-components';
import colours from './colours';

const fonts = {
  default: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
  default2: "Arial, Helvetica, sans-serif",
  thin: 500
};

export const Logo = styled.img`


`;

export const LogoName = styled.img`
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: inline;
  }

`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BurgerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${colours.offWhite};
  height: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

`;

export const CenteredDiv = styled.div`
  margin: auto;
  padding: 50px;
  width: 230px;

`;

export const ImageDiv = styled.div`
  background: blue;
  align-items: center;
  width: 230px;

`;

export const SocialDiv = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const DownloadMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const DownloadDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DownloadDiv2 = styled.div`
  height: 150px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10%;
  margin-right: 10%;
  align-content: center;

`;

export const DownloadDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  align-content: center;
  margin: auto;

`;

export const Img = styled.img`

  box-sizing: border-box;
  padding: 0;
  width: 100%;
  margin: auto;

`;
export const ImgAppStore = styled.img`

  box-sizing: border-box;
  margin-top: 8%;
  margin-bottom: 8%;
  width: 105%;
  padding: 0;
  justify-content: center;
  align-self: center;
  margin-horizontal: auto;

`;

export const TeamDiv = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
  margin: auto;


  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }

`;

export const TeamMemberDiv = styled.div`
  background: ${colours.offWhite};


`;

export const BulletWrapper = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin: 30px;
    width: auto;
  }

`;

export const BulletDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;


`;

export const SocialButton = styled.a`

  padding: 10px;

`;

export const NavButtonWrapper = styled.div`


  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const BurgerWrapper = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  font-family: ${fonts.default};
  font-size: 1.5em;
  text-align: center;
  color: ${colours.blue};

`;

export const H2 = styled.h2`
  font-family: ${fonts.default};
  text-align: center;
  color: ${colours.what};
  font-size: 24px;
  line-height: 31px;
  letter-spacing: .04px;
  font-weight: 300;

`;

export const H3 = styled.h3`
  font-family: ${fonts.default};
  text-align: center;
  color: ${colours.blue};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;

`;

export const H4 = styled.h4`
  font-family: ${fonts.default};
  text-align: center;
  margin: 15px;
  color: ${colours.blue};
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;


`;

export const P = styled.p`
  font-family: ${fonts.default};
  text-align: justify;
  margin: 10px;
  color: ${colours.blue};
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;


`;

export const CenteredP = styled.p`
  margin: auto;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 20px;
  padding-top: 10px;

  @media (max-width: 800px) {
    padding-left: 5px;
    padding-right: 5px;
  }

`;

export const FooterText = styled.p`
  font-family: ${fonts.default};
  text-align: center;
  color: ${colours.blue};
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  text-decoration: none;


`;

export const FooterLink = styled.a`
  font-family: ${fonts.default};
  color: ${colours.blue};
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
  border: none;
  text-decoration: none;


`;

export const Wrapper = styled.section`

`;

export const NavButton = styled.button`
  font-family: ${fonts.default};
  font-size: 1em;
  font-weight: ${fonts.thin};
  text-align: center;
  color: ${colours.where};
  background: ${colours.offWhite};
  border: none;
  text-decoration: none;
  padding: 14px 16px;
  button:focus {outline:0;};
`;

export const NavButton2 = NavButton.extend`
  color: ${colours.where};
  background: ${colours.transparent};
`;

export const NavLabel = styled.label`

`;

export const NavbarWrapper = styled.section`

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;
  background: ${colours.offWhite};
  button:focus {outline:0;};

`;

export const NavbarWrapper2 = NavbarWrapper.extend`
  display: inline;
  padding: 0;
  margin: 0;
  background: ${colours.verylightgray};

`;

export const FooterWrapper = styled.section`
  padding: 1.2em;
  background: ${colours.offWhite};

`;

export const BurgerStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px'
  },
  bmBurgerBars: {
    background: colours.what
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: colours.gray
  },
  bmMenu: {
    background: colours.offWhite,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: colours.purple
  },
  bmItemList: {
    color: colours.white,
    background: colours.offWhite,
    padding: '0.8em'
  },
  bmOverlay: {
    background: colours.darkgray
  }
};
