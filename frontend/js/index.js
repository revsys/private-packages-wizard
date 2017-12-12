/* global window, document, PRODUCTION */

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss'

import React from 'react'
import { AppContainer } from 'react-hot-loader';

import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import routes from './routes';

import reducers from './reducers';
import RootContainer from './containers/RootContainer';

const history = createHistory()
const logger = createLogger()

const middleware = [
  thunk,
  routerMiddleware(history),
  logger,
]

const store = createStore(
  reducers,
  composeWithDevTools(
      applyMiddleware(...middleware)
  )
)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('app-container')
  );
};

render(RootContainer);

if (module.hot) {
  module.hot.accept(['./containers/RootContainer', './routes'], () => {
    const nextRootLayout = require('./containers/RootContainer');
    render(RootContainer);
  });
}
