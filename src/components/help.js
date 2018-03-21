import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { H2, H3, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const Help = props => (
  <div>
    <div className="Help">
      <div className="Help-header">
        <H2>Help</H2>
      </div>


      <Link to="/faq">
         <NavButton>

            <NavLabel>FAQ</NavLabel>
         </NavButton>
      </Link>
  
  <Link to="/how">
         <NavButton>

            <NavLabel>How it works</NavLabel>
         </NavButton>
      </Link>

      <div>

        {props.children}

      </div>

    </div>
  </div>
);

export default Help;
