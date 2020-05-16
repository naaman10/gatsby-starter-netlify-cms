import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const WeWork = ({ weWorkData }) => (
  <div className="column is-12">
    <h3 id={weWorkData.link}>{weWorkData.heading}</h3>
    <ReactMarkdown
      source={weWorkData.content}
      escapeHtml={false}
    />
</div>
)

WeWork.propTypes = {
  heading: PropTypes.string,
  link: PropTypes.string,
  content: PropTypes.string,
}

export default WeWork
