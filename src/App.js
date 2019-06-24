import React from 'react';
import './scss/App.scss';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import {Route, Switch} from 'react-router-dom';
import SideDrawer from './components/MobileMenu/SideDrawer';

class App extends React.Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  render() {
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
    }

    return (
      <>
        <Navbar drawerClickHandler = {this.drawerToggleClickHandler} />
        {sideDrawer}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Work" component={Work} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </>
    );
  }
}

export default App;