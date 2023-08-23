import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <div></div>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <div style={{display:"flex", justifyContent:"center"}}>
        <Link to="/" className="brand-logo">
          Two Do
        </Link>
        </div>
        <ul className="right">
          <li>
            <Link to="/admins">Tasks</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);
