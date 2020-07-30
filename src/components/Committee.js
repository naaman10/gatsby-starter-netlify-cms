import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'


const Committee = ({ committeeData }) => (
<section>
  <div className="column is-12">
    <h3 id={committeeData.link}>{committeeData.heading}</h3>
    <ReactMarkdown
      source={committeeData.intro}
      escapeHtml={false}
    />
  <div className="row space-evenly">
    {committeeData.members.map(item => (
      <div className="col-md-3">
        <div className="card">
          <img src={item.image.childImageSharp.fluid.src} className="card-img-top" alt={item.name} />
          <div className="card-body text-center">
            <h4 className="card-title">{item.name}</h4>
            <p className="text-muted">{item.role}</p>
            <button className="btn btn-primary" type="button" data-toggle="modal" data-target={`#modal-${item.id}`}>Find out more</button>
          </div>
          { item.social.length > 0 &&
            <div className="card-footer">
              <div className="socialList">
            {item.social.map(item => (
              <a href={item.Link} className="socialListItem" target="_blank" rel="noopener noreferrer">
                <i className={"fab fa-" + item.source}></i>
              </a>
            ))}
              </div>
            </div>
          }
          </div>
        </div>
    ))}
  </div>
</div>
</section>


)

Committee.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      bio: PropTypes.string,
      role: PropTypes.string,
    })
  ),
}

export default Committee
