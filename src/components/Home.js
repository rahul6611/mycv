import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home" id="home">
      <h3>HI THERE !</h3>
      <h1>
        I'M <span>Rahul H. Vekariya</span>
      </h1>
      <p>Working At Blackwolve technologies.</p>
      <Link to="/about">
        <button className="btn">
          About Me <i className="fas fa-user"></i>
        </button>
      </Link>
    
    </section>
  );
}

export default Home;
