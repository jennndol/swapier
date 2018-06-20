import React, { Component } from 'react';

class Person extends Component {
  render () {
    return (
      <div>
          <p>Person {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Person;