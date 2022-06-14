import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Get In a Touch</h2>
            <a href="/contact">
              <button className="btnn" style={{ margin: "20px" }}>
                Contact Us
              </button>
            </a>
         
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
