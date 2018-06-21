import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getPeople } from '../actions/people/async';

import { Container, List, Header, Icon } from 'semantic-ui-react';
import Loading from './Loading';

class People extends Component {
  componentDidMount(){
    this.props.getPeople('https://swapi.co/api/people');
  }

  render(){
    return (
      <Container className="app-main">

        { this.props.people.loading ? <Loading/> : null }

        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            The Star Wars People
          </Header.Content>
        </Header>
        <List divided relaxed>
          {
            this.props.people.results.map(person => {
              let icon, link, temp;
              person.mass > 80 ? icon = 'rocket' : icon = 'anchor';
              temp = person.url.split('people/');
              link = '/'+temp[1];
              return (
                <List.Item key = {person.url}>
                  <List.Icon name={ icon } size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as={ Link } to={ link }>{ person.name }</List.Header>
                    <List.Description as={ Link } to={ link }>{ person.gender }</List.Description>
                  </List.Content>
                </List.Item>
              );
            })
          }
        </List>
        
        <div className="pagination">
          {
            this.props.people.previous ? (
              <a title="previous" onClick={e => this.props.getPeople(this.props.people.previous)}><Icon name='angle double left' /></a>
            ) : null
          }
          {
            this.props.people.next ? (
              <a title="next" onClick={e => this.props.getPeople(this.props.people.next)}><Icon name='angle double right' /></a>
            ) : null
          }
        </div>
        
      </Container>
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
