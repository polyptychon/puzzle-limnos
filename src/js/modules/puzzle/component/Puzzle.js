import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {checkPuzzlePartPosition, initAndShufflePuzzle} from '../actions'
import {getStyles, getBgImageStyles, getSizeStyles} from './styles'

require('./styles.scss')

const {data} = require('../../data')
export class Puzzle extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.shufflePuzzle()
  }
  getImage() {
    const {lang, category, index} = this.props.params
    return {
      images: data[lang][category].images,
      image: data[lang][category].images[index-1],
      index: parseInt(index),
      path: `/${lang}/${category}/puzzle`
    }
  }
  render() {
    const {parts, partClick, isPuzzleSolved, params} = this.props
    const {lang} = params
    const {image,index,path,images} = this.getImage()
    return (
      <div className="game page">
        <div className={isPuzzleSolved?'solved':''}>
          <ul className="puzzle-container" style={getBgImageStyles(isPuzzleSolved, image)}>
            {
              parts.map((part,index)=> (
                <li key={index} style={getStyles(part, image)} className={part.empty?'empty':''}>
                  <a style={getSizeStyles(part.w,part.h)} href="javascript:" onClick={()=>partClick(part.index)}>
                    <span className="number">{part.label}</span>
                  </a>
                </li>
              ))
            }
          </ul>
          <div className="puzzle-complete">
            <div className="puzzle-complete-message">
              {index===images.length && <br/> }
              {index===images.length && <br/> }
              <h2>{data[lang]["puzzle-complete-title"]}</h2>
              {index<images.length && <h3>{data[lang]["puzzle-complete-subtitle"]}</h3> }
              {index===images.length && <br/> }
            </div>
            <div className="puzzle-complete-group">
              <Link to={`/${lang}`} className="btn puzzle-go-home">{data[lang]["button-puzzle-home-label"]}</Link>
              {index<images.length && <Link to={`${path}/${index+1}`} className="btn puzzle-next">{data[lang]["button-puzzle-next-label"]}</Link>}
            </div>
          </div>
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
