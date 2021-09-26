import React from "react";
import "../styles/footer.scss"
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <p>Patika.dev - Ciceksepeti React Bootcamp 3. Homework</p>
        <p>Halit Guven Serin</p>
      </div>
      <div className="footer__social">
        <FaGithubAlt className="footer__social__icon"/>
        <FaLinkedinIn className="footer__social__icon"/>
      </div>
    </div>
  );
};

export default Footer;
