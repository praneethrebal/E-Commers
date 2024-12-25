import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === `/`;

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand">Welcome To My Store</span>

            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#Navbarnav"
              aria-controls="Navbarnav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Navbarnav"
              aria-controls="Navbarnav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="Navbarnav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={`/`} className="nav-link">
                    Home
                  </Link>
                </li>
                {isHomePage && (
                  <li className="nav-item">
                    <Link to={`/addproduct`} className="nav-link">
                      Add Product
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
