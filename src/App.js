import React from 'react';

import './scss/App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
// import Work from './pages/Work';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        {/* <Route exact path="/Work" component={Work} /> */}
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
}
