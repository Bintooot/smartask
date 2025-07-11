import React from "react";
import "./Home.css";
import Persons from "../../../assets/images/persons.png";

const Home = () => {
  return (
    <main className="main-wrapper">
      <section className="main-content">
        <div className="main-info">
          <h1>Simplify Your Workflow. Manage Tasks Effortlessly.</h1>
          <p>
            <span>SmarTask</span> is a sleek task and team management app built
            to streamline collaboration, track progress, and keep everyone on
            the same page — from planning to delivery.
          </p>
          <div className="main-form-wrapper">
            <form action="">
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                required
                name="email"
              />
            </form>
            <button id="email-id">Get Started</button>
          </div>
        </div>
        <div className="main-image">
          <img src={Persons} alt="Persons.png" />
        </div>
      </section>
    </main>
  );
};

export default Home;
