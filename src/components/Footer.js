import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  let footerStyle = {
    position: "relative",
    // top: "55vh",
    top: "100%",
    width: "100%",
    backgroundColor: "black",
  };

  return (
    <div className="yellow" style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col" style={{ color: "white", paddingTop: "18px" }}>
            <h5>
              <u>About Us</u>
            </h5>
            <ul className="list-unstyled">
              <a href="/about#departments">
                <li>Department</li>
              </a>
              <a href="/about#functions">
                {" "}
                <li>Functions</li>
              </a>

              <a href="/about#power">
                {" "}
                <li>Power and Duties</li>
              </a>
            </ul>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", paddingTop: "18px" }}
          >
            <h5>
              <u>Services</u>
            </h5>
            <ul className="list-unstyled">
              <li>Driving Licence</li>
              <li>Vehicle Registration</li>
              <li>Permit and much more</li>
              {/* <li>Payment</li> */}
            </ul>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", paddingTop: "18px" }}
          >
            <h5>
              <u>Policy</u>
            </h5>
            <ul className="list-unstyled">
              <a href="/about#acts">
                {" "}
                <li>Acts and Rules</li>
              </a>
              <Link to="/">
                <li>Notification and Circulars</li>
              </Link>
            </ul>
          </div>
          <div
            className="col-md-3"
            style={{ color: "white", paddingTop: "18px" }}
          >
            <h5>
              <u>Citizen Corner</u>
            </h5>
            <ul className="list-unstyled">
              <Link to="/login">
                <li>LL status</li>
              </Link>
              <Link to="/login">
                <li>DL status</li>
              </Link>
              <Link to="/login">
                <li>Vehicle Transfer Status</li>
              </Link>
              {/* <Link to="/login">
                <li>Permit Status</li>
              </Link> */}
            </ul>
          </div>
          <div className="col-md-3" style={{ paddingBottom: "1px" }}></div>
          <div
            style={{
              borderTop: "1px solid #fff ",
              // marginLeft: '20px',
              // marginRight: '20px',
              justifyContent: "center",
            }}
          ></div>
          <p
            className="col-md-9+"
            style={{ paddingTop: "15px", color: "white" }}
          >
            Copyright
            {/* &copy;2021&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Terms and
            Conditions&emsp; | &emsp;Privacy Policy&emsp; |&emsp; Help&emsp; |
            &emsp;Guidelines &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; */}
            &copy; {fullYear}-{fullYear + 1} &emsp;&emsp;&emsp;&emsp;Contact at:
            &emsp;<Link to="#"> rto.management.info@gmail.com </Link>{" "}
            &emsp;&emsp; | &emsp;&emsp;&emsp;{" "}
            <a href="/privacypolicy#privacyt">Privacy Policy</a>
            &emsp;|&emsp; &emsp;&emsp;&emsp;<Link to="/complaint">Help</Link>
            &emsp;| &emsp;&emsp;&emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
              <Link to="#" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Link>
              &emsp;
              <a
                href="https://shubhamsjadhav.blogspot.com/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              &emsp;
              <Link to="#" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              &emsp;
              <Link to="#" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
