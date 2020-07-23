import React from 'react'
import PropTypes from 'prop-types'

const ScrollSpy = ({ scrollItems }) => (
<nav className="menu" className="navbar navbar-light bg-light">
  <p className="navbar-brand w-100">Menu</p>
  <nav className="nav nav-pills flex-column">
    {scrollItems.scrollItems.map(item => (

    <a className="nav-link" href={item.link}>{item.linkText}</a>

  ))}
  </nav>
</nav>


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
