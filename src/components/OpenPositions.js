import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const OpenPositions = ({ gridItems }) => (
  <div className="columns is-3">
    {gridItems.map(item => (
      <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by3">
            <PreviewCompatibleImage imageInfo={item} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{item.name}</p>
          <div clasNames="content">
            {item.text}
          </div>
          <a className="button is-fullwidth" target="_blank" href={item.link}>{item.buttonText}</a>
        </div>

        <footer className="card-footer">
          <div className="card-footer-item">

          </div>
        </footer>
      </div>
      </div>
    ))}
  </div>
)

OpenPositions.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
      buttonText: PropTypes.string,
    })
  ),
}

export default OpenPositions
