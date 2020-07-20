import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureCards = ({ featuredItems }) => (
  <div className="row">
    {featuredItems.map(item => (

      <div key={item.text} className="col-md-4">
        <div className="card text-center">
          <div className="card-img-top">
            <div
              style={{
                width: '200px',
                display: 'inline-block',
                padding: '10px',
              }}
            >
              <img src={item.image.publicURL} className="img-fluid"/>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.text}</p>
            <a href={item.link} className="btn btn-primary">{item.linkText}</a>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureCards.propTypes = {
  featuredItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string,
      heading: PropTypes.string,
      link: PropTypes.string,
      linkText: PropTypes.string,
    })
  ),
}

export default FeatureCards
