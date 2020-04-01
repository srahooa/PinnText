import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/index.scss';

import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Route exact path='/'
              component={Home} />
            <Route exact path='/portfolio'
              component={Portfolio} />
            <Route exact path='/about'
              component={About} />
            <Route exact path='/contact'
            component={Contact} />
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
