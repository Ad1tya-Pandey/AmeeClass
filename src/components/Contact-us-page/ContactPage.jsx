import React, { axios } from "react";
import "./contactPage.css";
import Testimonial from "../Testimonial/Testimonials";
import { Component } from 'react'

export class ContactPage extends Component {

  render() {
    return (

      <>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section" style={{ fontWeight: "bold" }}>
                  Contact Us
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row no-gutters">
                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch ">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Get in touch</h3>
                        <div id="form-message-warning" className="mb-4"></div>

                        <form
                          method="POST"
                          // action="http://localhost:4000/contact"
                          id="contactForm"
                          name="contactForm"

                          className="contactForm"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" for="name">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" for="email">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" for="subject">
                                  Subject
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" for="#">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="submit"
                                  className="btn btn-primary"
                                  onClick={
                                    this.handleClick
                                  }
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-flex align-items-stretch ">
                      <div className="info-wrap bg-success w-100 p-md-5 p-4">
                        <h3 style={{ color: "White" }}>Let's get in touch</h3>
                        <p className="mb-4 " style={{ color: "White" }}>
                          We're open for any suggestion or just to have a chat
                        </p>
                        <div className="dbox w-100 d-flex align-items-start">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span
                              className="fa fa-map-marker"
                              style={{ color: "White" }}
                            ></span>
                          </div>
                          <div className="text pl-3">
                            <p style={{ color: "White" }}>
                              <span>Address:</span> 198 West 21th Street, Suite
                              721 New York NY 10016
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span
                              className="fa fa-phone"
                              style={{ color: "White" }}
                            ></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span style={{ color: "White" }}>Phone:</span>{" "}
                              <a
                                href="tel://1234567920"
                                style={{ color: "White" }}
                              >
                                + 1235 2355 98
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span
                              className="fa fa-paper-plane"
                              style={{ color: "White" }}
                            ></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span style={{ color: "White" }}>Email:</span>{" "}
                              <a
                                href="mailto:info@yoursite.com"
                                style={{ color: "White" }}
                              >
                                info@yoursite.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="dbox w-100 d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span
                              className="fa fa-globe"
                              style={{ color: "White" }}
                            ></span>
                          </div>
                          <div className="text pl-3">
                            <p>
                              <span style={{ color: "White" }}>Website</span>{" "}
                              <a href="#" style={{ color: "White" }}>
                                yoursite.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
      </>
    )
  }
}

export default ContactPage;