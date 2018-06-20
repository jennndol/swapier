import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store';
import './App.css';
import People from './components/People';
import Person from './components/Person';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter>
          <Switch>
            <Route path='/:id' component = { Person }/>
            <Route path='/' component = { People }/>
          </Switch>
        </BrowserRouter>
      </Provider> 
    );
  }
}

export default App;
