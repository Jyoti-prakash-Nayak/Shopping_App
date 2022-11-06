import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";
import { useSelector } from "react-redux";

const Header = () => {
  let navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  const handleLogout = (evt) => {
    logout(() => {
      navigate("/signin");
    });
  };

  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    <i className="fas fa-home"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/shop">
                    <i className="fas fa-shopping-bag"></i>
                    Shop
                  </Link>
                </li>
                <li className="nav-item mr-2" style={{ position: "relative" }}>
                  <Link to="/cart" className="nav-link">
                    <i className="fas fa-shopping-cart"></i> Cart{" "}
                    <span
                      className="badge bg-danger"
                      style={{
                        position: "absolute",
                        top: "0px",
                      }}
                    >
                      {cart.length}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/signup">
                    <i className="fas fa-edit"></i> SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    <i className="fas fa-sign-in-alt"></i> Signin
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === 0 && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/user/dashboard"
                  >
                    <i className="fas fa-user-cog"></i>Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">
                    <i className="fas fa-shopping-bag"></i> Shop
                  </Link>
                </li>
                <li className="nav-item mr-2" style={{ position: "relative" }}>
                  <Link to="/cart" className="nav-link">
                    <i className="fas fa-shopping-cart"></i> Cart{" "}
                    <span
                      className="badge bg-danger"
                      style={{
                        position: "absolute",
                        top: "0px",
                      }}
                    >
                      {cart.length}
                    </span>
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === 1 && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/admin/dashboard"
                  >
                    <i className="fas fa-user-cog"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <button
                    className="btn btn-link text-secondary text-decoration-none pl-0"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );

  return <header>{showNavigation()};</header>;
};

export default Header;
