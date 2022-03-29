import React from "react";
import Vmc from "./inc/Vmc";
import Footer from "../Footer";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      {/* banner Design */}
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
                {" "}
                <Link to="/">Home</Link> / About Us
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* ########## */}
      <section className="section border-bottom">
        <div className="container">
          <h5 className="main-heading">RTO Management System</h5>
          <div className="underline"></div>
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
      </section>
      {/* Our vison, mission and values */}
      {<Vmc />}
      <section className="section border-bottom">
        <div className="container">
          <a name="departments">
            <div id="#departments">
              <h5 className="main-heading">Departments</h5>
              <div className="underline"></div>
              <p>
                The Regional Transport Office or Regional Transport Authority
                (RTO / RTA) is the organisation of the Indian government
                responsible for maintaining a database of drivers and a database
                of vehicles for various states of India.<br></br> The RTO issues
                driving licences, organises collection of vehicle excise duty
                (also known as road tax and road fund licence) and sells
                personalised registrations.
                <br></br>
                Along with this, the RTO is also responsible to inspect
                vehicle's insurance and clear the pollution test.
                <br></br>The System keeps track of the transactions in the RTO
                office. It maintains
                <ul>
                  <li>Renewal of Online LLR Form,</li>
                  <li>Vehicle Registration Form,</li>
                  <li>Issue of permanent license,</li>
                  <li>learner's License,</li>
                  <li>Renewal of permanent license</li>
                  <li>Issue of learner's license, payment against challan</li>
                </ul>
              </p>
            </div>
          </a>
          <hr />
          <a name="functions">
            <div id="#functions">
              <h5 className="main-heading">Functions</h5>
              <div className="underline"></div>
              <p>
                Functions of RTO Vehicle traffic is increasing in India
                day-by-day. The role of RTO in regulating traffic is increasing
                along with this. Some of the key roles performed by RTO are
                listed as follows:
                <br></br>
                <ul>
                  <li>
                    Enforcing the motor vehicle rules established by the Motor
                    Vehicles Act, 1988
                  </li>
                  <li>Registering new vehicles </li>
                  <li>Maintaining a database for all registered vehicles</li>
                  <li>Issuing licenses to vehicle owners/drivers</li>
                  <li>Routinely inspecting vehicles</li>
                  <li>
                    Issuing certificates to assert the fitness of vehicles
                  </li>
                  <li>
                    Collecting one-time road tax for motor vehicles from vehicle
                    owners
                  </li>
                  <li>
                    Managing the permits issued to trucks, autos, taxis, etc.
                  </li>
                  <li>
                    Implementing any new rules issued by the government with
                    regard to motor vehicles
                  </li>
                  <li>
                    Checking emissions and issuing pollution certificates for
                    vehicles
                  </li>
                </ul>
              </p>
            </div>
          </a>
          <hr />
          <a name="power">
            <div id="#power">
              <h5 className="main-heading">Power And Duties</h5>
              <div className="underline"></div>
              <p>
                The major power and duties of the RTO are as follows:<br></br>
                <ol type="i">
                  <li>
                    Collection of Taxes & Charges. All vehicles must pay the
                    road tax levied by the government on different types of
                    vehicles. ...
                  </li>
                  <li>Road Safety. ...</li>
                  <li>Vehicle Registration. ...</li>
                  <li>Provision of DL. ...</li>
                  <li>Vehicle Inspection. ...</li>
                  <li>Environmental Norms. ...</li>
                  <li>Providing Unique Number Registration to Vehicles.</li>
                </ol>
              </p>
            </div>
          </a>
          <hr />
          <a name="acts">
            <div id="#acts">
              <h5 className="main-heading">Acts And Rules</h5>
              <div className="underline"></div>
              <p>
                <ol type="i">
                  <li>
                    Age limit in connection with driving of motor vehicles.—
                    <br></br>
                    No person under the age of eighteen years shall drive a
                    motor vehicle in any public place:<br></br>
                    Subject to the provisions of section 18, no person under the
                    age of twenty years shall drive a transport vehicle in any
                    public place.<br></br>
                  </li>

                  <li>
                    Restrictions on the holding of driving licences:<br></br>
                    No holder of a driving licence or a learner’s licence shall
                    permit it to be used by any other person
                  </li>
                </ol>
              </p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default About;
