import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import VehicleTransferService from "../../../Services/VehicleTransferService";
import FooterD from "../../FooterD";
const ViewVehicleTransfer = (props) => {
  const { id } = useParams();
  const [vtransfer, setVtransfer] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    VehicleTransferService.getVtransferById(id)
      .then((response) => {
        // console.log(response.data);
        setVtransfer(response.data);
        // const result = response.data;
        // setVtransfer(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h4>Vehicle Transfer Details</h4>
                  <hr />
                  <label htmlFor="name">Registration No</label>
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
                      value={vtransfer.registration_no}
                    />
                  </div>

                  <label htmlFor="name">New Owner</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="new owner"
                      aria-label="new owner"
                      aria-describedby="addon-wrapping"
                      value={vtransfer.new_owner}
                    />
                  </div>
                  <label htmlFor="name">Aadhar</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-calendar-check"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DOB"
                      aria-label="dob"
                      aria-describedby="addon-wrapping"
                      value={vtransfer.new_owner_aadhar}
                    />
                  </div>
                  <label htmlFor="name">Email</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="address1"
                      aria-label="address1"
                      aria-describedby="addon-wrapping"
                      value={vtransfer.new_owner_email}
                    />
                  </div>

                  {/* ############################ */}
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Mobile</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-car"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                      aria-label="email"
                      aria-describedby="addon-wrapping"
                      value={vtransfer.new_owner_mobile}
                    />
                  </div>
                  <label htmlFor="name">Registration Id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="mobile_no number"
                      aria-label="mobile_no-number"
                      aria-describedby="addon-wrapping"
                      value={vtransfer.registration_id}
                    />
                  </div>

                  {/* <label htmlFor="name">Payment Id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-1-square"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pending"
                      aria-label="text"
                      aria-describedby="addon-wrapping"
                      value={vtransfer.payment_id}
                    />
                  </div> */}

                  {/* <label htmlFor="name">Transaction id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-1-square"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pending"
                      aria-label="text"
                      aria-describedby="addon-wrapping"
                      value={vtransfer.payment.id}
                    />
                  </div> */}

                  {/* <label htmlFor="name">Fuel Type</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-fire"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="text"
                      aria-describedby="addon-wrapping"
                      // value={vtransfer.vehicleRegistration1.fuel_type}
                    />
                  </div>
                  <label htmlFor="name">Insurance Status</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-bookmark"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="blood group"
                      aria-label="blood-group"
                      // aria-describedby="addon-wrapping"
                      autoComplete="off"
                      value={vtransfer.insurance_status}
                    />
                  </div>

                  <label htmlFor="name">PUC status</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="text"
                      aria-label="text"
                      autoComplete="new-text"
                      value={vtransfer.puc_status}
                    />
                  </div> */}
                  {/* <label htmlFor="name">Hypothecated to</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nill"
                      aria-label="text"
                      autoComplete="new-text"
                      value={vtransfer.hypothecated_to}
                    />
                  </div>
                  <label htmlFor="name">Wheels</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="text"
                      aria-label="text"
                      autoComplete="new-text"
                      value={vtransfer.wheels}
                    />
                  </div>
                  <label htmlFor="name">Payment id</label>
                  <div className="input-group flex-nowrap ">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-lock"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="text"
                      aria-label="text"
                      autoComplete="new-text"
                      value={vtransfer.payment_id}
                    />
                  </div> */}
                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={() => navigate("/vtransferTable")}
                    >
                      Back
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

export default ViewVehicleTransfer;
