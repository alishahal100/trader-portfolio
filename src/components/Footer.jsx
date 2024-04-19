import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaPhone,
  FaEnvelope,
  FaMap,
  FaFacebookF,
  FaLinkedinIn,
  FaMailBulk,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocateSharp, IoLocation } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <section
      className="w-screen  h-auto bg-[#1a3118] mt-28 -mb-28  px-20"
      id="contact"
    >
      <footer
        id="contact"
        className="flex  flex-col lg:flex-row items-center  justify-center pb-16 gap-52 lg:gap-[800px]"
      >
        <div>
          <h1 className=" text-2xl text-white">Pe Kasseris</h1>
        </div>
        <div>
          <div className="mt-6 flex gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-2xl">Contact Us</h1>
              <div className="flex items-center gap-3 text-white">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                  <FaPhone className="text-[#1a3118] rotate-90" />
                </div>
                <p>+1 408 785 9953</p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                  <IoLocation className="text-[#1a3118]" />
                </div>
                <p>
                 28015 Smyth Drive #300
                  Valencia, CA 91355 United States of America
                </p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                  <IoLocation className="text-[#1a3118]" />
                </div>
                <p>
                4701 N Federal Hwy #300
Pompano Beach, FL 33064
United States of America
                </p>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                  <a href="">
                    <FaFacebookF className="text-[#1a3118]" />
                  </a>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                  <a href="">
                    <FaInstagram className="text-[#1a3118]" />
                  </a>
                </div>

                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full">
                  <a href="mailto:">
                    <SiGmail className="text-[#1a3118]" />
                  </a>
                </div>
                <p>Follow us</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
