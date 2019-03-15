import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

import App from './components/App';
import Login from './components/Auth/Login';
import Account from './components/Auth/Account';
import SearchResults from './components/Search/SearchResults';
import DisplayTv from './components/DisplayTv';
import DisplayMovie from './components/DisplayMovie';
import MyNavbar from './components/layout/MyNavbar';
import MyFooter from './components/layout/MyFooter';
import * as serviceWorker from './serviceWorker';

/*
 Routes
 / -> home
 /tv/id -> Tv Show
 /movie/id -> Movie
 /login -> redirec to movieDB to autheticate
 /account -> account display
 /search -> search with string or requirements ie: genre/year ect...

 /random -> get a random movie/show
*/

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' component={MyNavbar} />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/account' component={Account} />
          <Route path='/search' component={SearchResults} />
          <Route path='/tv/{tvId}' component={DisplayTv} />
          <Route path='/movie/{movieId}' component={DisplayMovie} />
        </Switch>
        <Route path='/' component={MyFooter} />
      </React.Fragment>
    </BrowserRouter>
  )
}

const RootWithAuth = withRouter(connect()(Root));

const RootWithRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootWithAuth />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<RootWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
