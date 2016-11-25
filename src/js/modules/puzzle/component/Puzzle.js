import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {checkPuzzlePartPosition, initAndShufflePuzzle, showImage, hideImage} from '../actions'
import {getStyles, getBgImageStyles, getSizeStyles} from './styles'

require('./styles.scss')

const {data} = require('../../data')
export class Puzzle extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {category} = this.props.params
    const body = document.querySelector('body')
    body.classList.add(`${category}-bg`)
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
    const {parts, partClick, isPuzzleSolved, params, showImage, hideImage, show} = this.props
    const {lang} = params
    const {image,index,path,images} = this.getImage()
    return (
      <div className="game page">
        <div className={isPuzzleSolved?'solved':''}>
          <ul className={show?"puzzle-container hide-parts":"puzzle-container"}
            style={getBgImageStyles(isPuzzleSolved || show, image)}>
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
          <a href="javascript:" onMouseDown={()=>showImage()} onMouseUp={()=>hideImage()}
            className="btn toggle-image">{data[lang]['button-puzzle-toggle-image-label']}</a>
          <Link to={`/${lang}`} className="btn back">{data[lang]['button-puzzle-home-label']}</Link>
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
  show: PropTypes.bool.isRequired,
  parts: PropTypes.array.isRequired,
  shufflePuzzle: PropTypes.func,
  partClick: PropTypes.func,
  showImage: PropTypes.func,
  hideImage: PropTypes.func
}

export const mapStateToProps = ({ puzzle } ) => puzzle;
export const mapDispatchToProps = (dispatch) => ({
  partClick    : index => dispatch(checkPuzzlePartPosition(index)),
  shufflePuzzle: ()=> dispatch(initAndShufflePuzzle()),
  showImage    : ()=> dispatch(showImage()),
  hideImage    : ()=> dispatch(hideImage())
})

export default connect(mapStateToProps,mapDispatchToProps)(Puzzle)
