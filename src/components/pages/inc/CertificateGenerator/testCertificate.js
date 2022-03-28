import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DLService from "../../../../Services/DLService";
import UserService from "../../../../Services/UserService";
import dlImage from "./images/DL.png";
import { URL } from "../../../../config";
import axios from "axios";
import FooterD from "../../../FooterD";

import "./style.css";
import { Preview, print } from "react-html2pdf";
const DLDownload = () => {
  const { id, name } = sessionStorage;
  const canvas = useRef(null);
  const [dl, setDL] = useState([]);
  const [user, setUser] = useState([]);
  const [dl_no, setDl_no] = useState("");
  const [dl_issue_date, setDl_issue_date] = useState("");
  const [dl_expiry_date, setDl_expiry_date] = useState("");
  const [gender, setGender] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [l_category, setL_category] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [photoId, setDlphotoid] = useState("");
  const [myphoto, setMyphoto] = useState(null);
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    DLService.getDLByUserId1(id)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.user);
        setUser(response.data.user);
        setDL(response.data);
        console.log(dl);
        setBlood_group(user.blood_group);
        setAddress(user.address);
        setDob(user.dob);
        setGender(user.gender);
        setDl_issue_date(dl.dl_issue_date);
        setDl_expiry_date(dl.dl_expiry_date);
        setL_category(dl.l_category);
        setDl_no(dl.dl_no);
        setDlphotoid(user.photo_id);
        console.log("photo id is");

        console.log(photoId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    blood_group,
    address,
    dob,
    gender,
    dl_issue_date,
    dl_expiry_date,
    l_category,
    dl_no,
    photoId,
  ]);

  useEffect(() => {
    console.log({ id });
    // const idImage = new Image();
    UserService.getPhotoById(id)
      .then((response) => {
        setMyphoto(response);
        console.log("myphoto");
        console.log(id);
        console.log(myphoto);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [image, setImage] = useState(null);
  const [Idphoto, setIdphoto] = useState(null);

  useEffect(() => {
    const catImage = new Image();
    const IdImage = new Image();
    catImage.src = dlImage;
    IdImage.src = `http://localhost:8080/downloadFile/${photoId}`;
    catImage.onload = () => setImage(catImage);
    IdImage.onload = () => setIdphoto(IdImage);
  }, [photoId]);

  useEffect(() => {
    if (image && Idphoto && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      // ctx.fillRect(0, 0, 400, 256+80);
      // ctx.drawImage(image, (400-256)/2, 40);
      ctx.drawImage(image, 100, 0, 400, 300);
      ctx.drawImage(Idphoto, 118, 75, 100, 152);

      ctx.font = "15px Comic Sans MS";
      // ctx.fillStyle = "white";
      // ctx.textAlign = "center";

      ctx.fillText(name, 238, 87);
      ctx.fillText(blood_group, 238, 120);
      ctx.fillText(address, 238, 145);
      ctx.fillText(dob, 270, 177);
      ctx.fillText(gender, 270, 192);
      ctx.fillText(dl_issue_date, 392, 178);
      ctx.fillText(dl_expiry_date, 392, 197);
      ctx.fillText(l_category, 275, 229);
      ctx.fillText(dl_no, 410, 240);
    }
  }, [
    image,
    canvas,
    name,
    blood_group,
    address,
    dob,
    gender,
    dl_issue_date,
    dl_expiry_date,
    l_category,
    dl_no,
    myphoto,
    Idphoto,
  ]);

  return (
    <div>
      {/* <Preview style="margin-left: 50px; margin-top: 30px"> */}
      <h1 id="cerh1">Download Driving Licence</h1>

      <div id={"invoice"}>
        <canvas
          ref={canvas}
          width={"600px"}
          height={"450px"}
          style={{ marginTop: "100px" }}
        />
        {/* <img
          src={myphoto}
          alt="services"
          onClick={() => navigate("/llstatus")}
          // height={"150px"}
          id="myphoto"
        /> */}
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

export default DLDownload;
