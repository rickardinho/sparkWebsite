import React from 'react';
import { render } from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import { MainDiv, H2, H3, H4, P, NavbarWrapper2, NavButton, NavButton2, NavLabel, TeamDiv, TeamMemberDiv, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';
import Dave from './../images/dave.jpg';
import Damian from './../images/damian.jpg';
import Why from './why.js';
import Hist from './history.js';

const About = props => (
  <MainDiv>

      <NavbarWrapper2>
        <H3>About Spark</H3>

        <Link to='/about/why'>
          <NavButton2>
            <NavLabel>Why Spark?</NavLabel>
          </NavButton2>
        </Link>

        <Link to='/about/history'>
          <NavButton2>
            <NavLabel>The Spark story</NavLabel>
          </NavButton2>
        </Link>
      </NavbarWrapper2>

      <div>
        <Switch>
          <Route exact path='/about' component={Why} />
          <Route exact path='/about/why' component={Why} />
          <Route exact path='/about/history' component={Hist} />
        </Switch>
      </div>

  </MainDiv>
);

export default About;
