import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getPerson } from '../actions/person/async';

import { Container, Header, List, Icon, Table } from 'semantic-ui-react';
import Loading from './Loading';

class Person extends Component {
  componentDidMount(){
    this.props.getPerson('https://swapi.co/api/people/', this.props.match.params.id);
  }

  render () {
    let icon;
    let detail = [];
    this.props.person.detail.mass > 80 ? icon = 'rocket' : icon = 'anchor';
    if(this.props.person.detail){
      for (const key in this.props.person.detail) {
        detail.push({key, value: this.props.person.detail[key]});
      }
    }
    return (
      <Container className="app-main">
        { this.props.person.loading ? <Loading/> : null }
        <Header as='h2' icon textAlign='center'>
          <Icon name={icon} circular />
          <Header.Content>
            { this.props.person.detail.name }
          </Header.Content>
        </Header>
        <Table definition>
          <Table.Body>
            {
              detail.map(item => (
                <Table.Row key = {item.key}>
                  <Table.Cell>{item.key}</Table.Cell>
                  {
                    item.key === 'vehicles' || item.key === 'species' ||
                    item.key === 'films' || item.key === 'starships' ? (
                      <Table.Cell>
                        <List>
                        {
                          item.value.map((item, idx) => (
                              <List.Item key={ idx }>{idx+1}. {item}</List.Item>
                          ))
                        }
                        </List>
                      </Table.Cell>
                    ) : <Table.Cell>{item.value}</Table.Cell>                    
                  }
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </Container>
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
