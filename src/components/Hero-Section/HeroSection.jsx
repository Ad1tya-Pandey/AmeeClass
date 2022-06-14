import React from "react";
// import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/2.jpg";
import heroImg2 from "../../assets/images/8.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <>
      <div className="banner-area banner-box bg-gray auto-height double-items">
        <div
          id="bootcarousel"
          className="carousel slide carousel-fade animate_text"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row align-center">
                      <div className="col-lg-7">
                        <div className="content" style={{ marginLeft: "40px" }}>
                          <h2 data-animation="animated fadeInRight">
                            Education <strong>course</strong>
                          </h2>
                          <p data-animation="animated slideInLeft">
                            Offered chiefly farther of my no colonel shyness.
                            Such on help ye some door if in. Laughter proposal
                            laughing.
                          </p>
                          <a
                            data-animation="animated fadeInUp"
                            className="btn btn-md btn-gradient"
                            href="about-us.html"
                          >
                            Discover More
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div
                          className="thumb"
                          data-animation="animated fadeInLeft"
                        >
                          <img src={heroImg} alt="Thumb" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row align-center">
                      <div className="col-lg-7">
                        <div className="content" style={{ marginLeft: "40px" }}>
                          <h2 data-animation="animated fadeInRight">
                            Achiving <strong>Success</strong>
                          </h2>
                          <p data-animation="animated slideInLeft">
                            Offered chiefly farther of my no colonel shyness.
                            Such on help ye some door if in. Laughter proposal
                            laughing.
                          </p>
                          <a
                            data-animation="animated fadeInUp"
                            className="btn btn-md btn-gradient"
                            href="about-us.html"
                          >
                            Discover More
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div
                          className="thumb"
                          data-animation="animated fadeInRight"
                        >
                          <img src={heroImg2} alt="Thumb" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="left carousel-control light"
            href="#bootcarousel"
            data-slide="prev"
            style={{ listStyle: "none", textDecoration: "none" }}
          >
            <i className="ti-angle-left"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control light"
            href="#bootcarousel"
            data-slide="next"
            style={{ listStyle: "none", textDecoration: "none" }}
          >
            <i className="ti-angle-right"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
