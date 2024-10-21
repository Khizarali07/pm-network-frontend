import React from "react";

import Header from "../Components/Navbar";
import Footer from "../Components/Footer";

import Review from "../Components/breadcrumb/Review";
import Iconbox3 from "../Components/breadcrumb/Iconbox3";

import Gotop from "../Components/gotop";
import logo from "../Components/logo.jpeg";

import { Link } from "react-router-dom";

import img1 from "../assets/images/job/resume.png";
import img2 from "../assets/images/job/career.png";
import Testimonials from "../Components/testimonials";
import dataTestimonials from "../assets/fakeData/dataTestimonials";

import img3 from "../assets/images/job/events.png";
import img4 from "../assets/images/job/review.png";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { useState } from "react";

AboutUs.propTypes = {};

function AboutUs(props) {
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };
  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/jobsPlatform-FrontEnd/">
                <image className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab d-flex">
              <Tab className="user-tag flex-grow-1">Menu</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="menu-item current-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/job-board"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Job Board
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/PPM Tools"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          PPM Tools
                        </Link>
                      </li>

                      {/* <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/AI-Resume-Editor/Job-Matcher"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Eli - AI
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link
                          to="/jobsPlatform-FrontEnd/reviews"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Reviews
                        </Link>
                      </li> */}

                      <li className="menu-item">
                        <Link
                          to="https://thepmnetworkalliance.beehiiv.com/"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Newsletter
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>
            </div>
          </Tabs>
          <div className="header-customize-item button">
            <Link to="/jobsPlatform-FrontEnd/login">Login</Link>
          </div>
        </div>
      </div>

      <Header clname="act1" handleMobile={handleMobile} />

      <Review />
      <section className="wd-iconbox style-3 inner-iconbox-section">
        <div className="tf-container">
          <div className="title-iconbox style-3 stc">
            <h4>What We Offer our Members</h4>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="group-col-3 d-flex justify-content-evenly">
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img1} alt="Tailored Job Opportunities" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/jobsPlatform-FrontEnd/Blogsingle_v1">
                        Newsletter
                      </Link>
                    </h6>
                    <p>
                      Stay Updated with PM Network Alliance Newsletter: Our
                      monthly newsletter keeps you informed on the latest
                      trends, news, and insights within the project, program,
                      and product management fields. Each edition covers a range
                      of topics, from industry updates to tips on leveraging AI
                      in project management.
                    </p>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img2} alt="Personalized Career Support" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/jobsPlatform-FrontEnd/Blogsingle_v1">
                        Meetups and Networking Events
                      </Link>
                    </h6>
                    <p>
                      Connect and Grow Your Network: Our regular meetups and
                      networking events provide you with the opportunity to
                      connect with peers, share knowledge, and stay ahead of
                      industry trends. These events, both virtual and in-person,
                      are designed to foster meaningful connections and
                      discussions that can enhance your career.
                    </p>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img4} alt="Exclusive Networking Events" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/jobsPlatform-FrontEnd/Blogsingle_v1">
                        PPM Tool Access & Reviews
                      </Link>
                    </h6>
                    <p>
                      Access In-Depth Reviews and Tools for PPM Success: We
                      provide comprehensive reviews and insights on the latest
                      Project, Program, and Product Management (PPM) tools.
                      Access our curated list of tools and read expert reviews
                      to help you choose the right solutions for your needs.
                      [Link to PPM Tool Reviews]
                    </p>
                  </div>
                </div>

                <div className="tf-iconbox style-3 cl3 stc2 mt-4">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img3} alt="Exclusive Networking Events" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/jobsPlatform-FrontEnd/Blogsingle_v1">
                        Job Board
                      </Link>
                    </h6>
                    <p>
                      Explore Tailored Job Opportunities for PM, PPM, and
                      Product Roles: Our job board consolidates roles across
                      project, program, and product management, giving you
                      access to exclusive opportunities from our network of
                      industry partners. Browse and apply for positions that
                      match your skills and career goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default AboutUs;
