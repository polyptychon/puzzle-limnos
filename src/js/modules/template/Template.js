import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import OfflineUpdate, {offlineProps}  from '../offline-update'

require('./styles.scss')

const Template = ({ children, location })=> (
  <div>
    <OfflineUpdate {...offlineProps()} />
    <div className="container">
      <ReactCSSTransitionGroup
        component="div"
        className="pages"
        transitionName="top"
        transitionAppear={true}
        transitionAppearTimeout={100}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>

        {React.cloneElement(children, {
          key: location.pathname
        })}

      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default Template
