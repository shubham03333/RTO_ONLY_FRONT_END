import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/lidence services1.png";
import RcService from "../../../Services/RcService";
import { toast } from "react-toastify";
import FooterD from "../../FooterD";
function RcStatus() {
  const { id, name } = sessionStorage;
  const [rcId, setRcid] = useState();
  const [rc, setRc] = useState([]);
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");

  // console.log(id);
  // console.log(name);
  const navigate = useNavigate();
  // useEffect(() => {
  //   // console.log({ id });
  //   RcService.getRcByUserId1(id)
  //     .then((response) => {
  //       // console.log(response.data);
  //       console.log(response.data.user);
  //       setUser(response.data.user);
  //       setRc(response.data);
  //       setRcid(response.data.registration_id);
  //       // setStatus(response.data.status);
  //       console.log(rc);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const renderStatus = () => {
    RcService.getRcById(rcId)
      .then((response) => {
        setRc(response.data);
        setStatus(response.data.status);
        // console.log(response.data);
        // setUser(response.data.user);
        // console.log(rc);
      })
      .catch((err) => {
        console.log(err);
      });
    // setStatus(rc.status);

    if (status === "Approved") {
      sessionStorage["regid"] = rcId;
      toast.success("Congratulations Your Vehicle Registeration  is Approved");
      setRcid(
        <button
          type="button"
          className="btn btn-success"
          style={{ borderRadius: "10px" }}
          onClick={() => navigate("/rcdownload")}
        >
          Download
        </button>

        // <a href="/dldownload">show licence</a>
      );
    } else {
      // toast.warning("Your RC status is pending");
    }
  };

  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Check RC Status </h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  alt="services"
                  onClick={() => navigate("/vehicleRegistration")}
                />
                <div className="card-body">
                  <h6>Register vehicle</h6>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <label htmlFor="name">Registration Id</label>
              <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="zmdi zmdi-assignment-account"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Registration id"
                  aria-label="User_Id"
                  aria-describedby="addon-wrapping"
                  onChange={(e) => {
                    setRcid(e.target.value);
                  }}
                />
              </div>
              <div className="form-group py-3">
                <button
                  className="btn btn-primary shadow w-100"
                  onClick={renderStatus}
                >
                  Status
                </button>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  alt="services"
                  // onClick={() => viewDL(llId)}
                  onClick={renderStatus}
                />
                <div className="card-body">
                  <h6>Vehicle Registration status</h6>
                  <p style={{ fontSize: "30px", color: "green" }}>{status}</p>
                  {rcId}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterD />
    </div>
  );
}
export default RcStatus;
