import {combineReducers} from 'redux'
import {Puzzle} from '../modules'

export default combineReducers({
  [Puzzle.constants.NAME]: Puzzle.reducer
})
