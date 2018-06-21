import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import store from './store';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import People from './components/People';
import Person from './components/Person';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div>
          <BrowserRouter>
            <div>
              <Navbar/>
              <Switch>
                <Route path='/:id' component = { Person }/>
                <Route path='/' component = { People }/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider> 
    );
  }
}

export default App;
