import React, { Component } from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component{
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={ Link } to='/' header>
            <Image
              size='mini'
              src={ logo }
              style={{ marginRight: '1.5em' }}
              className="app-logo"
            />
            Swapier
          </Menu.Item>
          <Menu.Item as={ Link } to='/'>People</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;