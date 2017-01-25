import { combineReducers, } from 'redux';
import { i18nReducer, } from 'react-redux-i18n';
import { Puzzle, } from '../modules';

export default combineReducers({
  [Puzzle.constants.NAME]: Puzzle.reducer,
  i18n: i18nReducer,
});
