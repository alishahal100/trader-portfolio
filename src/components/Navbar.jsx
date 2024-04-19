import React, { useState, useEffect,useRef } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import {useIntersection} from 'react-use'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeBackground = () => {
    setShowNavbar(window.scrollY >= 100);
  };

  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef(null);

  const intersection = useIntersection(serviceRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  if (intersection && intersection.intersectionRatio > 0.5 && !isVisible) {
    setIsVisible(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={`hidden px-10 -ml-10 lg:flex navbar ${showNavbar ? "active" : ""}`}>
        <div className="flex items-center text-black">
        <h1 className=" text-2xl text-black">Pe Kasseris</h1>

        </div>
        <div className="flex items-center text-black">
          <ul className="flex space-x-5 mr-5">
            <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="#about">ABOUT</a>
            </li>
            <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="#services"> SERVICES</a>
            </li>
           
            

            <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`lg:hidden navbar flex items-center justify-between ml-auto fixed top-0 left-0 w-full p-4 z-50 ${
          isMenuOpen ? "bg-white" : ""
        } ${showNavbar ? "active" : ""}`}
      >
        <div
          className={`logo absolute left-1/2 transform -translate-x-1/2 ${
            isMenuOpen ? "text-black" : "text-black"
          }`}
        >
          <a href="/">

          <h1 className=" text-2xl text-black">Pe Kasseris</h1>

          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="menu-icon focus:outline-none text-black"
        >
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
        <ul
          className={`menu-links ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-white h-screen p-4 rounded shadow-md transition-transform duration-600 transform-gpu ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ transitionDelay: isMenuOpen ? "0s" : "0.3s" }}
        >
          <li className="cursor-pointer mb-2 font-bold text-[#D2A34C]">
            <a href="#about">ABOUT</a>
          </li>
          <li className="cursor-pointer mb-2 font-bold text-[#D2A34C]">
            <a href="#services"> SERVICES</a>
          </li>
         

          <li className="cursor-pointer mb-2 font-bold text-[#D2A34C]">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div
      ref={serviceRef}
      className="relative hidden lg:block w-screen -ml-10 lg:h-screen -mt-28"
      style={{
        backgroundImage: `url('/banner.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out delay-500 ${isVisible  ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container text-white text-center">
          <h1 className="text-4xl font-bold">
            FLATTENING THE WORLD OF TRADING , <br /> RISK & ANALYTICS TECHNOLOGY
          </h1>
          {/* Add more text or content as needed */}
        </div>
      </div>
    </div>


      <div
  className="lg:hidden w-[100vw]   -mt-28"
  style={{
    backgroundImage: `url('/banner.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center", // Ensure image is centered
    backgroundRepeat: "", // Prevent image from repeating
  }}
>

        <div className="container h-screen w-screen flex justify-center items-center">
        <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out delay-500 ${isVisible  ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container text-white text-center">
          <h1 className="lg:text-4xl font-bold">
            FLATTENING THE WORLD OF TRADING , <br /> RISK & ANALYTICS TECHNOLOGY
          </h1>
          {/* Add more text or content as needed */}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
