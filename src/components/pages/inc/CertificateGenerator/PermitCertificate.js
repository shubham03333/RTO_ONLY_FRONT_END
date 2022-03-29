import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PermitService from "../../../../Services/PermitService";
import UserService from "../../../../Services/UserService";
import dlImage from "./images/permit.png";
import FooterD from "../../../FooterD";

const PermitDownload = () => {
  const { id } = sessionStorage;
  const canvas = useRef(null);
  const [registration_no, setRegistration_no] = useState("");
  const [from_date, setFrom_date] = useState();
  const [to_date, setTo_date] = useState("");
  const [from_state, setFrom_state] = useState("");
  const [to_state, setTo_state] = useState("");
  const [permit_no, setPermit_no] = useState("");
  const [permit, setPermit] = useState([]);
  // const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    PermitService.getPermitByUserId1(id)
      .then((response) => {
        console.log(response.data);
        setFrom_date(response.data.from_date);
        setTo_date(response.data.to_date);
        setFrom_state(response.data.from_state);
        setTo_state(response.data.to_state);
        setPermit_no(response.data.permit_no);
        setPermit(response.data);
        setRegistration_no(response.data.registration_no);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    // permit,
    from_date,
    to_date,
    from_state,
    to_state,
    permit_no,
    registration_no,
  ]);

  useEffect(() => {
    console.log({ id });
    UserService.getUserById(id)
      .then((response) => {
        console.log(response.data);
        // setUser(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const catImage = new Image();
    catImage.src = dlImage;
    catImage.onload = () => setImage(catImage);
  });

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";

      ctx.drawImage(image, 100, 0, 400, 300);

      ctx.font = "13px Comic Sans MS";

      ctx.fillText(permit_no, 215, 63);
      ctx.fillText(from_date, 210, 98);
      ctx.fillText(to_date, 415, 98);
      ctx.fillText(from_state, 210, 183);

      ctx.fillText(to_state, 365, 199);
      ctx.fillText(registration_no, 275, 140);
    }
  }, [
    canvas,
    from_date,
    to_date,
    from_state,
    to_state,
    permit_no,
    registration_no,
  ]);

  return (
    <div>
      <h1 id="cerh1">Download Permit</h1>

      <div id={"invoice"}>
        <canvas
          ref={canvas}
          width={"600px"}
          height={"450px"}
          style={{ marginTop: "100px" }}
        />
      </div>
      <div className="img"></div>
      <button
        className="btn btn-primary"
        id="dashbtn"
        onClick={(e) => navigate("/userHome")}
      >
        {" "}
        User Dashbord
      </button>
      <FooterD />
    </div>
  );
};

export default PermitDownload;
