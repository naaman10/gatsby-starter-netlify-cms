import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const ContentMain = ({ content }) => (
      <div className="column is-10">
          {content.content.map(item => (
          <>
          <h3 id={item.link}>{item.heading}</h3>
          <ReactMarkdown
            source={item.description}
            escapeHtml={false}
          />
          </>
        ))}
      </div>
)

ContentMain.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.node,
      link: PropTypes.string,
}
))}

export default ContentMain
