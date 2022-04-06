import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/lidence services1.png";
import PermitService from "../../../Services/PermitService";
import RcService from "../../../Services/RcService";
import FooterD from "../../FooterD";

import { toast } from "react-toastify";
function PermitStatus() {
  const { id, name } = sessionStorage;
  const [permit, setPermit] = useState([]);
  const [rcId, setRcid] = useState();
  // const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");
  const [rc, setRc] = useState([]);
  const [rcNo, setRcNo] = useState("");

  // console.log(id);
  // console.log(name);
  const navigate = useNavigate();
  // useEffect(() => {
  //   // console.log({ id });
  //   PermitService.getPermitByUserId(id)
  //     .then((response) => {
  //       // console.log(response.data);
  //       console.log(response.data.user);
  //       // setUser(response.data.user);
  //       setPermit(response.data);
  //       console.log(permit);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [permit]);

  const renderStatus = () => {
    // console.log("renderColled");
    // console.log(permit.status);
    setStatus(permit.status);
    PermitService.getPermitStatusByRcNo(rcNo)
      .then((response) => {
        const result = response.data;
        setRc(response.data);
        setStatus(response.data.status);
        // console.log(response.data);
        // setUser(response.data.user);
        // console.log(rc);
      })
      .catch((err) => {
        toast.error(err);
        // console.log(err);
      });
    console.log(rc.status);

    if (status === "Approved") {
      sessionStorage["regNO"] = rcNo;
      toast.success("Congratulations Your Vehicle Transfer  is Approved");
      setRcNo(
        <button
          type="button"
          className="btn btn-success"
          style={{ borderRadius: "10px" }}
          onClick={() => navigate("/permitdownload")}
        >
          Download
        </button>

        // <a href="/dldownload">show licence</a>
      );
    } else if (status === "Pending") {
      toast.warning(
        "Your vehicle transfer status is pending or you have not applied yet"
      );
      // toast.error(err);
    }
  };
  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Check Permit Status </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  alt="services"
                  onClick={() => navigate("/applyPermit")}
                />
                <div className="card-body">
                  <h6>Apply for Permit</h6>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-2">
              <label htmlFor="name">Registration Number</label>
              <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="zmdi zmdi-assignment-account"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Registration number"
                  aria-label="User_Id"
                  aria-describedby="addon-wrapping"
                  onChange={(e) => {
                    setRcNo(e.target.value);
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
                  src={Service4}
                  alt="services"
                  // onClick={() => viewDL(llId)}
                  onClick={renderStatus}
                />
                <div className="card-body">
                  <h6>View Permit status</h6>
                  <p style={{ fontSize: "30px", color: "green" }}>{status}</p>
                  {rcNo}

                  {/* <Link to="/applyDL" className="btn btn-info shadow">
                    More
                  </Link> */}
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
export default PermitStatus;
