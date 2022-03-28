import React, { useEffect, useState } from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
import UserService from "../../../Services/UserService";
const ApplyDL = () => {
  const { id, name } = sessionStorage;
  const [user_id, setUser_id] = useState();
  const [rto, setRto] = useState("");
  const [l_category, setL_category] = useState("");
  const [tempLLNo, setTempLLNo] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [aadhar_no, setaadhar_no] = useState();

  // ############################

  useEffect(() => {
    // console.log({ id });
    UserService.getUserById(id)
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.user);
        setUser(response.data);
        setaadhar_no(response.data.aadhar_no);
        console.log(aadhar_no);

        // setLlId(ll.id);
        // console.log(llId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const applyDL = () => {
    // navigate("/");

    if (aadhar_no === null) {
      toast.warning("You need to Register first to use this service");
    } else {
      if (user_id.length == 0) {
        toast.warning("Please Enter the User id");
      }
      if (tempLLNo.length == 0) {
        toast.warning(
          "Please Enter the temp LL no you will get it from LL status"
        );
      } else {
        const body = {
          user_id,
          rto,
          l_category,
          tempLLNo,
        };

        const url = `${URL}/dl/add_dl`;

        axios.post(url, body).then((response) => {
          // get the data from the response
          const result = response.data;
          console.log(result);
          if (result["status"] == "success") {
            toast.success("Proceed for payment");
            console.log(response.data);
            // navigate to the home page
            navigate("/payment");
          } else {
            toast.error(result["error"]);
          }
        });
      }
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
                  <h4>Driving Licence</h4>
                  <hr />
                  <label htmlFor="name">User Id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="User_Id"
                      aria-label="User_Id"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setUser_id(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">RTO</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="rto"
                      aria-label="rto"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setRto(e.target.value);
                      }}
                    />
                  </div>

                  {/* <label htmlFor="name">To Date</label>
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
                  </div> */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Learning Licence Number</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Temp LL no."
                      aria-label="rto"
                      aria-describedby="addon-wrapping"
                      required="true"
                      onChange={(e) => {
                        setTempLLNo(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">licence category</label>
                  {/* <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="l_category"
                      aria-label="l_category"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setL_category(e.target.value);
                      }}
                    />
                  </div> */}
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    // selected
                    onChange={(e) => {
                      setL_category(e.target.value);
                    }}
                  >
                    <option>Select Licence Category</option>
                    <option value="LMV">Light Motor vehicle</option>
                    <option value="HMV">Heavy Motor Vehicles</option>
                    <option value="MCWG ">Motor Cycle With Gear</option>
                    <option value="MCWOG">Motor Cycle Without Gear</option>
                    <option value="MGV"> Medium goods vehicle</option>
                    <option value="HGMV">Heavy Goods Motor Vehicle</option>
                  </select>
                  {/* <label htmlFor="name">co2</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
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
                      <i className="zmdi zmdi-smartphone"></i>
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
                      <i className="zmdi zmdi-smartphone"></i>
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
                  </div> */}
                  {/* ############################ */}

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={applyDL}
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
    </div>
  );
};
export default ApplyDL;
