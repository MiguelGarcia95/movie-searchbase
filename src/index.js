import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import store from './store';

import App from './components/App';
import Login from './components/Auth/Login';
import Account from './components/Account/Account';
import SearchResults from './components/Search/SearchResults';
import DisplayTv from './components/Display/DisplayTv';
import DisplayMovie from './components/Display/DisplayMovie';
import DisplayPeople from './components/Display/DisplayPeople';
import MyNavbar from './components/layout/MyNavbar';
import MyFooter from './components/layout/MyFooter';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' component={MyNavbar} />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/account' component={Account} />
          <Route path='/search/:searchQuery' component={SearchResults} />
          <Route path='/shows/:showId' component={DisplayTv} />
          <Route path='/movies/:movieId' component={DisplayMovie} />
          <Route path='/people/:peopleId' component={DisplayPeople} />
          {/* add a redirect to home here */}
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
