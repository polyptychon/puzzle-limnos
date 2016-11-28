import React, {Component} from 'react'
import {Link} from 'react-router'
const {data} = require('../data')
require('./styles.scss')

class ChoosePuzzle extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {category} = this.props.params
    const body = document.querySelector('body')
    body.classList.add(`${category}-bg`)
  }
  render() {
    const {lang,category} = this.props.params
    const images = data[lang][category].images
    return (
      <div className="choose-puzzle">
        <h3 className="choose-puzzle-label">{data[lang]['button-puzzle-choose']}</h3>
        <div className="puzzles">
          {
            images.map((image, index)=> (
              <Link to={`/${lang}/${category}/puzzle/${index+1}`} key={index}>
                <img className="puzzle-image" src={image} alt={index} width="250" height="180" />
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ChoosePuzzle
