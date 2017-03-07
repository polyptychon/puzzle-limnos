import React from 'react';
import { Link, } from 'react-router';
import { I18n, } from 'react-redux-i18n';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Panel from '../panel';
import OfflineUpdate, { offlineProps, }  from '../offline-update';

require('./styles.scss');
require('./fonts.scss');
require('./template.scss');

const images = [
  require('./images/laikes_general_image.jpg'),
  require('./images/astikes_general_image.jpg'),
];

const Template = ({ children, location, params, }) => {
  const { lang, category, } = params;
  const buttonLabel = category ?
    I18n.t('button-start-label') :
    I18n.t('button-select-label');

  const buttonLink = category ? '/puzzle' : '';
  const pageContentClass = category ? '' : 'empty';
  const pageContainerClass = location.pathname.split('/').join(' ');
  return (
    <div>
      <OfflineUpdate {...offlineProps()} />
      <div className="container">
        <div className="pages">
          <div className={`page-container ${pageContainerClass}`}>
            <div className="navigation-panel">
              <a href="javascript:" onClick={() => window.history.back()}>
                <span className="icon-left-open" />
              </a>
              <Link to={`/${lang}`}><span className="icon-home" /></Link>
              <a href="javascript:" onClick={() => window.history.forward()}>
                <span className="icon-right-open" />
              </a>
            </div>
            <div className="choose-lang">
              <Link to={`/${lang === 'en' ? 'el' : 'en'}`}>
                {lang === 'en' ? 'ΕΛΛΗΝΙΚΑ' : 'ENGLISH'}
              </Link>
            </div>
            <Panel title={I18n.t('laikes.title')} subtitle={I18n.t('laikes.subtitle')}
              position="left" image={images[0]}
              buttonLabel={buttonLabel} link={`${lang}/laikes${buttonLink}`}/>
            <Panel title={I18n.t('astikes.title')}  subtitle={I18n.t('astikes.subtitle')}
              position="right" image={images[1]}
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
              key: location.pathname,
            })}

          </ReactCSSTransitionGroup>
        </div>
      </div>
    </div>
  );
};
export default Template;
