import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y3o56mk",
        "template_2upjxeq",
        form.current,
        "HfZdyzUeHX7YzWnAt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Contact </span>
          <span> Us</span>
        </div>
        <div>
          <span>For Any </span>
          <span className="stroke-text"> Queries</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email Address "
          ></input>
          <button className="btn btn-join"> Click Here</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
