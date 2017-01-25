import React, { Component,PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router';
import { I18n, } from 'react-redux-i18n';
import { checkPuzzlePartPosition, initAndShufflePuzzle, showImage, hideImage, } from '../actions';
import { getStyles, getBgImageStyles, getSizeStyles, } from './styles';

require('./styles.scss');

export class Puzzle extends Component {
  componentWillMount () {
    const { category, } = this.props.params;
    const body = document.querySelector('body');
    body.classList.add(`${category}-bg`);
    this.props.shufflePuzzle();
  }
  getImage () {
    const { lang, category, index, } = this.props.params;
    const images = I18n.t(`${category}.images`);
    return {
      images,
      image: images[index - 1],
      index: parseInt(index),
      path: `/${lang}/${category}/puzzle`,
    };
  }
  render () {
    const { parts, partClick, isPuzzleSolved, showImage, hideImage, show, locale, } = this.props;
    const { image,index,path,images, } = this.getImage();
    return (
      <div className="game page">
        <div className={isPuzzleSolved ? 'solved' : ''}>
          <ul className={show ? 'puzzle-container hide-parts' : 'puzzle-container'}
            style={getBgImageStyles(isPuzzleSolved || show, image)}>
            {
              parts.map((part,index) => (
                <li key={index} style={getStyles(part, image)}
                  className={part.empty ? 'empty' : ''}>
                  <a style={getSizeStyles(part.w,part.h)}
                    href="javascript:" onClick={() => partClick(part.index)}>
                    <span className="number">{part.label}</span>
                  </a>
                </li>
              ))
            }
          </ul>
          <a href="javascript:" onMouseDown={() => showImage()} onMouseUp={() => hideImage()}
            className="btn toggle-image">{I18n.t('button-puzzle-toggle-image-label')}</a>
          <div className="puzzle-instructions">{I18n.t('puzzle-instructions')}</div>
          <div className="puzzle-complete">
            <div className="puzzle-complete-message">
              {index === images.length && <br/> }
              {index === images.length && <br/> }
              <h2>{I18n.t('puzzle-complete-title')}</h2>
              {index < images.length && <h3>{I18n.t('puzzle-complete-subtitle')}</h3> }
              {index === images.length && <br/> }
            </div>
            <div className="puzzle-complete-group">
              <Link to={`/${locale}`}
                className="btn puzzle-go-home">{I18n.t('button-puzzle-home-label')}</Link>
              {
                index < images.length &&
                <Link to={`${path}/${index + 1}`}
                  className="btn puzzle-next">{I18n.t('button-puzzle-next-label')}</Link>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Puzzle.propTypes = {
  isPuzzleSolved: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  parts: PropTypes.array.isRequired,
  shufflePuzzle: PropTypes.func,
  partClick: PropTypes.func,
  showImage: PropTypes.func,
  hideImage: PropTypes.func,
};

export const mapStateToProps = ({ puzzle, i18n, }) => {
  return {
    ...puzzle,
    ...i18n,
  };
};
export const mapDispatchToProps = dispatch => ({
  partClick    : index => dispatch(checkPuzzlePartPosition(index)),
  shufflePuzzle: () => dispatch(initAndShufflePuzzle()),
  showImage    : () => dispatch(showImage()),
  hideImage    : () => dispatch(hideImage()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Puzzle);
