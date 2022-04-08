import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Home.css";
import FooterD from "../../FooterD";
import Service1 from "../../../assets/v-learners-license-services.png";
import Service2 from "../../../assets/v-renewal-of-registration.png";
import Service3 from "../../../assets/v-transfer-ownership.png";
import Service4 from "../../../assets/v-permit-services.png";
import Service5 from "../../../assets/puc1.png";
import bg from "../../../assets/1.png";
import LLService from "../../../Services/LLService";
import notification from "../../../assets/exam/notificationicon.png";
import notificationblink from "../../../assets/exam/notify1.png";
import UserService from "../../../Services/UserService";
function UserHome() {
  const { id, name } = sessionStorage;
  console.log(id);
  console.log(name);

  const [qresult, setQresult] = useState();

  const [notificationMsg, setNotificationMsg] = useState();
  const [msg, setMsg] = useState("");
  const [incommingMsg, setIncommingMsg] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const close = () => {
    window.location.reload(false);
  };

  // useEffect(() => {}, []);
  const viewUser = (id) => {
    navigate(`/view-userProfile/${id}`);
  };
  useEffect(() => {
    console.log({ id });
    UserService.getUserById(id)
      .then((response) => {
        setUser(response.data);
        setIncommingMsg(response.data.notification);
        console.log(user);
        console.log(response.data);
        // console.log("photoId " + response.data.photo_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const seeNotification = () => {
    setNotificationMsg(
      <>
        <input
          type="text"
          placeholder="notification"
          className="form-control"
          // value={password}
          value={incommingMsg}
        />
        {/* <input
          type="text"
          placeholder="new password"
          className="form-control"
          // value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /> */}

        {/* <input
          type="submit"
          className="btn btn-primary button form-control"
          value="send"
        /> */}

        <button
          type="submit"
          className="btn btn-primary button form-control"
          onClick={close}
        >
          close
        </button>

        {/* <button className="btn btn-success button" onClick={pass}>
          reset password
        </button> */}
        {/* {passwordCard} */}
      </>
    );
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      {/* Our Services */}

      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">
                {" "}
                <div className="col-md-12">
                  <div className="float-start">
                    <button
                      className="btn btn-warning float-md-start"
                      onClick={() => navigate("/quiz")}
                    >
                      Written exam
                    </button>
                    {incommingMsg && (
                      <img
                        src={notification}
                        alt="services"
                        // onClick={() => navigate("/login")}
                        onClick={seeNotification}
                        style={{
                          height: "30px",
                          marginLeft: "30px",
                        }}
                      />
                    )}
                  </div>

                  <div className="float-end">
                    <div className="btn-group " role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Welcome {name} your user id : {id}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <li>
                          {/* <Link to="/create-blog" className="dropdown-item">
                            Profile
                          </Link> */}
                        </li>
                        <li>
                          {/* <a className="dropdown-item">Profile</a> */}
                        </li>
                        <li>
                          <button
                            onClick={() => viewUser(id)}
                            className="dropdown-item"
                          >
                            Profile
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
              </h3>
              {/* <div className="underline mx-auto"></div> */}
            </div>
            {notificationMsg}
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/llstatus")}
                />
                <div className="card-body">
                  <h6>Learners License</h6>
                  <p></p>
                  <Link to="/llstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service1}
                  alt="services"
                  onClick={() => navigate("/dlstatus")}
                />
                <div className="card-body">
                  <h6> Drivers License</h6>
                  <p></p>
                  <Link to="/dlstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow sevice-card">
                <img
                  src={Service2}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/rcstatus")}
                />
                <div className="card-body">
                  <h6>Vehicle Registration</h6>
                  <p></p>
                  <Link to="/rcstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service4}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/permitstatus")}
                />
                <div className="card-body">
                  <h6>Vehicle Permit</h6>
                  <p></p>
                  <Link to="/permitstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service5}
                  alt="services"
                  onClick={() => navigate("/pucstatus")}
                />
                <div className="card-body">
                  <h6>PUC</h6>
                  <p></p>
                  <Link to="/pucstatus" className="btn btn-info shadow">
                    More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow sevice-card">
                <img
                  src={Service3}
                  className="w-80 border-bottom"
                  alt="services"
                  onClick={() => navigate("/transferstatus")}
                />
                <div className="card-body">
                  <h6>Transfer Ownership</h6>
                  <p></p>
                  <Link to="/transferstatus" className="btn btn-info shadow ">
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterD />
    </div>
  );
}
export default UserHome;
