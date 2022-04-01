import React, { useState, useEffect } from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
import Payment from "../inc/../userpages/Payment";
import VehicleTransferService from "../../../Services/VehicleTransferService";

const OwnershipTransfer = () => {
  const [registration_no, setRegistration_no] = useState("");
  const [transfer_no, setTransfer_no] = useState();
  const [new_owner, setNew_owner] = useState("");
  const [new_owner_aadhar, setNew_owner_aadhar] = useState("");
  const [new_owner_email, setNew_owner_email] = useState("");
  const [new_owner_mobile, setNew_owner_mobile] = useState("");
  const [payment_no, setPayment_no] = useState();
  const [registration_id, setRegistration_id] = useState("");
  const [tid, setTid] = useState("");
  const [user_id, setUser_id] = useState("");
  const [vtransfer, setVtransfer] = useState([]);
  const [payment, setPayment] = useState([]);

  const navigate = useNavigate();
  console.log("tid");
  console.log("regId");
  console.log(registration_id);
  // const viewVtransfer = (tid) => {
  //   navigate(`/view-vtransfer/${tid}`);
  // };
  // ############################

  // useEffect(() => {
  //   // console.log({ id });
  //   VehicleTransferService.getVtransferStatusByReg_id(registration_id)
  //     .then((response) => {
  //       console.log(response.data);
  //       // setVtransfer(response.data);
  //       // const result = response.data;
  //       // setvtransfer(result["data"]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const transferVehicle = () => {
    // navigate("/");
    if (registration_no.length == 0) {
      toast.warning("Please Enter the Vehicle registration No");
    } else if (new_owner_aadhar.length != 12) {
      toast.warning("Please enter Valid Aadhar Number");
    } else {
      const body = {
        user_id,
        registration_no,
        transfer_no,
        new_owner,
        new_owner_aadhar,
        new_owner_email,
        new_owner_mobile,
        payment_no,
        registration_id,
        // payment,
      };

      // setTid(body.id);
      const url = `${URL}/vehicle_transfer/add_vehicleTransfer`;

      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        setTid(response.data.id);

        console.log(result);
        console.log("resu");

        if (result["status"] == "success") {
          toast.success("Ownership Transfer requested");

          // navigate to the home page
          navigate(`/payment/${registration_id}`);
          // navigate("/payment");
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
                  <h4>Vehicle Transfer</h4>
                  <hr />
                  <label htmlFor="name">User id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-1-square"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="user id"
                      aria-label="transfer_no"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setUser_id(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">Registration No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-2-square"></i>
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

                  <label htmlFor="name">New Owner</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-account-circle"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="new_owner"
                      aria-label="new_owner"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">New Owner Aadhar</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-account-box-mail"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="new_owner_aadhar"
                      aria-label="new_owner_aadhar"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner_aadhar(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">Registration id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-n-3-square"></i>
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
                  <label htmlFor="name">New Owner Email</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-email"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="new_owner_email"
                      aria-label="new_owner_email"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner_email(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="name">New Owner mobile</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="new_owner_mobile"
                      aria-label="new_owner_mobile"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setNew_owner_mobile(e.target.value);
                      }}
                    />
                  </div>
                  {/* <label htmlFor="name">Payment No</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-smartphone"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="payment_no"
                      aria-label="payment_no"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => {
                        setPayment_no(e.target.value);
                      }}
                    />
                  </div> */}
                  {/* ############################ */}

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={transferVehicle}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Payment /> */}
    </div>
  );
};
export default OwnershipTransfer;
