import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import middleware from './middleware/logger'
import { middleware } from ''

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
