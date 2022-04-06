import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ErrorPage.css";
function ErrorPage() {
  const { id, name } = sessionStorage;
  const navigate = useNavigate();
  const reload = () => {
    if (id) {
      window.location.reload(false);
    }
    navigate("/");
  };

  return (
    <div className="ebody">
      <div className="row justify-content-center">
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="center">
          <div className="outer circle mt-4">
            <span></span>
            <span></span>
            <Link to="/">
              {" "}
              <button onClick={reload}>GO Back</button>
            </Link>
          </div>
          <h1 style={{ color: "whitesmoke" }}>404</h1>
          &emsp;
          <h2 style={{ color: "whitesmoke" }}> Page Not found</h2>
          <h2></h2>
        </div>

        <div className="bodyWave">
          <div className="wave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
