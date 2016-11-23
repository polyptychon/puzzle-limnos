import React from 'react'
import {Link} from 'react-router'

const Panel = (props)=> {
  const {image, buttonLabel, link, position, title, subtitle} = props
  return (
    <div className={`${position}-panel`}>
      <div className="bg" style={{backgroundImage:`url(${image})`}}/>
      <div className="title">
        <h1>{title}</h1>
        <hr/>
        <h5>{subtitle}</h5>
      </div>
      <Link to={`${link}`} className="btn">{buttonLabel}</Link>
    </div>
  )
}

export default Panel
