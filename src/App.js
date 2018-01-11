import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import AppContainer from './containers/app-container.js';
import LoginContainer from './containers/login-container.js';
import FarmSummaryContainer from './containers/farmSummary-container.js';
import FarmDetailContainer from './containers/farmDetail-container.js';
import { store } from './init-store.js';

const Routes = () => {

  return (
    <Route path='/' component={ AppContainer }>

        <Route component={ LoginContainer } />

        <Route path='/farmSummary'
            component={ FarmSummaryContainer }
        />

        <Route path='/farmDetails/:farmID'
            component={ FarmDetailContainer }
        />

    </Route>
  );

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store } >
          <HashRouter>
            <Routes />
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
