import React from "react";

function Header({ user, setUser }) {
  return (
    <header>
      <nav>
        <a href="#">
          <img src="/images/CodeSquad-Comics-logo.png" />
        </a>
        <i className="fa fa-bars"></i>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
