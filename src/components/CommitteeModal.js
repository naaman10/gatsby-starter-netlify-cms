import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const CommitteeModal = ({ committeeModalData }) => (
  <div>
    {committeeModalData.members.map(item => (
      <div className="modal fade" id={`modal-${item.id}`} tabIndex="-1" role="dialog" aria-labelledby={`modal-${item.id}`} aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-md-4">
                    <img src={item.image.childImageSharp.fluid.src} className="img-fluid" alt={item.name} />
                  </div>
                  <div className="col-md-8 p-3">
                    <h3 className="modal-title" id="staticBackdropLabel">{item.name}</h3>
                    <ReactMarkdown
                      source={item.bio}
                      escapeHtml={false}
                    />
                  </div>
                </div>
              </div>
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
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      bio: PropTypes.string,
      role: PropTypes.string,
    })
  ),
}

export default CommitteeModal
