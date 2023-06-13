import { Link } from "react-router-dom";
import ContentLink from "../../components/content-link/ContentLink";
import "./contact.scss";
import React from "react";
//import Obfuscate from "react-obfuscate";

function Contact() {
  return (
    <section className="contact-page">
      <h1>Contact me! :)</h1>
      <div className="contact-mail">
        <h3 className="contact-text">Mail</h3>
        <p className="email">
          {/* <a href="mailto:n" */}
          <Link to="mailto:ngraviotto@gmail.com">ngraviotto@gmail.com</Link>
        </p>
      </div>

      <div className="contact-RRSS">
        <h3 className="contact-text">RRSS</h3>
        <ul>
          <li>
            <Link
              to="https://www.instagram.com/natachagraviotto_/"
              target="_blank"
            >
              Instagram
            </Link>
          </li>

          <li>
            <Link
              to="https://www.linkedin.com/in/natacha-graviotto-lled%C3%B3-570564161/"
              target="_blank"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link to="https://github.com/natachagraviotto/" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
