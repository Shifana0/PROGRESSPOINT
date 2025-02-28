import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const { iscolor, isText } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const HandleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`w-full h-20 fixed top-0 flex justify-between items-center z-50 transition-all duration-500 px-8 lg:px-16
        ${isScrolled ? "bg-[#4d493f] text-white shadow-lg" : iscolor ? "bg-[#4d493f]" : "bg-transparent"}
        ${isScrolled || isText ? "text-white" : "text-[#4d493f]"}`}
      >
        {/* Logo */}
        <h1
          className="text-3xl font-bold font-sans cursor-pointer hover:text-black transition-all duration-300"
          onClick={() => HandleNavigate("/")}
        >
          ProgressPoint
        </h1>

        {/* Navigation Links */}
        <ul className="lg:flex gap-8 hidden">
          {[
            { path: "/", label: "Home" },
            { path: "/time-managment", label: "Time Management" },
            { path: "/habit-tracker", label: "Habit Tracker" },
            { path: "/about", label: "About" },
           
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-semibold hover:text-black transition-all duration-300 relative group"
              onClick={() => HandleNavigate(item.path)}
            >
              {item.label}
              {/* Hover underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d2cec2] transition-all duration-300 group-hover:w-full"></div>
            </li>
          ))}
        </ul>

        {/* User Icon */}
        <FontAwesomeIcon
          icon={faUser}
          className="text-xl cursor-pointer hover:text-[#d2cec2] transition-all duration-300"
          onClick={() => HandleNavigate("/profile")} // Add your profile route here
        />
      </div>
    </div>
  );
}

export default Navbar;