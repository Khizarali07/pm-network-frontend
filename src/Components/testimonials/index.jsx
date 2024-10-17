import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import { useNavigate } from "react-router-dom";

Testimonials.propTypes = {};

function Testimonials(props) {
  const { data } = props;
  const { className } = props;

  // Navigation hook
  const navigate = useNavigate();

  const [dataBlock] = useState({
    title: "What our clients are saying",
    text: "Showing companies based on reviews and recent job openings",
  });

  // Function to handle the button click
  const handleSeeJobListings = () => {
    navigate("/jobsPlatform-FrontEnd/"); // Redirects to the Home page
  };

  return (
    <section className={className}>
      <div className="wrap-testimonials over-flow-hidden">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf-title style-2">
                <div className="group-title">
                  <h1>{dataBlock.title}</h1>
                  <p>{dataBlock.text}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp">
              <Swiper
                modules={[Pagination]}
                spaceBetween={32}
                pagination={{ clickable: true }}
                loop
                slidesPerView={3}
                className="tes-slider"
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 32,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="wd-testimonials">
                      <p className="description">{item.text}</p>
                      <div className="author-group">
                        <div className="avatar">
                          <img src={item.avt} alt="Testimonial Avatar" />
                        </div>
                        <div className="infor">
                          <h6>{item.name}</h6>
                          <div className="position">{item.position}</div>
                          <ul className="rating">
                            {/* Rating stars code */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* CTA Button */}

        </div>
      </div>
      <div className="cta-button text-center mt-5">
        <button
          className="btn btn-primary"
          onClick={handleSeeJobListings}
        >
          See Job Listings
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
