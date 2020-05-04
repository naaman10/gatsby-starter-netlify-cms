import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const OpenPositions = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p className="is-size-4">{item.name}</p>
          <p>{item.text}</p>
          <a
          className="button"
          href={item.link}
          >{item.buttonText}
          </a>
        </section>
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
