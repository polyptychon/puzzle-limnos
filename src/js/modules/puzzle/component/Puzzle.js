import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {checkPuzzlePartPosition, initAndShufflePuzzle} from '../actions'
import {getStyles, getBgImageStyles, getSizeStyles} from './styles'

require('./styles.scss')
const images = [
  require('./images/astikes_image1.jpg'),
  require('./images/astikes_image2.jpg'),
  require('./images/astikes_image3.jpg'),
  require('./images/laikes_image1.jpg'),
  require('./images/laikes_image2.jpg')
]

export class Puzzle extends Component {
  constructor(props) {
    super(props);
    props.shufflePuzzle()
  }
  render() {
    const {parts, partClick, isPuzzleSolved, shufflePuzzle} = this.props
    return (
      <div className="game page">
        <div className={isPuzzleSolved?'solved':''}>
          <ul className="puzzle-container" style={getBgImageStyles(isPuzzleSolved, images)}>
            {
              parts.map((part,index)=> (
                <li key={index} style={getStyles(part, images)} className={part.empty?'empty':''}>
                  <a style={getSizeStyles(part.w,part.h)} href="javascript:" onClick={()=>partClick(part.index)}>
                    <span className="number">{part.label}</span>
                  </a>
                </li>
              ))
            }
          </ul>
          <a href="javascript:" onClick={()=> shufflePuzzle()} className="restart-puzzle">Play again</a>
        </div>
      </div>
    )
  }
}

Puzzle.propTypes = {
  isPuzzleSolved: PropTypes.bool.isRequired,
  parts: PropTypes.array.isRequired,
  shufflePuzzle: PropTypes.func,
  partClick: PropTypes.func
}

export const mapStateToProps = ({ puzzle } ) => puzzle;
export const mapDispatchToProps = (dispatch) => ({
  partClick: index => dispatch(checkPuzzlePartPosition(index)),
  shufflePuzzle: ()=> dispatch(initAndShufflePuzzle())
})

export default connect(mapStateToProps,mapDispatchToProps)(Puzzle)
