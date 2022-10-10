
import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div>
     <header>
  <nav className="navbar navbar-expand-lg navigation-wrap">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img className="logo-img" src="img/logo.png" />
        <span id="hustler">Hustlers</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-stream navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ft">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Events">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Games">
              Games
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Playgames">
              Play Games
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<section id="home">
  <div className="container-fluid px-0 top-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <h1>GAMING HUSTLERS</h1>
          <p>
            <i style={{ color: "white" }}>
              The next generation of gaming is here.
            </i>
          </p>
          <div className="mt-4 ms-3">
            <a href="/Playgames">
              <button className="main-btn">Play Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   
    </div>
    
  );
}
