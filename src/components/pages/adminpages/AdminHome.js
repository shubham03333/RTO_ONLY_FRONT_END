import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/v-road-tax.png";
import DLService from "../../../Services/DLService";
import LLService from "../../../Services/LLService";
import RcService from "../../../Services/RcService";
import VehicleTransferService from "../../../Services/VehicleTransferService";
import PermitService from "../../../Services/PermitService";
import PucService from "../../../Services/PucService";
import UserService from "../../../Services/UserService";
import FooterD from "../../FooterD";
import "../Home.css";

function AdminHome() {
  const { id, name } = sessionStorage;
  const [DL, SetDL] = useState();
  const [LL, SetLL] = useState();
  const [VR, SetVR] = useState();
  const [pendingDLCount, SetPendingDLCount] = useState();
  const [pendingLLCount, SetPendingLLCount] = useState();
  const [pendingVRCount, SetPendingVRCount] = useState();
  const [pendingVTCount, SetPendingVTCount] = useState();
  const [pendingPermitCount, SetPendingPermitCount] = useState();
  const [pendingPucCount, SetPendingPucCount] = useState();
  //     const [pendingVTCount, SetPendingVTCount] = useState();
  const [UserCount, SetUserCount] = useState();
  const [VrCount, SetVrCount] = useState();
  const [DLCount, SetDLCount] = useState();
  const [PucCount, SetPucCount] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    DLService.getDLByUserId(id)
      .then((response) => {
        console.log(response.data);
        SetDL(response.data);
        SetPendingDLCount(response.data.pendingCount);
        SetDLCount(response.data.count);
        console.log(pendingDLCount);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pendingDLCount]);

  useEffect(() => {
    LLService.getLLByUserId(id)
      .then((response) => {
        console.log(response.data);
        SetDL(response.data);
        SetPendingLLCount(response.data.pendingCount);
        console.log(pendingDLCount);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pendingLLCount]);

  useEffect(() => {
    RcService.getRcByUserId(id)
      .then((response) => {
        console.log(response.data);
        SetDL(response.data);
        SetPendingVRCount(response.data.pendingCount);
        SetVrCount(response.data.count);
        console.log(pendingDLCount);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pendingVRCount]);

  useEffect(() => {
    VehicleTransferService.getVehicleTransferByUserId(id)
      .then((response) => {
        console.log(response.data);
        SetDL(response.data);
        SetPendingVTCount(response.data.pendingCount);
        console.log(pendingDLCount);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pendingVTCount]);

  useEffect(() => {
    PermitService.getPermitByUserId(id)
      .then((response) => {
        console.log(response.data);
        SetPendingPermitCount(response.data.pendingCount);
        console.log(pendingDLCount);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pendingPermitCount]);

  useEffect(() => {
    PucService.getPucByUserId(id)
      .then((response) => {
        console.log(response.data);
        SetPendingPucCount(response.data.pendingCount);
        SetPucCount(response.data.count);
        console.log("puc count");
        console.log(PucCount);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pendingPucCount]);

  useEffect(() => {
    UserService.getUserById(id)
      .then((response) => {
        console.log(response.data);

        SetUserCount(response.data.count);
        console.log("usercount");
        console.log(UserCount);
        // console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [UserCount]);

  // const pendingCount = () => {
  //   console.log("countcalled");
  //   if (pendingDLCount > 0) {
  //     console.log("countcalled Inside if");
  //     // <h4 style={{ fontSize: "20px", color: "red" }}>{pendingDLCount}</h4>;
  //     <button className="btn btn-danger">{pendingDLCount}</button>;
  //   }
  // };
  const startControlPanel = () => {
    window.location.reload(false);
  };

  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-2">
              <div
                className="card shadow sevice-card"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
                }}
              >
                <div
                  className="card-body"
                  style={{ cursor: "pointer" }}
                  onClick={startControlPanel}
                >
                  {id == undefined && <h6>Run</h6>}
                  {id != undefined && <h6>Total Users </h6>}
                  <h4
                    style={{
                      fontSize: "30px",
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    {UserCount}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div
                className="card shadow sevice-card"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #00c6fb 0%, #005bea 100%)",
                }}
              >
                <div className="card-body">
                  <h6>Total Registered vehicles</h6>
                  <h4
                    style={{
                      fontSize: "30px",
                      color: "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {VrCount}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div
                className="card shadow sevice-card"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #f83600 0%, #f9d423 100%)",
                }}
              >
                <div className="card-body">
                  <h6>Total Driving Licences</h6>
                  <h4
                    style={{
                      fontSize: "30px",
                      color: "#7023A1",
                      fontWeight: "bold",
                    }}
                  >
                    {DLCount}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div
                className="card shadow sevice-card"
                style={{
                  backgroundImage:
                    "linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)",
                }}
              >
                <div className="card-body">
                  <h6>Total PUC Issued</h6>
                  <h4
                    style={{
                      fontSize: "30px",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {PucCount}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              {/* <h3 className="main-heading">Admin Dashboard</h3> */}
              {/* <div className="underline mx-auto"></div> */}
            </div>

            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/dlTable")}
                />
                <div className="card-body">
                  <h6>Drivers License Control </h6>{" "}
                  <h4 style={{ fontSize: "20px", color: "red" }}>
                    {pendingDLCount}
                  </h4>
                  {/* {pendingCount()} */}
                  <Link to="/dlTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2 ">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/rcTable")}
                />
                <div className="card-body">
                  <h6>Vehicle Registration Control</h6>
                  <h4 style={{ fontSize: "20px", color: "red" }}>
                    {pendingVRCount}
                  </h4>
                  <Link to="/rcTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2 ">
              <div className="card shadow sevice-card">
                <img
                  src={Service3}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/vtransferTable")}
                />
                <div className="card-body">
                  <h6>Ownership Transfer Control</h6>
                  <h4 style={{ fontSize: "20px", color: "red" }}>
                    {pendingVTCount}
                  </h4>
                  <Link to="/vtransferTable" className="btn btn-info shadow ">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3  mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/permitTable")}
                />
                <div className="card-body">
                  <h6>Vehicle Permit Control</h6>
                  <h4 style={{ fontSize: "20px", color: "red" }}>
                    {pendingPermitCount}
                  </h4>
                  <Link to="/permitTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/LLTable")}
                />
                <div className="card-body">
                  <h6>Learning Licence Control</h6>
                  <h4 style={{ fontSize: "20px", color: "red" }}>
                    {pendingLLCount}
                  </h4>
                  <Link to="/LLTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service5}
                  alt="services"
                  onClick={() => navigate("/pucTable")}
                />
                <div className="card-body">
                  <h6>PUC Control</h6>
                  <h4 style={{ fontSize: "20px", color: "red" }}>
                    {pendingPucCount}
                  </h4>
                  <Link to="/pucTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3 mt-4"></div> */}
            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service6}
                  alt="services"
                  onClick={() => navigate("/paymentTable")}
                />
                <div className="card-body">
                  <h6>Payments</h6>
                  <h4></h4>
                  <Link to="/paymentTable" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/userTable")}
                />
                <div className="card-body">
                  <h6>Users Control</h6>
                  <h4></h4>
                  <Link to="/complainTable" className="btn btn-danger shadow">
                    Complaints
                  </Link>
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
export default AdminHome;
