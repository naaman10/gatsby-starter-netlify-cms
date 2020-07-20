import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" href="#"><h1 className="logoMPDSS"><span className="m">M</span><span className="p">P</span><span className="d">D</span><span className="s">S</span><span className="s2">S</span></h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dental-students">
                Dental Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/primary-schools">
                Primary Schools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/parents-and-caregivers">
                Parents & Caregivers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/examples">
              </Link>
            </li>
          </ul>
          <div className="social my-2 my-lg-0">
            <a title="facebook" href="https://facebook.com" target="_blank"><i className="fab fa-facebook-square"></i></a>
            <a title="twitter" href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
            <a title="instagram" href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
