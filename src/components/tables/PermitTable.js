import React, { useState, useEffect } from "react";
import PermitService from "../../Services/PermitService";
import { useNavigate } from "react-router-dom";
import FooterD from "../FooterD";
const PermitTable = (props) => {
  const [permit, setPermit] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PermitService.getPermit()
      .then((response) => {
        const result = response.data;
        setPermit(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(permit);
  const deletePermit = (id) => {
    PermitService.deletePermit(id).then((res) => {
      setPermit(permit.filter((permit) => permit.id !== id));
    });
  };

  const viewPermit = (id) => {
    navigate(`/view-permit/${id}`);
  };
  const editPermit = (id) => {
    navigate(`/update-permit/${id}`);
  };

  console.log(permit);
  const permitList = permit.map((obj) => {
    return (
      <div className="permitTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Permit List</h2>

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
                id="permitTable"
                className="table table-striped table-bordered "
              >
                <thead className="table-dark text-center">
                  <tr className="text-center">
                    <th>Registration No</th>
                    <th>Registration id</th>
                    <th>From state</th>
                    <th>To State</th>
                    <th>Status</th>
                    {obj.payment != null && <th>Transaction id</th>}
                    {obj.payment == null && <th>Transaction id</th>}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {permit.map((permit) => (
                    <tr key={permit.id} className="text-center">
                      <td> {permit.registration_no} </td>
                      <td> {permit.registration_id}</td>
                      <td> {permit.from_state}</td>
                      <td> {permit.to_state}</td>
                      <td> {permit.status}</td>
                      {permit.payment != null && <td> {permit.payment.id}</td>}
                      {permit.payment == null && <td></td>}
                      <td>
                        <button
                          onClick={() => editPermit(permit.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deletePermit(permit.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewPermit(permit.id)}
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
      {permitList[0]}
      {console.log(permitList)}
      <FooterD />
    </div>
  );
};
export default PermitTable;
