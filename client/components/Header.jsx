import React from 'react';

const Header = () => {
  return(
    <div id="header">
      <nav className="navbar navbar-light bg-white">
        <a className="navbar-brand brand-name" href="#">
          <img src="/images/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          Travel Trace
        </a>

        <button className="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-md-none" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary btn-sm">Trace <i className="fa fa-camera" aria-hidden="true" />
              </button>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">User</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">View Profile</a>
                <a className="dropdown-item" href="#">Signout</a>
                <div className="dropdown-divider" />
              </div>
            </li>
          </ul>
        </div>
        <button type="button" className="hide-sm btn btn-primary btn-lg">Trace <i className="fa fa-camera" aria-hidden="true" />
        </button>
        <ul className="hide-sm nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">User</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">View Profile</a>
              <a className="dropdown-item" href="#">Signout</a>
              <div className="dropdown-divider" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;