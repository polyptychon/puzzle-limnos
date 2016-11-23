import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {checkPuzzlePartPosition, initAndShufflePuzzle} from '../actions'
import {getStyles, getBgImageStyles, getSizeStyles} from './styles'

require('./styles.scss')

const {data} = require('../../data')
const images = {
  astikes: [
    require('./images/astikes_image1.jpg'),
    require('./images/astikes_image2.jpg'),
    require('./images/astikes_image3.jpg')
  ],
  laikes: [
    require('./images/laikes_image1.jpg'),
    require('./images/laikes_image2.jpg')
  ]
}
export class Puzzle extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.shufflePuzzle()
  }
  getImage() {
    const {location} = this.props
    const {category, index} = this.props.params
    const paths = location.pathname.split('/')
    const path = paths.slice(0,paths.length-1).join('/')
    return {
      images: images[category],
      image: images[category][index-1],
      index: parseInt(index),
      path
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
              <h2>{data[lang]["puzzle-complete-title"]}</h2>
              <h3>{data[lang]["puzzle-complete-subtitle"]}</h3>
            </div>
            <div className="puzzle-complete-group">
              <Link to="/" className="btn puzzle-go-home">{data[lang]["button-puzzle-home-label"]}</Link>
              {index<images.length && <Link to={path+'/'+(index+1)} className="btn puzzle-next">{data[lang]["button-puzzle-next-label"]}</Link>}
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
