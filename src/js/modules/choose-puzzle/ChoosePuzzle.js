import React, { Component, } from 'react';
import { Link, } from 'react-router';
import { I18n, } from 'react-redux-i18n';

require('./styles.scss');

class ChoosePuzzle extends Component {
  componentWillMount () {
    const { category, } = this.props.params;
    const body = document.querySelector('body');
    body.classList.add(`${category}-bg`);
  }
  render () {
    const { lang,category, } = this.props.params;
    const images = I18n.t(`${category}.images`);
    return (
      <div className="choose-puzzle">
        <h3 className="choose-puzzle-label">{I18n.t('button-puzzle-choose')}</h3>
        <div className="puzzles">
          {
            images.map((image, index) => (
              <Link to={`/${lang}/${category}/puzzle/${index + 1}`} key={index}>
                <img className="puzzle-image" src={image} alt={index} width="250" height="180" />
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ChoosePuzzle;
