import React from 'react'
const {data} = require('../data')
require('./styles.scss')

const Page = ({params}) => {
  const {lang, category} = params
  const description = data[lang][category].description
  return (
    <div className="content">
      <div className="content-image">
        <img src={data[lang][category].katopsi} />
      </div>
      <div className="content-text" dangerouslySetInnerHTML={{__html: description}}></div>
    </div>
  )
}

export default Page
