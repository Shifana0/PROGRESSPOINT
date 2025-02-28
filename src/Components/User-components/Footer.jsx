import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#4d493f] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="mt-3 text-sm">
           ProgressPoint Health Monitor is designed to help you track your progress, manage your diet, and stay motivated on your journey to a healthier life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/")}>Home</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/habit-tracker")}>Habit Tracker</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/diet-plans")}>Diet Plans</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/nutrition")}>Nutrition</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold">Contact</h2>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} /> info@astrobyte.com
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} /> +91 7907473842
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="mt-3 flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white text-lg"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="text-gray-300 hover:text-white text-lg"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-gray-300 hover:text-white text-lg"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-gray-300 hover:text-white text-lg"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm border-t border-gray-500 mt-6 pt-4">
        © {new Date().getFullYear()} ProgressPoint Health Monitor. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
