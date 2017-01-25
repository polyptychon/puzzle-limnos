import  {
  PUZZLE_PART_POSITION,
  IS_PUZZLE_SOLVED,
  SHUFFLE_PUZZLE,
  INIT_PUZZLE,
  SHOW_IMAGE,
  HIDE_IMAGE,
} from './actionTypes';

export const delay = time => new Promise(fulfill => setTimeout(fulfill, time));

export const getPuzzlePartPosition = (part = 10) => {
  if (typeof part !== 'number') {
    throw (new TypeError('Value should be string'));
  }
  return ({
    type: PUZZLE_PART_POSITION,
    part,
  });
};

export const isPuzzleSolved = () => ({
  type: IS_PUZZLE_SOLVED,
});

export const initPuzzle = () => ({
  type: INIT_PUZZLE,
});

export const shufflePuzzle = () => ({
  type: SHUFFLE_PUZZLE,
});

export const showImage = () => ({
  type: SHOW_IMAGE,
});
export const hideImage = () => ({
  type: HIDE_IMAGE,
});

export const initAndShufflePuzzle = () => {
  return dispatch => {
    dispatch(initPuzzle());
    return delay(500).then(() => dispatch(shufflePuzzle()));
  };
};
export const checkPuzzlePartPosition = part => {
  return dispatch => {
    dispatch(getPuzzlePartPosition(part));
    return delay(500).then(() => dispatch(isPuzzleSolved()));
  };
};
