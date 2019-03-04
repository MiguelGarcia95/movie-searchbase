import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import MyNavbar from './components/layout/MyNavbar';
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

const RootWithRouter = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' component={MyNavbar} />
        <Switch>
          <Route exact path='/' component={App} />
          {/* <Route path='/login' component={App} />
          <Route path='/account' component={App} />
          <Route path='/search' component={App} />
          <Route path='/tv/{tvId}' component={App} />
          <Route path='/movie/{movieId}' component={App} /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

ReactDOM.render(<RootWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
