import React from "react";
import "./DemoBanner.css";

const DemoBanner = () => {
  return (
    <section className="banner-wrapper">
      <div className="banner-content">
        <h2>Ready to streamline your workflow?</h2>
        <p>
          Start exploring TaskFlow and see how simple task management can be.
        </p>
        <div className="demo-button-wrapper">
          <button id="demo-button">Start Demo</button>
        </div>
      </div>
    </section>
  );
};

export default DemoBanner;
