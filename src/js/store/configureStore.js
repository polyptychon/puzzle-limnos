import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { loadTranslations, syncTranslationWithStore } from 'react-redux-i18n';
import rootReducer from './rootReducer'
import {translations} from './translations'

// import createLogger from 'redux-logger'
// const logger = createLogger();

const configureStore = (initialState = {})=> {
  const store =  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translations));
  return store;
};

export default configureStore;
