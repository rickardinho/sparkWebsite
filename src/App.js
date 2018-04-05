import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from 'react-sidebar';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Hist from './components/history.js';
import Download from './components/download.js';
import Help from './components/help.js';
import Faq from './components/faq.js';
import How from './components/how.js';
import Why from './components/why.js';
import Press from './components/press.js';
import Contact from './components/contact.js';
import Terms from './components/terms.js';
import Privacy from './components/privacy.js';
import Navbar from './components/general/navbar.js';
import Footer from './components/general/footer.js';
import { store } from './init-store.js';
import SlidingBurgerContent from './components/general/sliding-burger.js';

class Routes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onBurgerClick = this.onBurgerClick.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  onBurgerClick() {
    console.log('clicked');
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  render () {

    const sidebarContent = <SlidingBurgerContent />

    return (

      <Router>
        <Sidebar sidebar={sidebarContent}
             open={this.state.sidebarOpen}
             onSetOpen={this.onSetSidebarOpen}
             pullRight
        >

          <div>

            <Navbar onBurgerClick={this.onBurgerClick} />

            <Switch>

              <Route exact path="/" component={ Home } />
              <Route path='/about' component={ About } />
              <Route path='/download' component={ Download } />
              <Route path='/help' component={ Help } />
              <Route path='/press' component={ Press } />
              <Route path='/contact' component={ Contact } />
              <Route path='/terms' component={ Terms } />
              <Route path='/privacy' component={ Privacy } />
              <Route path='/faq' component={ Faq } />

            </Switch>

            <Footer />


          </div>

        </Sidebar>
      </Router>

    );
  }



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
