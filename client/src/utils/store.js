// create a redux store to hold the state of the app.
// only one store exist
import { createStore } from 'redux';

import reducers from './reducers';

export default createStore(reducers);
