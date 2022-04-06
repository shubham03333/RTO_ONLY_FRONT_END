import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home.css";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import Service6 from "../../../assets/lidence services1.png";
import DLService from "../../../Services/DLService";
import { toast } from "react-toastify";
import FooterD from "../../FooterD";
function DLStatus() {
  const { id, name } = sessionStorage;
  const [dlId, setDlId] = useState("");
  const [dl, setDL] = useState([]);
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");

  const [dl_no, setDl_no] = useState("");
  const [dl_issue_date, setDl_issue_date] = useState("");
  const [dl_expiry_date, setDl_expiry_date] = useState("");
  const [gender, setGender] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [l_category, setL_category] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  // const canvas = useRef(null);
  const [dlphoto, setDlphoto] = useState();
  const [photo, setPhoto] = useState();

  // console.log(id);
  // console.log(name);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log({ id });
    DLService.getDLByUserIdforcert(id)
      .then((response) => {
        console.log(response.data);

        setUser(response.data.user);
        setDL(response.data);
        // console.log(dl);

        // console.log("photo Id is");
        // console.log(user.photo_id);
        // console.log(user);
        // console.log(response.data.user);
        // // setUser(response.data.user);
        // console.log(user);
        setDlphoto(response.data.user.photo_id);
        // console.log(dlphoto);
        // sessionStorage["dl_no"] = dl.dl_no;
        // sessionStorage["dl_issue_date"] = dl.dl_issue_date;
        // sessionStorage["dl_expiry_date"] = dl.dl_expiry_date;
        // sessionStorage["gender"] = user.gender;
        // sessionStorage["blood_group"] = user.blood_group;
        // sessionStorage["l_category"] = dl.l_category;
        // sessionStorage["dob"] = user.dob;
        // sessionStorage["address"] = user.address;
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err);
      });
  }, []);

  const viewDL = (id) => {
    navigate(`/view-ll/${id}`);
  };

  const renderStatus = () => {
    // console.log("renderColled");
    // console.log(dl.status);
    setStatus(dl.status);
    // console.log(dl);
    // console.log(user);
    setBlood_group(user.blood_group);
    setAddress(user.address);
    setDob(user.dob);
    setGender(user.gender);
    setDl_issue_date(dl.dl_issue_date);
    setDl_expiry_date(dl.dl_expiry_date);
    setL_category(dl.l_category);
    setDl_no(dl.dl_no);
    // console.log("photo id is");
    // console.log(dlphoto);
    setPhoto();

    if (dl.status === "Approved") {
      toast.success("Congratulations Your Driving Licence is Approved");
      setDlId(
        <button
          type="button"
          className="btn btn-success"
          style={{ borderRadius: "10px" }}
          onClick={() => navigate("/dldownload")}
        >
          Download
        </button>
        // <a href="/dldownload">show licence</a>
      );
    } else {
      if (dl.status === "error") {
        toast.error("You have not applied for dl yet");
      }
      toast.warning("Your dl status is pending");
    }
  };
  return (
    <div>
      {/* Our Services */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Check DL Status </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-3 mt-2"></div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/applyDL")}
                />
                <div className="card-body">
                  <h6>Apply for Driving License</h6>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  // onClick={() => viewDL(llId)}
                  onClick={renderStatus}
                />
                <div className="card-body">
                  <h6>Driving Licence status</h6>
                  <p style={{ fontSize: "30px", color: "green" }}>{status}</p>
                  {dlId}
                  {/* <Link to="/applyDL" className="btn btn-info shadow">
                    More
                  </Link> */}
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/vehicleRegistration")}
                />
                <div className="card-body">
                  <h6>Vehicle Registration</h6>
                  <p></p>
                  <Link
                    to="/vehicleRegistration"
                    className="btn btn-info shadow"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <FooterD />
    </div>
  );
}
export default DLStatus;
