import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span> Me
      </h1>

      <div className="row">
        <div className="info">
          <h3>
            <span>Name: </span>Rahul H. Vekariya
          </h3>
          <h3>
            <span>Age: </span>21
          </h3>
          <h3>
            <span>Post: </span>javascript Developer (react js, next js)
          </h3>
          <h3>
            <span>Language: </span>Gujarati, Hindi, English
          </h3>
          <Link to="/">
            <button className="btn">
              Download CV <i className="fas fa-download"></i>
            </button>
          </Link>
        </div>

        <div className="counter">
          <div className="box">
            <span>1+</span>
            <h3>Years of Experience</h3>
          </div>
          <div className="box">
            <span>5+</span>
            <h3>Projects Completed</h3>
          </div>
          {/* <!-- <div className="box">
                <span>10+</span>
                <h3>Happy Clients</h3>
            </div> --> */}
          <div className="box">
            <span>1+</span>
            <h3>Awards Won</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
