import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import RcService from "../../../Services/RcService";
import FooterD from "../../FooterD";
const UpdateRc = (props) => {
  const { id } = useParams();
  const [rc, setRc] = useState([]);

  const [owner, setOwner] = useState("");
  const [registration_no, setRegistration_no] = useState("");
  const [payment_id, setPayment_id] = useState("");
  const [insurance_status, setInsurance_status] = useState("");
  const [puc_status, setPuc_status] = useState("");
  const [vehicle_class, setVehicle_class] = useState();
  const [user_id, setUser_id] = useState("");
  const [issue_date, setIssue_date] = useState("");
  const [expiry_date, setExpiry_date] = useState("");

  const navigate = useNavigate();

  var d = new Date();
  var td = new Date();

  const separator = "-";

  d.setMonth(d.getMonth() + 180);
  console.log(d.toLocaleDateString());
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  //############
  let tdate = td.getDate();
  let tmonth = td.getMonth() + 1;
  let tyear = td.getFullYear();

  let todDate = `${tyear}${separator}${
    tmonth < 10 ? `0${tmonth}` : `${tmonth}`
  }${separator}${tdate < 10 ? `0${tdate}` : `${tdate}`}`;
  console.log("today is " + todDate);

  console.log("today is " + todDate);

  let todaysDate = `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;

  useEffect(() => {
    RcService.getRcById(id)
      .then((response) => {
        console.log(response.data);
        // setRc(response.data);
        let rc = response.data;
        setOwner(rc.owner);
        setRegistration_no(rc.registration_no);
        setPayment_id(rc.payment_id);
        setInsurance_status(rc.insurance_status);
        setPuc_status(rc.puc_status);
        setVehicle_class(rc.vehicle_class);
        setUser_id(rc.user_id);
        // setIssue_date(rc.purchase_date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const UpdateRcm = (e) => {
    e.preventDefault();
    let rc = {
      owner: owner,
      registration_no: registration_no,
      payment_id: payment_id,
      insurance_status: insurance_status,
      puc_status: puc_status,
      vehicle_class: vehicle_class,
      user_id: user_id,
      purchase_date: issue_date,
      validTill: expiry_date,
    };
    console.log("rc => " + JSON.stringify(rc));
    console.log("id => " + JSON.stringify(id));
    RcService.updateRc(rc, id).then((res) => {
      navigate("/rcTable");
    });
  };

  const changeregistrationIdHandler = (event) => {
    setRegistration_no(event.target.value);
    setIssue_date(todDate);
    setExpiry_date(todaysDate);
  };

  const changePuc_statusHandler = (event) => {
    setPuc_status(event.target.value);
  };
  const changeInsurance_statusHandler = (event) => {
    setInsurance_status(event.target.value);
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>Rc Details</h4>
                  <hr />
                  <label htmlFor="name">Owner</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name middle-name last-name"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={owner}
                      readOnly
                    />
                  </div>

                  <label htmlFor="name">registration_no</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={registration_no}
                      onChange={changeregistrationIdHandler}
                    />
                  </div>
                  <label htmlFor="name">Puc status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={puc_status}
                      onChange={changePuc_statusHandler}
                    />
                  </div>
                  <label htmlFor="name">Insurance status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={insurance_status}
                      onChange={changeInsurance_statusHandler}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">User id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-bookmark"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      // aria-describedby="addon-wrapping"
                      autoComplete="off"
                      readOnly
                      value={user_id}
                    />
                  </div>{" "}
                  <label htmlFor="name">Vehicle class</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={vehicle_class}
                      readOnly
                    />
                  </div>
                  <label htmlFor="name">Issue Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={issue_date}
                      // onChange={changeIssue_dateHandler}
                    />
                  </div>
                  <label htmlFor="name">Expiry Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      aria-describedby="addon-wrapping"
                      value={expiry_date}
                      // onChange={changeExpiry_dateHandler}
                    />
                  </div>
                  <div
                    className="btn-group mt-3"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger "
                      style={{ marginRight: "20%", borderRadius: "10px" }}
                      onClick={() => navigate("/rcTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={UpdateRcm}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterD />
    </div>
  );
};

export default UpdateRc;
