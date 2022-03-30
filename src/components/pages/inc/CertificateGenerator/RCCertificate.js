import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import RCService from "../../../../Services/RcService";
import UserService from "../../../../Services/UserService";
import dlImage from "./images/rc.png";
import FooterD from "../../../FooterD";

const RCDownload = () => {
  const { id } = sessionStorage;
  const canvas = useRef(null);
  const [owner, setOwner] = useState("");
  const [registration_no, setRegistration_no] = useState("");
  const [chassis_no, setChassis_no] = useState("");
  const [fuel_type, setFuel_type] = useState();
  const [make, setMake] = useState("");
  const [engine_no, setEngine_no] = useState("");
  const [vehicle_class, setVehicle_class] = useState("");
  const [seat_capacity, setSeat_capacity] = useState("");
  const [engine_capacity, setEngine_capacity] = useState("");
  const [address, setAddress] = useState("");
  const [purchase_date, setPurchase_date] = useState("");

  // const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const gotoDashbord = () => {
    //  sessionStorage.removeItem;
    // sessionStorage.removeItem("purchase_date");
    // sessionStorage.removeItem("owner");
    navigate("/userHome");
  };

  useEffect(() => {
    console.log({ id });
    RCService.getRcByUserId1(id)
      .then((response) => {
        console.log(response.data);
        setOwner(response.data.owner);
        setChassis_no(response.data.chassis_no);
        setFuel_type(response.data.fuel_type);
        setMake(response.data.make);
        setEngine_no(response.data.engine_no);
        setVehicle_class(response.data.vehicle_class);
        setSeat_capacity(response.data.seat_capacity);
        setEngine_capacity(response.data.engine_capacity);
        setPurchase_date(response.data.purchase_date);
        setRegistration_no(response.data.registration_no);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    owner,
    make,
    engine_no,
    vehicle_class,
    seat_capacity,
    engine_capacity,
    chassis_no,
    fuel_type,
    registration_no,
    address,
    purchase_date,
  ]);

  useEffect(() => {
    console.log({ id });
    UserService.getUserById(id)
      .then((response) => {
        // console.log(response.data);
        setAddress(response.data.address);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [address]);

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
      ctx.fillText(registration_no, 215, 63);
      ctx.fillText(purchase_date, 210, 85);
      ctx.fillText(owner, 225, 110);
      ctx.fillText(address, 235, 128);

      ctx.fillText(make, 257, 178);
      ctx.fillText(fuel_type, 257, 190);

      ctx.fillText(chassis_no, 257, 205);

      ctx.fillText(engine_no, 257, 220);

      ctx.fillText(vehicle_class, 257, 234);
      ctx.fillText(engine_capacity, 270, 248);
      ctx.fillText(seat_capacity, 270, 261);
    }
  }, [
    canvas,
    owner,
    make,
    engine_no,
    vehicle_class,
    seat_capacity,
    engine_capacity,
    chassis_no,
    fuel_type,
    registration_no,
    address,
    purchase_date,
  ]);

  return (
    <div>
      <h1 id="cerh1">Download RC</h1>

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
        // onClick={(e) => navigate("/userHome")}
        onClick={gotoDashbord}
      >
        {" "}
        User Dashbord
      </button>
      <FooterD />
    </div>
  );
};

export default RCDownload;
