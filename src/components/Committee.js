import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const Committee = ({ committeeData }) => (
  <div className="column is-12">
    <h3 id={committeeData.link}>{committeeData.heading}</h3>
    <ReactMarkdown
      source={committeeData.intro}
      escapeHtml={false}
    />
  <div className="columns">
    {committeeData.members.map(item => (
      <div className="column is-3">
        <div className="profile-card">
          <div className="profile-card-image" style={{
            maxHeight: '240px',
          }}>
            <img src={item.image.childImageSharp.fluid.src} />
          </div>
          <div className="profile-card-body is-tex">
            <h4 className="profile-card-heading">{item.name}</h4>
            <p className="profile-card-subheading">{item.role}</p>
          </div>
          { item.social.length > 0 &&
            <div className="profile-card-footer">
              <div className="socialList">
            {item.social.map(item => (
              <a href={item.Link} className="socialListItem" target="_blank">
                <i class={"fab fa-" + item.source}></i>
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
)

Committee.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      role: PropTypes.string,
    })
  ),
}

export default Committee
