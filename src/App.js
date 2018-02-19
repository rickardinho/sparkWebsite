import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import AppContainer from './containers/app-container.js';
import Home from './components/home.js';
import About from './components/about.js.js';
import Terms from './components/terms.js.js';
import { store } from './init-store.js';

const Routes = () => {

  return (
    <Route path='/' component={ AppContainer }>

        <Route component={ Home } />

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
