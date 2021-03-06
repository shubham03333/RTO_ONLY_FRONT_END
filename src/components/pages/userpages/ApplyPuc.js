import React from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
import FooterD from "../../FooterD";

const ApplyPuc = () => {
  const { id } = sessionStorage;
  const [registration_no, setRegistration_no] = useState("");
  const [registration_id, setRegistration_id] = useState("");
  const [from_date, setFrom_date] = useState();
  const [to_date, setTo_date] = useState("");
  const [co2, setCo2] = useState("");
  const [hc, setHc] = useState("");
  const [aadhar_no, setAadhar_no] = useState("");
  const [user_id, setUser_id] = useState(id);
  const navigate = useNavigate();

  // ############################

  const accessToken = localStorage.getItem("token");

  const authAxios = axios.create({
    baseURL: URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });
  const applyPuc = () => {
    // navigate("/");

    if (registration_no.length == 0) {
      toast.warning("Please Enter the Vehicle registration No");
    } else if (aadhar_no.length != 12) {
      toast.warning("Please Enter valid aadhar No");
    } else {
      const body = {
        registration_no,
        registration_id,
        from_date,
        to_date,
        co2,
        hc,
        aadhar_no,
        user_id,
      };

      const url = `${URL}/puc/add_puc`;

      authAxios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        // console.log(result);
        if (result["status"] == "success") {
          toast.success("Proceed for payment");
          // const { id } = result["data"];

          sessionStorage["regid"] = registration_id;
          // navigate to the home page
          navigate("/payment");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>Puc</h4>
                  <hr />
                  <label htmlFor="name">Registration No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter registration number"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setRegistration_no(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Registration id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-1-square"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="registration_id"
                      aria-label="registration_id"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setRegistration_id(e.target.value);
                      }}
                    />
                  </div>

                  <label htmlFor="name">From Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="from_date"
                      aria-label="from_date"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setFrom_date(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">To Date</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="to_date"
                      aria-label="to_date"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setTo_date(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />

                  <label htmlFor="name">co2</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-block-alt"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="co2"
                      aria-label="co2"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setCo2(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">hc</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-block-alt"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="hc"
                      aria-label="hc"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setHc(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Aadhar No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aadhar_no"
                      aria-label="Aadhar_no"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setAadhar_no(e.target.value);
                      }}
                    />
                  </div>
                  {/* ############################ */}

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={applyPuc}
                    >
                      Apply
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
export default ApplyPuc;
