import React from "react";
// import { contact } from '../../Portfolio'
import "./Contact.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eaig0aj",
        "template_8onu1d9",
        e.target,
        "V1znxZJCPa-KKTmon"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Error");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: 50 }} id="contact">
        CONTACT ME
      </h2>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="Row-wise">
            <div className="second">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="Row-wise">
            <div className="second">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="Row-wise">
            <div className="second">
              <textarea
                id="subject"
                name="message"
                placeholder="Write your message"
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <div className="Row-wise">
            <div className="second">
              <input type="submit" value="Send" className="Hover" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
