import React from 'react'
const {data} = require('../data')
const images = {
  laikes: require('./images/laikes_katopsi.png'),
  astikes: require('./images/astikes_katopsi.png')
}

require('./styles.scss')

const Page = ({params}) => {
  const {lang, category} = params
  const description = data[lang][category].description
  return (
    <div className="content">
      <div className="content-image">
        <img src={images[category]} />
      </div>
      <div className="content-text" dangerouslySetInnerHTML={{__html: description}}></div>
    </div>
  )
}

export default Page
