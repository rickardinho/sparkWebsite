import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Download from './components/download.js';
import Help from './components/help.js';
import Faq from './components/faq.js';
import How from './components/how.js';
import Press from './components/press.js';
import Contact from './components/contact.js';
import Terms from './components/terms.js';
import Privacy from './components/privacy.js';
import Navbar from './components/general/navbar.js';
import Footer from './components/general/footer.js';
import { store } from './init-store.js';

const Routes = () => {

  return (



    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/download' component={ Download } />
        <Route path='/help' component={ Help }>
          <Route path='/faq' component={ Faq } />
           <Route path='/how' component={ How } />
        </Route>
        <Route path='/press' component={ Press } />
        <Route path='/contact' component={ Contact } />
        <Route path='/terms' component={ Terms } />
        <Route path='/privacy' component={ Privacy } />
        <Route path='/faq' component={ Faq } />

        <Footer />


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
