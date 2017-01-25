/*eslint-disable indent,id-length */
import  {
  PUZZLE_PART_POSITION,
  IS_PUZZLE_SOLVED,
  SHUFFLE_PUZZLE,
  INIT_PUZZLE,
  SHOW_IMAGE,
  HIDE_IMAGE,
} from './actionTypes';
import PuzzleParts from './PuzzleParts';

const p = new PuzzleParts();
export const INITIAL_STATE = {
  ...p.initParts(),
  show: false,
  isPuzzleSolved: false,
};

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUZZLE_PART_POSITION:
      return {
        ...state,
        parts: p.changeParts(action.part),
        emptyIndex: p.emptyIndex,
      };
    case IS_PUZZLE_SOLVED: {
      const isPuzzleSolved = p.isPuzzleSolved();
      return {
        ...state,
        show: isPuzzleSolved,
        isPuzzleSolved,
      };
    }
    case INIT_PUZZLE:
      return {
        ...p.initParts(),
        isPuzzleSolved: false,
        show: false,
      };
    case SHOW_IMAGE:
      return {
        ...state,
        show: true,
      };
    case HIDE_IMAGE:
      return {
        ...state,
        show: false,
      };
    case SHUFFLE_PUZZLE:
      return {
        ...state,
        parts: p.shuffle(),
        isPuzzleSolved: false,
        show: false,
      };
    default:
      return {
        ...state,
      };
  }
}
