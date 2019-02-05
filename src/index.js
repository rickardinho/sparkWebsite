import React from 'react';
// import ReactDOM from 'react-dom'; // use for non-static apps
import { hydrate, render } from 'react-dom'; // use for static sites
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadComponents } from 'loadable-components';


const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  loadComponents().then(() => {
    hydrate(<App />, rootElement);
  });
} else {
  render(<App />, rootElement);
}

// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
