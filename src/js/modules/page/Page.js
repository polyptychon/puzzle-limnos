import React, { Component, } from 'react';
import { I18n, } from 'react-redux-i18n';
require('./styles.scss');

class Page extends Component {
  componentWillMount () {
    const { category, } = this.props.params;
    const body = document.querySelector('body');
    body.classList.add(`${category}-bg`);
  }
  render () {
    const { category, } = this.props.params;
    const description = I18n.t(`${category}.description`);
    const imageSource = I18n.t(`${category}.katopsi`);
    return (
      <div className="content">
        <div className="content-image">
          <img src={imageSource} />
        </div>
        <div className="content-text" dangerouslySetInnerHTML={{ __html: description, }}></div>
      </div>
    );
  }
}

export default Page;
