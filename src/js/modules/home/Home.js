import React from 'react'
import {Link} from 'react-router'

require('./styles.scss')

const Home = ()=> (
  <div className="home page">
    <Link to="puzzle" className="left-panel">
      <h1>Λαικές κατοικίες</h1>
    </Link>
    <Link to="puzzle" className="right-panel">
      <h1>Αστικές κατοικίες</h1>
    </Link>
  </div>
)

export default Home;
