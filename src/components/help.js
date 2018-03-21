import React from 'react';
import { render } from 'react-dom';
import { Link, Route } from 'react-router-dom';
import { MainDiv, H2, H3, H4, NavButton, NavButton2, NavLabel, NavbarWrapper, NavbarWrapper2, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';
import Faq from './faq.js';
import How from './how.js';

const Help = props => (
    <MainDiv>

      <NavbarWrapper2>

        <H3>Help</H3>

        <Link to="/help/how">
          <NavButton2>
            <NavLabel>How it works</NavLabel>
          </NavButton2>
        </Link>

        <Link to="/help/faq">
           <NavButton2>
              <NavLabel>FAQ</NavLabel>
           </NavButton2>
        </Link>

      </NavbarWrapper2>



      <div>
        <Route exact path={props.match.path} component={How} />
        <Route path={`${props.match.path}/how`} component={How} />
        <Route path={`${props.match.path}/faq`} component={Faq} />
      </div>
    </MainDiv>

);

export default Help;
