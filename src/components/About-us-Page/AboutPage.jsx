import React from "react";
import Testimonial from "../Testimonial/Testimonials";
import "./AboutPage.css";
import sir from "../../assests/ajay_sir.jpg";
function AboutPage() {
  return (
    <>
      <h2 className="aboutus">ABOUT US</h2>
      <div className="para">
        <p style={{ color: "black" }}>
          Amee Computer Classes was established in 2005 by Mr. Ajay Shah, to
          make the computer education more accessible among students in
          Vadodara, Gujarat. Ever since its inception, Amee Computer Classes has
          been a huge proponent of "Learn By Doing". As a result, each student
          enrolled in class has access to a dedicated computer to apply their
          newly learned skills.
        </p>
        <p style={{ color: "black" }}>
          Amee computer classes is also known for its interactive style of
          teaching. Students are presented with powerpoint slides, videos and
          screencasts via Projector. Students are provided with pamphlets and
          online study materials. Moreover, Students are frequently tested so
          that they can tackle their exams easily.
        </p>
        <p style={{ color: "black" }}>
          We believe in cultivating an innovative environment, so that students
          "think out of the box" and march towards a better tomorrow.
        </p>
      </div>
      <div className="flex">
        <img src={sir} style={{ borderRadius: "20px" }} />
        <div className="content">
          <h4
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Teacher Profile
          </h4>
          <p style={{ color: "black" }}>
            Ajay Shah is the owner of Amee Computer Classes and has over 12
            years of teaching experience. Apart from earning a B.Sc. Degree He's
            also a{" "}
            <span style={{ fontWeight: "bold" }}>
              Microsoft Certified Solutions Expert (MCSE) and Microsoft
              Certified Database Administrator.
            </span>
          </p>
          <p style={{ color: "black" }}>
            Due to his humble nature and unique teaching methodologies, he's
            managed to be Students' favorite computer teacher. He has the
            ability to deconstuct any complex concept and convey its nuances
            eloquently in a way that is comprehensible by the students.
          </p>
          <p style={{ color: "black" }}>
            His Pragmatic Approach towards teaching is evident in his class
            setups. He makes sure that every student has a dedicated Computer to
            perform all their learnings during the lessons.
          </p>
        </div>
      </div>
      <h2 className="aboutus">What Our Students Say</h2>
      <Testimonial />
    </>
  );
}

export default AboutPage;
