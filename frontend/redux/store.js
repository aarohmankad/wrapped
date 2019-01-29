import { createStore } from 'redux';

import reducers from './reducers';

// Create store with reducers and initial state
const initialState = {};
const store = createStore(reducers, initialState);

export default store;
