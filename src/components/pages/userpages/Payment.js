import { useState, useEffect } from "react";
import "../inc/RegistrationForm.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import { toast } from "react-toastify";
import VehicleTransferService from "../../../Services/VehicleTransferService";

const Payment = () => {
  // const { chassis_no } = sessionStorage;
  const { id, regid, llid, dlid } = sessionStorage;
  const [user_id, setUser_id] = useState("");
  const [payment_for, setPayment_for] = useState("");
  const [payment_mode, setPayment_mode] = useState("");
  const [amount, setAmount] = useState("");
  const [payment_date, setPayment_date] = useState("");
  const [payment, setPayment] = useState([]);
  const [vtid, setVtid] = useState("");
  const [vehicleRegistration_id, setVehicleRegistration_id] = useState("");
  const [lcategory, setLcategory] = useState("");
  const [learningLicence_id, setLearningLicence_id] = useState("");
  const [drivingLicence_id, setDrivingLicence_id] = useState("");

  const { tid } = useParams();
  console.log("tid");
  console.log(tid);
  const [vtransfer, setVtransfer] = useState([]);

  console.log("session");
  console.log(regid);
  console.log("session");
  // useEffect(() => {
  //   VehicleTransferService.getVtransferStatusByReg_id(tid)
  //     .then((response) => {
  //       console.log(response.data);
  //       setVtransfer(response.data);
  //       setVtid(response.data.id);
  //       setPayment(response.data.payment);
  //       console.log(vtransfer);
  //       //  setTid(vtransfer.id);
  //       console.log(tid);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  //############### under test ################//
  var d = new Date();
  const separator = "-";
  console.log(d.toLocaleDateString());
  // d.setMonth(d.getMonth() + 180);
  console.log(d.toLocaleDateString());
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let todaysDate = `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
  console.log(todaysDate);
  console.log(id);

  // const [hc, setHc] = useState("");
  // const [aadhar_no, setAadhar_no] = useState();

  const navigate = useNavigate();

  // ############################
  const pay = () => {
    setPayment_date(todaysDate);
    console.log(payment_for);
    // e.preventDefault();

    if (user_id.length == 0) {
      toast.warning("Please Enter the User id");
    } else {
      const body = {
        user_id,
        payment_for,
        payment_mode,
        amount,
        payment_date,
        lcategory,
        vehicleRegistration_id,
        drivingLicence_id,
        learningLicence_id,
      };
      console.log(body);
      setVtransfer();

      const url = `${URL}/payment/add_payment`;

      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        // console.log(body.id);
        console.log("id printed");
        // navigate("/");
        if (result["status"] == "success") {
          toast.success("Payment Successfull");

          sessionStorage.removeItem("regid");
          sessionStorage.removeItem("dlid");
          sessionStorage.removeItem("llid");
          // setPayment(result);
          // console.log(result.id);
          navigate("/userHome");
          // navigate to the home page
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  const setRegIdHandler = (event) => {
    if (regid != undefined) {
      setVehicleRegistration_id(regid);
    } else {
      setVehicleRegistration_id(event.target.value);
    }
  };

  const setUserIdHandler = (event) => {
    setUser_id(id);
  };

  const paymetAmountHandler = (event) => {
    setDrivingLicence_id(dlid);
    setLearningLicence_id(llid);

    console.log("amount called");
    if (payment_for == "LL") {
      setAmount(500);
    } else if (payment_for == "DL") {
      setAmount(1000);
    } else if (payment_for == "RC") {
      setAmount(3000);
    } else if (payment_for == "Permit") {
      setAmount(2000);
    } else if (payment_for == "Vehicle transfer") {
      setAmount(2500);
    } else if (payment_for == "puc") {
      setAmount(100);
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
                  <h4>Payment</h4>
                  <hr />
                  <label htmlFor="name">User id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter user id"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={id}
                      onClick={setUserIdHandler}
                    />
                  </div>
                  <label htmlFor="name">Payment for</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    // selected
                    onChange={(e) => {
                      setPayment_for(e.target.value);
                    }}
                  >
                    <option>Select The Option</option>
                    <option value="DL">Driving Licence</option>
                    <option value="LL">Learning Licence</option>
                    <option value="RC">Vehicle Registration</option>
                    <option value="Vehicle transfer">Vehicle transfer</option>
                    <option value="Permit">Permit</option>
                    <option value="puc">Puc</option>
                  </select>

                  <label htmlFor="name">Payment mode</label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    // selected
                    onChange={(e) => {
                      setPayment_mode(e.target.value);
                      setPayment_date(todaysDate);
                    }}
                  >
                    <option>Select Payment Mode</option>
                    <option>UPI</option>
                    <option value="Online Banking">Online Banking</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>

                {/* second half  */}

                <div className="col-md-6 border-start gender">
                  <hr />
                  <label htmlFor="name">vehicle registration id</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="registration id"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      value={regid}
                      onClick={setRegIdHandler}
                    />
                  </div>
                  {/* { payment_for == "LL" && ( */}
                  <label htmlFor="name">licence category</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    // selected
                    onChange={(e) => {
                      setLcategory(e.target.value);
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
                  {/* )} */}
                  <label htmlFor="name">Amount</label>
                  <div className="input-group flex-nowrap mt-2">
                    <span className="input-group-text" id="addon-wrapping">
                      <i class="zmdi zmdi-money"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="setAmount"
                      aria-label="to_date"
                      aria-describedby="addon-wrapping"
                      value={amount}
                      onClick={paymetAmountHandler}
                    />
                  </div>

                  <div className="form-group py-3">
                    <button
                      className="btn btn-primary shadow w-100"
                      onClick={pay}
                    >
                      Pay
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
export default Payment;
