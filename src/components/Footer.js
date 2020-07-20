import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="row">
              <div className="col-md-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/join-us">
                        Join Us
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-md-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-md-4 social">
                <a title="facebook" href="https://facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
                <a title="twitter" href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a title="instagram" href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}

export default Footer
