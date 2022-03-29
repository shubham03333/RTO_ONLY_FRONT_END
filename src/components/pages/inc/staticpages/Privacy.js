import React from "react";
// import Vmc from "./inc/Vmc";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";
function Privacy() {
  return (
    <div>
      {/* banner Design */}
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4> Privacy Policy </h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
                {" "}
                <Link to="/">Home</Link> / Privacy Policy
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* ########## */}
      <section className="section border-bottom">
        <a name="privacyt">
          <div className="container" id="#privacyt">
            <h5 className="main-heading">RTO Management System</h5>
            <div className="underline"></div>
            <p>
              RTO Works is committed to providing you with the best possible
              website and service experience. We are bound by the Privacy Act
              1988 (Cth), which sets out a number of principles concerning RTO
              Works is committed to providing you with the best possible website
              and service experience. We are bound by the Privacy Act 1988
              (Cth), which sets out a number of principthe privacy of
              individuals.
              <br></br>
              <br></br>
              This Privacy Policy informs you of what information we collect,
              why we collect it, and how we use it to improve your user
              experience. It also provides you with information regarding your
              privacy options. This will enable you to make informed decisions
              regarding your privacy and the use of your information.
              <br></br>
              Collection of your personal information
              <br></br>
              Anonymous information
              <br></br>
              There are many aspects of this website that you can view without
              providing personal information. However, we may collect relevant,
              anonymous information to improve your user experience.
              <br></br>
              We only collect anonymous information that is relevant to website
              traffic statistics. This includes metrics such as how many visits
              an individual page receives and what web browser is being used to
              access our website.
              <br></br>
              RTO Works uses this collected information for the purpose of
              gauging visitor traffic, trends and delivering personalised
              content to you while you are using our site and through our
              remarketing network.
              <br></br>
              <br></br>
              <h3>Personal information</h3>
              <br></br>
              For access to RTO Works customer support, you are required to
              submit personally identifiable information. This may include, but
              is not limited to: an email address, name and phone contact
              details.
              <br></br>
              We securely retain any provided personally identifiable
              information, and never disclose any personal information to any
              third party. We do keep your personal information on file for
              future contact and customer service, but will only contact you
              with marketing material upon your opt-in or if you have requested
              to be added to our mailing list.
              <br></br>
              <br></br>
              <h3>Cookies</h3>
              <br></br>
              This website uses a web browser feature known as ‘cookies’.
              <br></br>
              Cookies store information about websites that you have visited in
              your browser’s history, which serve the purpose of improving web
              browser experience.
              <br></br>
              If you don’t want cookies to remain on your computer, you can
              delete them after every session. You can also block cookies
              through your individual browser: Edge, Firefox, Chrome or Safari.
              If you would like more information on deleting and/or blocking
              cookies from your computer, please refer to the instructions on
              your individual browser.
              <br></br>
              <br></br>
              <h3>Google Ads Remarketing</h3>
              <br></br>
              This website uses Google Ads Remarketing. Ads Remarketing is a
              behavioural targeting service, provided by Google, which allows
              RTO Works to show our advertisements on various websites across
              the Internet.
              <br></br>
              It connects the activity on the RTO Works website to DoubleClick
              and the Google advertising network. It uses cookie and anonymous
              usage data to provide information about products that may be
              relevant to the information that you have requested.
              <br></br>
              <br></br>
              Changes to this Privacy Policy
              <br></br>
              RTO Works reserves the right to make amendments to this Privacy
              Policy at any time. If you have objections to the Privacy Policy,
              you should not access or use our website.
              <br></br>
              <br></br>
              <h3>Accessing your personal information</h3>
              <br></br>
              You have a right to access your personal information, subject to
              exceptions allowed by law. If you would like to do so, please let
              us know. For security reasons, you may be required to put your
              request in writing.
              <br></br>
              <br></br>
              <h3>Contacting us</h3>
              <br></br>
              RTO Works welcomes your comments regarding this Privacy Policy. If
              you have any questions about this Privacy Policy and would like
              further information, please contact us during business hours,
              Monday to Friday, via email at hello@rtoworks.com.au
            </p>
          </div>
        </a>
      </section>
      <Footer />
    </div>
  );
}
export default Privacy;
