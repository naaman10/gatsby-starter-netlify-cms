import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const Testimonial = ({ testiData }) => (
  <div className="column is-12">
    <h3 id={testiData.link}>{testiData.heading}</h3>
    <ReactMarkdown
      source={testiData.intro}
      escapeHtml={false}
    />
  <div className="columns">
    {testiData.testimonials.map(item => (
      <div className="testimonials has-text-centered">
        <span><i class="fas fa-quote-left"></i></span><span className="quote-text"> {item.quote} </span><span><i class="fas fa-quote-right"></i></span>
        <br />
        <cite> – {item.source} | {item.school}</cite>
      </div>
    ))}
  </div>
</div>
)

Testimonial.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  link: PropTypes.string,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      source: PropTypes.string,
      school: PropTypes.string,
    })
  ),
}

export default Testimonial
