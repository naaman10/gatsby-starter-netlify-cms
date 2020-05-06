import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureRight = ({ gridItems }) => (

  <div className="column is-10 is-offset-1 columns has-background-white features-box is-hidden-mobile">
  {gridItems.map(item => (
    <div>
    <div className="column is-4 is-offset-1 has-margin-top-auto has-margin-bottom-auto">
      <div className="title">
        <p className="has-text-black is-family-secondary has-text-weight-bold">{item.title}</p>
        <span className="is-size-5">{item.intro}</span>
      </div>
    </div>
    <div className="column is-5 is-offset-1">
      <figure className="image">
        <PreviewCompatibleImage imageInfo={item.image} />
      </figure>
    </div>
    <div className="column is-12">
      <p className="has-text-black is-family-secondary has-text-weight-bold">{item.text}</p>
    </div>
    </div>
    ))}
  </div>
)

FeatureRight.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      intro: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureRight
