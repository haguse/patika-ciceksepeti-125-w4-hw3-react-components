import React from "react";
import "../styles/footer.scss";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <p>Patika.dev - Ciceksepeti React Bootcamp 3. Homework</p>
        <p>Halit Guven Serin</p>
      </div>
      {/* Social Icons */}
      <div className="footer__social">
        <a href="https://github.com/haguse" target="_blank" rel="noreferrer">
          <FaGithubAlt className="footer__social__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/halitguvenserin/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="footer__social__icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
