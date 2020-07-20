import React from 'react'
import Cookies from 'js-cookie'
import $ from 'jquery';



const Cookie = class extends React.Component {
  setCookie = () => {
    Cookies.set('cookieConsent', "TRUE", { expires: 7 });
    $(".cookie-popover").addClass('animate__slideOutDown')
  }

  render() {

      return (
        <div className="cookie-popover shadow animate__animated animate__slideInUp">
          <div className="cookie-body">
            <div className="cookie-title"><i class="fas fa-cookie-bite"></i> Cookies & Privacy</div>
            <div className="cookie-text text-light">This website uses cookies to make sure you get the best experience on our website.</div>
          </div>
          <div className="cookie-footer">
            <a className="btn btn-link" href="/cookie-policy">More information</a>
          <button className="btn btn-primary" onClick={this.setCookie}>Accept</button>
          </div>
        </div>
      )
    }
}

export default Cookie
