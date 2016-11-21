import React from 'react'
import {Link} from 'react-router'

require('./styles.scss')

const Home = ()=> (
  <div className="home page">
    <div className="left-panel">
      <div className="glyphicon logo-icon" />
      <div className="title">Test</div>
      <div className="description">
        <br />
        <br />
        <Link to="quiz" className="btn btn-primary btn-lg">Test</Link>
      </div>
    </div>
    <div className="right-panel">
      <div className="description">Test
        <br />
        <br />
        <Link to="puzzle" className="btn btn-primary btn-lg">Play Puzzle</Link>
      </div>
    </div>
  </div>
)

export default Home;
