import React from 'react';
import {connect} from 'react-redux';
import {getToken} from '../../actions/authActions';

import '../App.css';
import './style/css/Login.css';

class Login extends React.Component {
  componentDidMount() {
    this.props.getToken();
  }

  onLoginClick = url => this.props.getSession(url);

  render() {
    const loginHref = `https://www.themoviedb.org/authenticate/${this.props.token_id}?redirect_to=https://miguelgarcia95.github.io/movie-searchbase/account/approved`;
    return (
      <section className='login_page'>
        <section className="login_content">
          <section className="login_header"><h1>Login</h1></section>
          <section className="login_buttons">
            <section className="login_button"><a href={loginHref} >Login</a></section>
          </section>
        </section>
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
    getToken: () => dispatch(getToken())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
