import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const CommitteeModal = ({ committeeModal }) => (
  <div>
    {committeeModal.members.map(item => (
      <div className="modal fade" id={`modal-${item.id}`} tabIndex="-1" role="dialog" aria-labelledby={`modal-${item.id}`} aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <img src={item.image.childImageSharp.fluid.src} className="img-fluid" alt={item.name} />
                  </div>
                  <div className="col-md-8">
                    <h3 className="modal-title" id="staticBackdropLabel">{item.name}</h3>
                    <ReactMarkdown
                      source={item.bio}
                      escapeHtml={false}
                    />
                    { item.social.length > 0 &&

                        <div className="socialList">
                      {item.social.map(item => (
                        <a href={item.Link} className="socialListItem" target="_blank" rel="noopener noreferrer">
                          <i className={"fab fa-" + item.source}></i>
                        </a>
                      ))}
                        </div>
                    }
                  </div>

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Done</button>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
)

CommitteeModal.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      bio: PropTypes.string,
      role: PropTypes.string,
    })
  ),
}

export default CommitteeModal
