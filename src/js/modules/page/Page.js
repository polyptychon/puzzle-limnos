import React, {Component} from 'react'
import {Link} from 'react-router'
const {data} = require('../data')
require('./styles.scss')

class Page extends Component {
  componentWillMount() {
    const {category} = this.props.params
    const body = document.querySelector('body')
    body.classList.add(`${category}-bg`)
  }
  render() {
    const {lang, category} = this.props.params
    const description = data[lang][category].description
    return (
      <div className="content">
        <div className="content-image">
          <img src={data[lang][category].katopsi} />
        </div>
        <div className="content-text" dangerouslySetInnerHTML={{__html: description}}></div>
        <Link to={`/${lang}`} className="btn back">{data[lang]['button-puzzle-home-label']}</Link>
      </div>
    )
  }
}

export default Page
