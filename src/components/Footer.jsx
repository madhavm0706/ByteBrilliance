import React from "react";
import logo from "./logo.png"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle} from 'react-icons/ai';
import { AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer-distributed grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Footer Left */}
      <div className="justify-center order-2 md:order-none">
        <div className="logo-image justify-center flex mt-[-23px] "><img src={logo} alt="Logo" /></div>
        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Byte Brilliance Tech © 2015</p>
      </div>

      {/* Footer Center */}
      <div className=" footer-center justify-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p >
            <span>444 S. Cedros Ave</span> Solana station, Singapore
          </p>
        </div>
        <div >
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>
        <div >
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@ByteBrilliance.com</a>
          </p>
        </div>
      </div>

      {/* Footer Right */}
      <div className="footer-right order-1 md:order-none justify-center">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"><AiFillFacebook/></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"><AiFillTwitterCircle/></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"><AiFillLinkedin/></i>
          </a>
          <a href="#">
            <i className="fa fa-github"><AiFillGithub/></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;