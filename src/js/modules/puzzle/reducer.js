/*eslint indent: */
import  {
  PUZZLE_PART_POSITION,
  IS_PUZZLE_SOLVED,
  SHUFFLE_PUZZLE,
  INIT_PUZZLE,
  SHOW_IMAGE,
  HIDE_IMAGE
} from './actionTypes'
import PuzzleParts from './PuzzleParts'

const p = new PuzzleParts()
export const INITIAL_STATE = {
  ...p.initParts(),
  show: false,
  isPuzzleSolved: false
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUZZLE_PART_POSITION:
      return {
        ...state,
        parts: p.changeParts(action.part),
        emptyIndex: p.emptyIndex
      }
    case IS_PUZZLE_SOLVED:
      return {
        ...state,
        isPuzzleSolved: p.isPuzzleSolved()
      }
    case INIT_PUZZLE:
      return {
        ...p.initParts(),
        isPuzzleSolved: false
      }
    case SHOW_IMAGE:
      return {
        ...state,
        show: true
      }
    case HIDE_IMAGE:
      return {
        ...state,
        show: false
      }
    case SHUFFLE_PUZZLE:
      return {
        ...state,
        parts: p.shuffle(),
        isPuzzleSolved: false
      }
    default:
      return {
        ...state
      }
  }
}
