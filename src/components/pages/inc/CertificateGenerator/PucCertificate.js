import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PucService from "../../../../Services/PucService";
import dlImage from "./images/puc.png";

import FooterD from "../../../FooterD";

const PucDownload = () => {
  const { id, regNO } = sessionStorage;
  const canvas = useRef(null);
  const [registration_no, setRegistration_no] = useState("");
  const [from_date, setFrom_date] = useState();
  const [to_date, setTo_date] = useState("");
  const [co2, setCo2] = useState("");
  const [hc, setHc] = useState("");
  const [puc_no, setPuc_no] = useState("");
  const [puc, setPuc] = useState([]);

  // const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    PucService.getPucStatusByRcNo(regNO)
      .then((response) => {
        // console.log(response.data);
        setPuc(response.data);
        setFrom_date(response.data.from_date);
        setTo_date(response.data.to_date);
        setCo2(response.data.co2);
        setHc(response.data.hc);
        setPuc_no(response.data.puc_no);
        setRegistration_no(response.data.registration_no);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [from_date, to_date, co2, hc, puc_no, registration_no]);

  // useEffect(() => {
  //   console.log({ id });
  //   UserService.getUserById(id)
  //     .then((response) => {
  //       console.log(response.data);
  //       // setUser(response.data);
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const catImage = new Image();
    catImage.src = dlImage;
    catImage.onload = () => setImage(catImage);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";

      ctx.drawImage(image, 100, 0, 400, 300);

      ctx.font = "13px Comic Sans MS";

      ctx.fillText(puc_no, 215, 63);
      ctx.fillText(from_date, 210, 85);
      ctx.fillText(to_date, 415, 85);
      ctx.fillText(co2, 261, 192);

      ctx.fillText(hc, 259, 215);
      ctx.fillText(registration_no, 265, 120);
    }
  }, [canvas, from_date, to_date, co2, hc, puc_no, registration_no]);

  return (
    <div>
      <h1 id="cerh1">Download PUC</h1>

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

export default PucDownload;
