import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Panel from '../panel'
import OfflineUpdate, {offlineProps}  from '../offline-update'

require('./styles.scss')
require('./template.scss')

const images = [
  require('./images/laikes_general_image.jpg'),
  require('./images/astikes_general_image.jpg')
]

const Template = ({ children, location, params })=> {
  const {lang, category} = params
  const buttonLabel = category?'Έναρξη':'Επιλογή'
  const buttonLink = category?'/puzzle':''
  const pageContentClass = category?'':'empty'
  const pageContainerClass = location.pathname.split('/').join(' ')
  return (
    <div>
      <OfflineUpdate {...offlineProps()} />
      <div className="container">
        <div className="pages">
          <div className={`page-container ${pageContainerClass}`}>
            <Panel title="Λαϊκές" position="left" image={images[0]}
              buttonLabel={buttonLabel} link={`${lang}/laikes${buttonLink}`}/>
            <Panel title="Αστικές" position="right" image={images[1]}
              buttonLabel={buttonLabel} link={`${lang}/astikes${buttonLink}`}/>
          </div>
          <ReactCSSTransitionGroup
            component="div"
            className={`page-content ${pageContentClass}`}
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
    </div>
  )
}
export default Template
