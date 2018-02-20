import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Download from './components/download.js';
import Help from './components/help.js';
import Press from './components/press.js';
import Contact from './components/contact.js';
import Terms from './components/terms.js';
import Navbar from './components/general/navbar.js';
import { store } from './init-store.js';

const Routes = () => {

  return (
    <Router>
      <div>
        <Navbar />

        <Route path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/download' component={ Download } />
        <Route path='/help' component={ Help } />
        <Route path='/press' component={ Press } />
        <Route path='/contact' component={ Contact } />
        <Route path='/terms' component={ Terms } />
      </div>

    </Router>
  );

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store } >

          <Routes />

        </Provider>
      </div>
    );
  }
}

export default App;
