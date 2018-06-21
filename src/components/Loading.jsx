import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class Loading extends Component {
  render() {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }
}

export default Loading;