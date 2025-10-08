import React from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-blue-900 to-purple-900 text-white p-10 h-85">
      <aside>
        <figure className="w-20">
          <img src={logo} alt="HeroApp Logo" />
        </figure>
        <p className="font-bold text-2xl">
          HeroApp Ltd.
          <br />
        </p>
        <p>Providing best quality since 1992</p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="hover:text-blue-400">
            <FacebookIcon />
          </a>
          <a href="#" className="hover:text-pink-400">
            <InstagramIcon />
          </a>
          <a href="#" className="hover:text-blue-300">
            <LinkedinIcon />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
