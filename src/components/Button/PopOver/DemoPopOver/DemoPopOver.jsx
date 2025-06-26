import React from "react";
import "./DemoPopOver.css";

const DemoPopOver = (props) => {
  return (
    <>
      <button className="demo-popover" popovertarget="popover">
        {props.title}
      </button>

      <div id="popover" popover="false">
        <h2>Email Validation</h2>

        <form action="" className="validation-form">
          <label htmlFor="email">Active Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email..."
          />
        </form>

        <div className="button-action-wrapper">
          <button popovertarget="popover" popovertargetaction="hide">
            Cancel
          </button>
          <button popovertarget="popover" popovertargetaction="hide">
            Check Email
          </button>
        </div>
      </div>
    </>
  );
};

export default DemoPopOver;
