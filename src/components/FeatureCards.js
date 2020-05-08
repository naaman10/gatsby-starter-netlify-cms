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
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
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
    })
  ),
}

export default FeatureCards
