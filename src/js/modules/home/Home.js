import React from 'react'
import {Link} from 'react-router'

require('./styles.scss')

const images = [
  require('./images/laikes_general_image.jpg'),
  require('./images/astikes_general_image.jpg')
]

const Home = ()=> (
  <div className="home page">
    <Link to="puzzle" className="left-panel">
      <div className="bg" style={{backgroundImage:`url(${images[0]})`}}/>
      <div className="title">
        <h1>Λαϊκές</h1>
        <hr/>
        <h5>κατοικίες</h5>
      </div>
    </Link>
    <Link to="puzzle" className="right-panel">
      <div className="bg" style={{backgroundImage:`url(${images[1]})`}}/>
      <div className="title">
        <h1>Αστικές</h1>
        <hr/>
        <h5>κατοικίες</h5>
      </div>
    </Link>
  </div>
)

export default Home;
