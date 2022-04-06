import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LLService from "../../../../Services/LLService";
import UserService from "../../../../Services/UserService";
import dlImage from "./images/LL.png";
import { URL } from "../../../../config";
import axios from "axios";
import FooterD from "../../../FooterD";

import "./LLstyle.css";
import { Preview, print } from "react-html2pdf";
const LLDownload = () => {
  const { id, name } = sessionStorage;
  const canvas = useRef(null);
  const [ll, setLL] = useState([]);
  const [user, setUser] = useState([]);
  const [ll_no, setLl_no] = useState("");
  const [issue_date, setIssue_date] = useState("");
  const [expiry_date, setExpiry_date] = useState("");
  const [gender, setGender] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [L_category, setL_category] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [photoId, setDlphotoid] = useState("");
  const [myphoto, setMyphoto] = useState(null);

  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    LLService.getLLByUserIdforcert(id)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.user);
        setUser(response.data.user);
        setLL(response.data);
        // console.log(ll);
        setBlood_group(user.blood_group);
        setAddress(user.address);
        setDob(user.dob);
        setGender(user.gender);
        setIssue_date(ll.issue_date);
        setExpiry_date(ll.expiry_date);
        setL_category(ll.l_category);
        setLl_no(ll.tempLLNo);
        setDlphotoid(user.photo_id);
        // console.log("photo id is");

        // console.log(photoId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    blood_group,
    address,
    dob,
    gender,
    issue_date,
    expiry_date,
    L_category,
    ll_no,
    photoId,
  ]);

  useEffect(() => {
    // console.log({ id });
    // const idImage = new Image();
    UserService.getPhotoById(id)
      .then((response) => {
        setMyphoto(response);
        console.log("myphoto");
        console.log(id);
        // console.log(myphoto);
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

      ctx.drawImage(image, 100, 0, 400, 300);
      ctx.drawImage(Idphoto, 410, 116, 70, 95);

      ctx.font = "13px Comic Sans MS";

      ctx.fillText(name, 137, 223);
      ctx.fillText(address, 150, 245);
      ctx.fillText(dob, 220, 198);
      ctx.fillText(issue_date, 190, 85);
      ctx.fillText(expiry_date, 410, 85);
      ctx.fillText(ll_no, 200, 63);
      ctx.fillText(L_category, 220, 162);
      ctx.fillText(issue_date, 320, 162);
      ctx.fillText(blood_group, 375, 198);
    }
  }, [
    image,
    canvas,
    name,
    blood_group,
    address,
    dob,
    gender,
    issue_date,
    expiry_date,
    L_category,
    ll_no,
    myphoto,
    Idphoto,
  ]);

  return (
    <div>
      {/* <Preview style="margin-left: 50px; margin-top: 30px"> */}
      <h1 id="cerh1">Download Learning Licence</h1>

      <div id={"invoice"}>
        <canvas
          ref={canvas}
          width={"600px"}
          height={"450px"}
          style={{ marginTop: "100px" }}
        />
      </div>
      <div className="img"></div>
      <p style={{ marginTop: "-8%", marginLeft: "36%" }}>
        {" "}
        <i className="text-danger">*</i> To download LL right click on the image
        and save image
      </p>
      <br />
      <button
        className="btn btn-primary mt-1"
        style={{ marginBottom: "2%" }}
        id="dashbtn"
        // onClick={(e) => navigate("/userHome")}
        onClick={(e) => navigate("/userHome")}
      >
        {" "}
        User Dashbord
      </button>
      <FooterD />
    </div>
  );
};

export default LLDownload;
