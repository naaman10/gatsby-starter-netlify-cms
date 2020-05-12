import React from 'react'
import PropTypes from 'prop-types'

const ScrollSpy = ({ scrollItems }) => (
  <aside className="menu">
    <p class="menu-label">{scrollItems.heading}</p>
      <ul className="menu-list">
          {scrollItems.scrollItems.map(item => (


          <li><a href={item.link}>{item.linkText}</a></li>


        ))}
      </ul>
</aside>
)

ScrollSpy.propTypes = {
  heading: PropTypes.string,
  scrollItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      linkText: PropTypes.string,
    })
  ),
}

export default ScrollSpy
