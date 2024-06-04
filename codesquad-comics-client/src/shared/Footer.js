import React from 'react';


const Footer = () => {
    return (
<footer>

<div className="column">
          <h2>VISIT US</h2>
          <p>CODESQUAD COMICS</p>
          <p>123 Dorchester Avenue</p>
          <p>Boston, MA 02124</p>
        </div>

        <div className="column">
          <h2>LINKS</h2>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Login</a></p>
        </div>

        <div className="column">
          <h2>FOLLOW US</h2>
          <div className="follow">
          <p><a href="#"><i className="fa-brands fa-facebook"></i></a></p>
          <p><a href="https://instagram.com/adevgirl"><i className="fa-brands fa-instagram"></i></a></p>
          <p><a href="https://twitter.com/justadevgirl"><i className="fa-brands fa-twitter"></i></a></p>
        </div>
        </div>

        <div className="column">
          <h2>A PRODUCT OF</h2>
          <p>
            <a href="http://codesquad.org" target="_blank"><img src="/images/CodeSquad-logo.png"/></a>
          </p>
        </div>


</footer>
    )
  }

  export default Footer;