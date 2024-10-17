import React, { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
// import img1 from "../three.png";
import img1 from "../logonew.png";
import shape1 from "../../assets/images/review/shape.png";
import client1 from "../../assets/images/review/client.jpg";
import icon1 from "../../assets/images/review/briefcase.png";
import icon2 from "../../assets/images/review/network.png";
import icon3 from "../../assets/images/review/chart.png";

function Review(props) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  const size = window.innerWidth <= 991 ? "80vw" : "40vw";

  return (
    <section className="inner-review-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7 col-md-12 d-flex justify-content-center align-items-center">
            <div className="wd-review-job thumb2 widget-counter stc">
              <div className="thumb ">
                <img src={img1} alt="images" style={{ width: size }} />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 wow fadeInRight">
            <div className="wd-review-job contentbox1 page-text stc">
              <h3>About Us</h3>
              <p style={{ fontSize: "1.2rem" }}>
                Welcome to the <strong>PM Network Alliance</strong>—your go-to
                community for<p className="d-inline"> </p>
                <strong>
                  Project, Program, and Product Management professionals
                </strong>
                . We’re dedicated to helping you stay ahead in the rapidly
                evolving tech landscape. Whether you’re mastering emerging tools
                or learning from industry experts, we provide a space where
                like-minded professionals can thrive through continuous
                learning, networking, and collaboration.
              </p>
              <ul
                style={{
                  marginTop: "20px",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "20px",
                  lineHeight: "1.6",
                  color: "#64666C",
                }}
              >
                <li style={{ marginBottom: "10px" }}>
                  <strong>Exclusive Industry Insights:</strong> Learn from top
                  thought leaders and cutting-edge tools.
                </li>
                <li>
                  <strong>Growth-Focused Events:</strong> Monthly in-person and
                  virtual meetups, panels, and workshops.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
