// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

// Analytics
import ReactGA from 'react-ga';
import {UA} from './const';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers/Main';

// Pages
import App from './App/App';
import Home from './components/Pages/Home/Home';
import List from './components/Pages/List/List';
import Videos from './components/Pages/Videos/Videos';
import Posts from './components/Pages/Posts/Posts';
import Post from './components/Pages/Post/Post';
import NoMatch from './components/Pages/NoMatch/NoMatch';
import Login from './components/Pages/Login/Login';

// Helpers
import throttle from 'lodash/throttle';
import { saveState } from './utils';

// Global Assets
/*eslint-disable no-unused-vars*/
/*eslint-enable no-unused-vars*/

// Global CSS
import './index.css';

// Create the Store
let store = createStore(
  Reducers,
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : false
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000)


// Analytics
ReactGA.initialize(UA);
function logPageView() {
  window.scrollTo(0, 0); // messy - alternative solutions very welcome
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// Define Routes
const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/list',
    exact: true,
    component: List
  },
  {
    path: '/videos',
    exact: true,
    component: Videos
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/posts/:pid',
    exact: false,
    component: Post
  },
  {
    path: '/posts',
    exact: true,
    component: Posts
  },
  {
    path: '*',
    exact: false,
    component: NoMatch
  }
];

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } onUpdate={logPageView}>
      <Route component={ App }>
        {routes.map((route, index) => (
          <Route
            key={ index }
            path={ route.path }
            exact={ route.exact }
            component={ route.component }
          />
        ))}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
