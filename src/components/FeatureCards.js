import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureCards = ({ featureItems }) => (
  <div className="columns is-multiline">
    {featureItems.map(item => (

      <div key={item.text} className="column is-4">
        <div className="card">
          <div className="card-image has-text-centered">
            <div
              style={{
                width: '120px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="card-content has-text-centered">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="{item.link}" className="btn">{item.linkText}</a>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureCards.propTypes = {
  featureItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string,
      heading: PropTypes.string,
    })
  ),
}

export default FeatureCards
