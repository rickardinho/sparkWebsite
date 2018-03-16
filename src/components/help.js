import React from 'react';
import { render } from 'react-dom';
import { H2, H3, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const Help = () => (
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
  
    </div>
  </div>
);

export default Help;
