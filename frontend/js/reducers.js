import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import wizard from './wizard/reducer';

const reducers = combineReducers({
  router: routerReducer,
  form: formReducer,
  wizard,
});


export default reducers;
