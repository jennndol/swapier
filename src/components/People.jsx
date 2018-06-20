import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import logo from '../logo.svg';
import { getPeople } from '../actions/people/async';

class People extends Component {
  componentDidMount(){
    this.props.getPeople('https://swapi.co/api/people');
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={e => this.props.getPeople(this.props.people.next)}>NEXT</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.people
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPeople
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
