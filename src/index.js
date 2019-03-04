import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

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

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
