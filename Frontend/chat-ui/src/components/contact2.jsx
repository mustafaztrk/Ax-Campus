import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const address = props.data ? props.data.address : "loading";
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <div id="footer">
                <iframe
                  title="Kırıkkale Üniversitesi Harita"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  validate
                  marginHeight="0"
                  marginWidth="0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    address
                  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href={props.data ? props.data.email : "loading"}>
                  {props.data ? props.data.email : "loading"}
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={"https://www.linkedin.com/in/zturkkmustafa/"} target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://twitter.com/mustafa_zturkk/"}
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={"https://github.com/mustafaztrk"} target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
