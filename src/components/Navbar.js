import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/RTOLOGO.png";
import bg from "../assets/1.png";
function Navbar() {
  const { id, name } = sessionStorage;
  const navigate = useNavigate();
  console.log(id);
  console.log(name);

  const logoutUser = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("regid");
    sessionStorage.removeItem("dlid");
    sessionStorage.removeItem("llid");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("loginStatus");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        {/* <nav
        className="navbar navbar-expand-lg navbar navbar-dark bg-dark"
        style={{ backgroundImage: `url(${bg})` }}
      > */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src={logo}
              style={{ width: "80px", height: "55px", borderRadius: "20%" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {id == undefined && (
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ marginLeft: "0px" }}
              >
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/complaint">
                    Complaint
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/signup">
                    Sign up
                  </Link>
                </li>
              </ul>
            )}
            {/* <button
              type="button"
              className="btn btn-outline-secondary shadow-w-100"
              // className="btn btn-bg-primary shadow-w-100"
              // style={{ marginLeft: "100px" }}
              style={{ marginRight: "-200px" }}
              onClick={() => navigate("/login")}
            >
              back
            </button> */}
            {/* UserTable */}
            {/* <nav class="navbar navbar-light bg-light"> */}

            {id > 0 && (
              <div className="col-md-3">
                <div class="container-fluid">
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* </nav> */}
            <div className="d-flex">
              {id == undefined && (
                <button
                  type="button"
                  className="btn btn-outline-secondary shadow-w-100"
                  style={{ marginLeft: "300px" }}
                  // className="btn btn-bg-primary shadow-w-100"
                  onClick={() => navigate("/login")}
                >
                  User Login
                </button>
              )}
              {id > 0 && (
                <button
                  type="button"
                  className="btn btn-outline-secondary shadow-w-100"
                  // className="btn btn-bg-primary shadow-w-100"
                  onClick={logoutUser}
                  // style={{ marginLeft: "1200px" }}
                  // style={{ marginLeft: "760%" }}
                  style={{ marginLeft: "55%" }}
                >
                  Logout
                </button>
              )}
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginRight: "10px" }}
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="adminLogin">
                    Admin login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">
                    User registration
                  </Link>
                </li>
                {id > 0 && (
                  <li onClick={logoutUser}>
                    <a className="dropdown-item">Logout</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
