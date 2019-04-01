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

import createHashHistory from 'history/createHashHistory';
    
const hashHistory = createHashHistory({basename: process.env.PUBLIC_URL + '/movie-searchbase'});

const Root = () => {
  // <BrowserRouter basename='/movie-searchbase'>
  // <BrowserRouter basename={process.env.PUBLIC_URL}>
  
  // <BrowserRouter basename={`${process.env.PUBLIC_URL}/movie-searchbase`}>
  return (
    <BrowserRouter history={hashHistory}>
      <React.Fragment>
        <Route path='/' component={MyNavbar} />
        {/* <Route path={process.env.PUBLIC_URL + '/'} component={MyNavbar} /> */}
        <Switch>
          {/* <Route exact path={`${process.env.PUBLIC_URL} + /`} component={App} />  */}
          <Route exact path='/' component={App} />
          {/* <Route path={`${process.env.PUBLIC_URL} + /login`} component={Login} /> */}
          <Route path='/login' component={Login} />
          {/* <Route path={`${process.env.PUBLIC_URL} + /account`} component={Account} /> */}
          <Route path='/account' component={Account} />
          {/* <Route path={`${process.env.PUBLIC_URL} + /search/:searchQuery`} component={SearchResults} /> */}
          <Route path='/search/:searchQuery' component={SearchResults} />
          {/* <Route path={`${process.env.PUBLIC_URL} + /shows/:showId`} component={DisplayTv} /> */}
          <Route path='/shows/:showId' component={DisplayTv} />
          {/* <Route path={`${process.env.PUBLIC_URL} + /movies/:movieId`} component={DisplayMovie} /> */}
          <Route path='/movies/:movieId' component={DisplayMovie} />
          {/* <Route path={`${process.env.PUBLIC_URL} + /people/:peopleId`} component={DisplayPeople} />  */}
          <Route path='/people/:peopleId' component={DisplayPeople} />
          {/* add a redirect to home here */}
        </Switch>
        <Route path='/' component={MyFooter} />
        {/* <Route path={`${process.env.PUBLIC_URL} + /`} component={MyFooter} /> */}
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

{/* <Route exact path={`${process.env.PUBLIC_URL} + /`} component={App} />
<Route path={`${process.env.PUBLIC_URL} + /login`} component={Login} />
<Route path={`${process.env.PUBLIC_URL} + /account`} component={Account} />
<Route path={`${process.env.PUBLIC_URL} + /search/:searchQuery`} component={SearchResults} />
<Route path={`${process.env.PUBLIC_URL} + /shows/:showId`} component={DisplayTv} />
<Route path={`${process.env.PUBLIC_URL} + /movies/:movieId`} component={DisplayMovie} />
<Route path={`${process.env.PUBLIC_URL} + /people/:peopleId`} component={DisplayPeople} /> */}