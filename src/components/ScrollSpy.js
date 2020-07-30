import React from 'react'
import PropTypes from 'prop-types'

const ScrollSpy = ({ scrollItems }) => (
<nav className="navbar navbar-light bg-ligh menu">
  <p className="navbar-brand w-100">{scrollItems.heading}</p>
  <nav className="nav nav-pills flex-column">
    {scrollItems.scrollItemsList.map(item => (

    <a className="nav-link" href={item.link}>{item.linkText}</a>

  ))}
  </nav>
</nav>


)

ScrollSpy.propTypes = {
  heading: PropTypes.string,
  scrollItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      linkText: PropTypes.string,
    })
  ),
}

export default ScrollSpy
