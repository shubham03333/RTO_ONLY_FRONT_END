import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/RTOLOGO.png";
import bg from "../assets/1.png";
import UserService from "../Services/UserService";
import "./Navbar.css";
import notification from "../assets/exam/notificationicon.png";

function Navbar() {
  const { id, name } = sessionStorage;
  const navigate = useNavigate();
  console.log(id);
  console.log(name);
  const canvas = useRef(null);

  // const [image, setImage] = useState(null);
  const [Idphoto, setIdphoto] = useState(null);
  const [photoId, setPhotoid] = useState("");
  const [user, setUser] = useState([]);

  const viewUser = (id) => {
    navigate(`/view-userProfile/${id}`);
  };

  useEffect(() => {
    console.log({ id });
    UserService.getUserById(id)
      .then((response) => {
        setUser(response.data);
        console.log(user);
        setPhotoid(response.data.photo_id);
        console.log("photoId " + response.data.photo_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [photoId]);

  useEffect(() => {
    // const catImage = new Image();
    const IdImage = new Image();
    // catImage.src = dlImage;
    // IdImage.src = UserService.getPhotoById(photoId);
    IdImage.src = `http://localhost:8080/downloadFile/${photoId}`;
    // catImage.onload = () => setImage(catImage);
    IdImage.onload = () => setIdphoto(IdImage);
    // console.log(IdImage);
  }, [photoId]);

  useEffect(() => {
    if (Idphoto && canvas) {
      const ctx = canvas.current.getContext("2d");
      // ctx.fillStyle = "white";
      // ctx.drawImage(image, 100, 0, 400, 300);
      // ctx.drawImage(Idphoto, 110, -90, 100, 200);
      ctx.drawImage(Idphoto, 118, -35, 100, 165);

      // ctx.font = "15px Comic Sans MS";
    }
  }, [Idphoto, canvas]);

  const logoutUser = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("regid");
    sessionStorage.removeItem("dlid");
    sessionStorage.removeItem("llid");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("loginStatus");
    localStorage.removeItem("token");
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
            {/* 
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
            )} */}

            {/* </nav> */}
            <div className="d-flex">
              {id == undefined && (
                <button
                  type="button"
                  className="btn btn-outline-secondary shadow-w-100"
                  style={{ marginLeft: "" }}
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
              {id > 0 && (
                <div className="profileImage">
                  <span
                    type="button"
                    style={{
                      marginLeft: "5%",
                      height: "60px",
                      // width: "50PX",
                      zIndex: "2",
                      color: "white",
                      borderRadius: "100%",
                    }}
                  >
                    <div
                      id={"invoice"}
                      style={{ borderRadius: "50%", cursor: "pointer" }}
                    >
                      <canvas
                        ref={canvas}
                        width={"230px"}
                        height={"50px"}
                        style={{
                          marginTop: "1px",
                          marginLeft: "350%",
                          paddingTop: "-20px",
                        }}
                        onClick={() => viewUser(id)}
                      />
                    </div>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
