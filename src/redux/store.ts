import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;

export default store;