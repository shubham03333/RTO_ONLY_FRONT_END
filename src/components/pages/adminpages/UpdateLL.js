import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import LLService from "../../../Services/LLService";
import { getCurrentDate } from "../../../Services/Date";
import FooterD from "../../FooterD";
const UpdateLL = (props) => {
  const { id } = useParams();
  const [ll, setLL] = useState([]);

  const [tempLLNo, setTempLLNo] = useState("");
  const [issue_date, setIssue_date] = useState(new Date());
  const [expiry_date, setExpiry_date] = useState(new Date());
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  var d = new Date();
  var td = new Date();

  const separator = "-";

  d.setMonth(d.getMonth() + 6);
  console.log(d.toLocaleDateString());
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  //############
  // console.log(td.toLocaleDateString());
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

  // var myDate = new Date(todDate);

  // var str = todDate;
  // var strToDate = new Date(str);

  // console.log("date converted " + strToDate);
  useEffect(() => {
    LLService.getLLById(id)
      .then((response) => {
        // console.log(response.data);

        // console.log(getCurrentDate());
        let ll = response.data;
        setTempLLNo(ll.tempLLNo);
        setIssue_date(ll.issue_date);
        setExpiry_date(ll.expiry_date);
        setStatus(ll.status);
        // setRegistration_no(puc.registration_no);
        // setRegistration_id(puc.registration_id);
        // setVehicle_class(vtransfer.vehicle_class);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updateLL = (e) => {
    e.preventDefault();
    let ll = {
      tempLLNo: tempLLNo,
      issue_date: issue_date,
      expiry_date: expiry_date,
      status: status,
      // registration_id: registration_id,
      // registration_no: registration_no,
      // vehicle_class: vehicle_class,
    };
    console.log("ll => " + JSON.stringify(ll));
    console.log("id => " + JSON.stringify(id));
    LLService.updateLL(ll, id).then((res) => {
      navigate("/llTable");
    });
  };

  const changetempLLNoHandler = (event) => {
    setIssue_date(todDate);
    // setIssue_date(new Date(todDate));
    setExpiry_date(todaysDate);
    setTempLLNo(event.target.value);
  };
  // const changeIssue_dateHandler = (event) => {
  //   // setIssue_date(event.target.value);
  //   setIssue_date(todDate);
  // };
  // const changeExpiry_dateHandler = (event) => {
  //   // setExpiry_date(event.target.value);
  //   setExpiry_date(todaysDate);
  // };
  const changeStatusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>LL Details</h4>
                  <hr />
                  <label htmlFor="name">LL No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="LL_no"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={tempLLNo}
                      onChange={changetempLLNoHandler}
                    />
                  </div>
                  <label htmlFor="name">Issue Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
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
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />

                  <label htmlFor="name">Status</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="flexRadioDefault1"
                      value="Pending"
                      // defaultChecked
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault1"
                    >
                      Pending
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      value="Approved"
                      id="flexRadioDefault2"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    />
                    <label
                      className="form-check-label radiog"
                      htmlFor="flexRadioDefault2"
                    >
                      Approve
                    </label>
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
                      onClick={() => navigate("/llTable")}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ borderRadius: "10px" }}
                      onClick={updateLL}
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

export default UpdateLL;
