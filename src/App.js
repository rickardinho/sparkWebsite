import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import AppContainer from './containers/app-container.js';
import Home from './components/home.js';
import About from './components/about.js';
import Terms from './components/terms.js';
import { store } from './init-store.js';

const Routes = () => {

  return (
    <Route path='/' component={ AppContainer }>

        <Route component={ Home } />

        <Route path='/about'
            component={ About }
        />

        <Route path='/terms'
            component={ Terms }
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
