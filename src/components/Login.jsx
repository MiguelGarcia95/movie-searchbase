import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Container, Button, Row, Col} from 'reactstrap';

import {getToken, getSession} from '../actions/authActions';

import './App.css';

class Login extends React.Component {
  componentDidMount() {
    this.props.getToken();
  }

  onLoginClick = url => this.props.getSession(url);

  render() {
    // const loginHref = `https://api.themoviedb.org/3/authentication/session/new?/${this.props.token_id}`;
    const loginHref = `https://www.themoviedb.org/authenticate/${this.props.token_id}?redirect_to=http://localhost:3000/account/approved`;
    return (
      <section className="App" style={{backgroundColor: '#ddd', width: '100%', height: '100vh'}}>
        <Jumbotron fluid style={{paddingTop: '110px', backgroundColor: '#444', color: 'white'}}>
          <Container fluid style={{textAlign:'center'}}>
            <h1 className="display-3">Login</h1>
            <p className="lead">It'll redirect you to The MovieDB</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs={{ size: '4', offset: 4 }} style={{padding: '0'}}>
              {/* <Button color="success" onClick={() => this.onLoginClick(loginHref)} size="lg" block>Block level button</Button> */}
              <Button color="success" href={loginHref} size="lg" block>Block level button</Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    token_id: state.auth.token_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(getToken()),
    getSession: url => dispatch(getSession(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
