import React, { useState, useEffect } from "react";
import LLService from "../../Services/LLService";
import { useNavigate } from "react-router-dom";
import FooterD from "../FooterD";

const LLTable = (props) => {
  const [ll, setLL] = useState([]);
  const [aadhar_no, setAadhar] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    LLService.getLL()
      .then((response) => {
        const result = response.data;
        setLL(result["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(ll);
  const deleteLL = (id) => {
    LLService.deleteLL(id).then((res) => {
      setLL(ll.filter((ll) => ll.id !== id));
    });
  };

  const viewLL = (id) => {
    navigate(`/view-ll/${id}`);
  };
  const editLL = (id) => {
    navigate(`/update-ll/${id}`);
  };

  // sortByDescending() {

  //   let sortedDescending = ll.sort((a, b) => {
  //     return b.status - a.status;
  //   });
  //    this.setState({
  //     ll: sortedDescending
  //   });
  // }

  console.log(ll);
  const llList = ll.map((obj) => {
    return (
      <div className="complainTable">
        <div className="container align-content-center">
          <div className="col-md-12 ">
            <h2 className="text-center mt-3">Learning Licence List</h2>

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
                id="llTable"
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
                  {ll.map((ll) => (
                    <tr key={ll.id} className="text-center">
                      <td> {ll.user_id}</td>
                      <td> {ll.user.name}</td>
                      <td> {ll.user.aadhar_no} </td>
                      <td> {ll.l_category}</td>
                      <td> {ll.status}</td>
                      {ll.payment != null && <td> {ll.payment.id}</td>}
                      {ll.payment == null && <td></td>}
                      {/* <td> {complain.status}</td> */}
                      <td>
                        <button
                          onClick={() => editLL(ll.id)}
                          className="btn btn-info"
                        >
                          Update{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => deleteLL(ll.id)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => viewLL(ll.id)}
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
      {llList[0]}
      {console.log(llList)}
      <FooterD />
    </div>
  );
};
export default LLTable;
