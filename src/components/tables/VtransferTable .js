import React, { useState, useEffect } from "react";
import VehicleTransferService from "../../Services/VehicleTransferService";
import { useNavigate } from "react-router-dom";
import FooterD from "../FooterD";
const VtransferTable = (props) => {
  const [vtransfer, setVtransfer] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    VehicleTransferService.getVtransfer()
      .then((response) => {
        const result = response.data;
        setVtransfer(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(vtransfer);
  const deletevtransfer = (id) => {
    VehicleTransferService.deleteVehicleTransfer(id).then((res) => {
      setVtransfer(vtransfer.filter((vtransfer) => vtransfer.id !== id));
    });
  };

  const viewVtransfer = (id) => {
    navigate(`/view-vtransfer/${id}`);
  };
  const editVtransfer = (id) => {
    navigate(`/update-vtransfer/${id}`);
  };

  console.log(vtransfer);
  const vtransferList = vtransfer.map((obj) => {
    return (
      <div className="vtransfertable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Vehicle Transfer List</h2>

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
                id="vtransferTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Registration No</th>
                    <th>Transfer No</th>
                    <th>New Owner</th>
                    <th>New Owner Email</th>
                    <th>Status</th>
                    {obj.payment != null && <th>Transaction id</th>}
                    {obj.payment == null && <th>Transaction id</th>}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vtransfer.map((vtransfer) => (
                    <tr key={vtransfer.id} className="text-center">
                      <td> {vtransfer.registration_no} </td>
                      <td> {vtransfer.transfer_no}</td>
                      <td> {vtransfer.new_owner}</td>
                      <td> {vtransfer.new_owner_email}</td>
                      <td> {vtransfer.status}</td>
                      {vtransfer.payment != null && (
                        <td> {vtransfer.payment.id}</td>
                      )}
                      {vtransfer.payment == null && <td></td>}
                      <td>
                        <button
                          onClick={() => editVtransfer(vtransfer.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deletevtransfer(vtransfer.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewVtransfer(vtransfer.id)}
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
    <div>
      {vtransferList[0]}
      {console.log(vtransferList)}
      <FooterD />
    </div>
  );
};
export default VtransferTable;
