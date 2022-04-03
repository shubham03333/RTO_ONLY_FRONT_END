import React, { useState, useEffect } from "react";
import DLService from "../../Services/DLService";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/5.png";

import FooterD from "../FooterD";
const DLTable = (props) => {
  const [dl, setdl] = useState([]);
  const [aadhar_no, setAadhar] = useState([]);
  const [status, setStatus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    DLService.getDL()
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setdl(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(dl);
  const deleteDL = (id) => {
    DLService.deleteDL(id).then((res) => {
      setdl(dl.filter((dl) => dl.id !== id));
    });
  };

  const viewDL = (id) => {
    navigate(`/view-dl/${id}`);
  };
  const editDL = (id) => {
    navigate(`/update-dl/${id}`);
  };

  console.log(dl);
  const dlList = dl.map((obj) => {
    return (
      <div className="complainTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Driving Licence List</h2>

            <br></br>
            <div className="row">
              <button
                style={{ marginLeft: "0px" }}
                onClick={() => navigate("/adminHome")}
                className="btn btn-outline-warning"
              >
                Dashboard
              </button>
              <table
                id="dlTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>User id</th>
                    <th>Name</th>
                    <th>Aadhar No</th>
                    <th>Licence Category</th>
                    {/* <th>To Date</th> */}
                    <th>Status</th>
                    {obj.payment != null && <th>Transaction id</th>}
                    {obj.payment == null && <th>Transaction id</th>}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dl.map((dl) => (
                    <tr key={dl.id} className="text-center">
                      <td> {dl.user_id}</td>
                      <td> {dl.user.name}</td>
                      <td> {dl.user.aadhar_no} </td>
                      <td> {dl.l_category}</td>
                      <td> {dl.status}</td>
                      {/* <td> {complain.status}</td> */}
                      {dl.payment != null && <td> {dl.payment.id}</td>}
                      {dl.payment == null && <td></td>}
                      <td>
                        <button
                          onClick={() => editDL(dl.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deleteDL(dl.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewDL(dl.id)}
                          className="btn btn-info"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    // <div style={{ backgroundImage: `url(${bg})` }}>
    <div>
      {dlList[0]}
      {console.log(dlList)}
      <FooterD />
    </div>
    // </div>
  );
};
export default DLTable;
