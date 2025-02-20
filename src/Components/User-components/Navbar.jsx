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
        className={`w-full h-20 fixed top-0 flex justify-around items-center z-50 transition-all duration-500
        ${isScrolled ? "bg-[#4d493f] text-white" : iscolor ? "bg-[#4d493f]" : "bg-transparent"}
        ${isScrolled || isText ? "text-white" : ""}`}
      >
        <h1 className="text-3xl font-semibold font-sans mr-20">ProgressPoint</h1>
        <ul className="lg:flex gap-10 mr-44 lg:block hidden">
          <li className="cursor-pointer font-semibold" onClick={() => HandleNavigate("/")}>Home</li>
          <li className="cursor-pointer font-semibold" onClick={() => HandleNavigate("/time-managment")}>Time Management</li>
          <li className="cursor-pointer font-semibold" onClick={() => HandleNavigate("/habit-tracker")}>Habit Tracker</li>
          <li className="cursor-pointer font-semibold" onClick={() => HandleNavigate("/about")}>About</li>
          <li className="cursor-pointer font-semibold" onClick={() => HandleNavigate("/contact")}>Contact</li>
          {/* <li onClick={()=>HandleNavigate ('dropdown')}>dropdown</li> */}
        </ul>
{/* 
        <p className="cursor-pointer">89</p> */}
        <FontAwesomeIcon icon={faUser} className="text-xl"/>
      </div>
    </div>
  );
}

export default Navbar;
