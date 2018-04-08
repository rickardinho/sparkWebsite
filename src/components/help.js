import React from 'react';
import { Link, Route } from 'react-router-dom';
import { MainDiv, H3, NavButton2, NavLabel, NavbarWrapper2 } from './../styles/styles';
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
