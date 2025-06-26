import React from "react";
import "./DemoBanner.css";
import DemoPopOver from "../../Button/PopOver/DemoPopOver/DemoPopOver.jsx";

const DemoBanner = () => {
  return (
    <section className="banner-wrapper">
      <div className="banner-content">
        <h2>Ready to streamline your workflow?</h2>
        <p>
          Start exploring TaskFlow and see how simple task management can be.
        </p>
        <div className="demo-button-wrapper">
          <DemoPopOver title="Start Demo" />
        </div>
      </div>
    </section>
  );
};

export default DemoBanner;
