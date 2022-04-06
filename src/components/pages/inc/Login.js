import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../../config";
import FooterD from "../../FooterD";
import "./Login.css";

//test token
// const accessToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYm1zajNAZ21haWwuY29tIiwiZXhwIjoxNjQ5MTU5Nzk4LCJpYXQiOjE2NDkxMjM3OTh9.Uki_U0IK6UrZjglOxlBDmwU7IaCBpMDZYMEaKygvuec";

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
//test token

// const accessToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYm1zajJAZ21haWwuY29tIiwiZXhwIjoxNjQ5MTIxNDE1LCJpYXQiOjE2NDkwODU0MTV9.Hw8VZNKhiYai0SfbFc_3VuLoS43v4-Tg3JsldccdXxE";

// const authAxios = axios.create({
//   baseURL: URL,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + accessToken,
//   },
// });

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [login, setLogin] = useState(false);
  const [requestError, setRequestError] = useState();
  // const [accessToken, setAccessToken] = useState();

  // .then((res) => res.json());

  //ssssssssssssssssssssssssssss
  // let auth =  localStorage.getItem('user_token');
  //       return fetch(url, {
  //        method: 'GET',
  //        headers:{
  //          Accept: 'application/json',
  //                   'Content-Type': 'application/json',
  //                   'Authorization': "Bearer " + auth,
  //           },
  //      })
  //          .then(res => res.json())

  const navigate = useNavigate();

  const validate = async (event) => {
    event.preventDefault();

    if (email.length === 0) {
      toast.warning("please enter email");
    } else if (password.length === 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
        role,
      };

      // url to make signin api call
      // const url = `${URL}/user/signin`;

      const url = `${URL}/user/authenticate`;

      // make api call using axios
      try {
        await axios.post(url, body).then((response) => {
          // get the server result
          const result = response.data;

          // console.log("result " + result);

          // console.log("token  " + accessToken);
          // const { token } = response.data;

          // const { response } = response.data;
          localStorage.setItem("token", result);
        });
      } catch {
        toast.error("Invalid user name or password");
      }
      console.log("sign in called");

      const accessToken = localStorage.getItem("token");

      const authAxios = axios.create({
        baseURL: URL,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });

      // const body = {
      //   email,
      //   password,
      //   // role,
      // };

      const url1 = `${URL}/user/signin`;

      try {
        const logininfo = authAxios.post(url1, body).then((response) => {
          // get the server result
          const result = response.data;

          // console.log(response);
          // navigate("/userHome");

          // console.log(result);
          if (result["status"] == "success") {
            toast.success("Welcome to the RTO Management");
            // console.log(result);
            // get the data sent by server
            const { id, name } = result["data"];

            // persist the logged in user's information for future use
            sessionStorage["id"] = id;
            sessionStorage["name"] = name;
            // sessionStorage["loginStatus"] = 1;
            // console.log(name);
            // console.log(id);
            // navigate to home component
            navigate("/userHome");
          } else {
            toast.error("Invalid user name or password");
          }
        });
      } catch (err) {
        setRequestError(err.message);
      }

      // signin(event);
    }
  };

  // const signin = async (event) => {
  //   event.preventDefault();

  //   console.log("sign in called");

  //   const body = {
  //     email,
  //     password,
  //     role,
  //   };

  //   const url = `${URL}/user/signin`;

  //   try {
  //     const logininfo = await axios.post(url, body).then((response) => {
  //       // get the server result
  //       const result = response.data;

  //       console.log(logininfo);

  //       // console.log(result);
  //       if (result["status"] == "success") {
  //         toast.success("Welcome to the RTO Management");

  //         // get the data sent by server
  //         const { id, name } = result["data"];

  //         // persist the logged in user's information for future use
  //         sessionStorage["id"] = id;
  //         sessionStorage["name"] = name;
  //         // sessionStorage["loginStatus"] = 1;
  //         console.log(name);
  //         console.log(id);
  //         // navigate to home component
  //         navigate("/userHome");
  //       } else {
  //         toast.error("Invalid user name or password");
  //       }
  //     });
  //   } catch (err) {
  //     setRequestError(err.message);
  //   }
  // };

  return (
    <div className="body">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>RTO Management System</h1>
          <p>
            RTO (Regional Transport Office) system is an application that is
            designed for the RTO for the process of registration of vehicles and
            issuing driving license process RTO Management System – License,
            LLR, Owner Ship Transfer based web Application. RTO Information
            System is an online information source developed for Road Transport
            Authority to facilitate the users in applying for various licenses
            and registrations.
          </p>
        </div>

        <div className="col-md-3 " id="lf">
          <h2>Login</h2>
          <form onSubmit={validate}>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              // value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="submit"
              className="btn btn-primary button form-control"
              value="Login"
            />
            <hr />
            <Link
              to="/signup"
              style={{ textAlign: "start" }}
              className="col-2-md-2"
            >
              <span>Sign Up here</span>
            </Link>
            &emsp; &emsp;
            <Link
              to="/resetPassword"
              style={{ textAlign: "end" }}
              className="col-2-md-2"
            >
              <span>forgot password?</span>
            </Link>
            <button
              className="btn btn-success button"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <FooterD />
    </div>
  );
};
export default Login;
