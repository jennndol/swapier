import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getPerson } from '../actions/person/async';

class Person extends Component {
  componentDidMount(){
    this.props.getPerson('https://swapi.co/api/people/', this.props.match.params.id);
  }

  render () {
    return (
      <div>
          <p>Person {this.props.match.params.id}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.person
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPerson
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
