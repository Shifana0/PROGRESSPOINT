import React from "react";
import Navbar from "../../Components/User-components/Navbar";
import Footer from "../../Components/User-components/Footer";


function About() {
  return (
    <div>
      <Navbar iscolor={true} isText={true} />
      <div className="bg-[#f9f7f2] min-h-screen flex flex-col items-center px-6">
        {/* Hero Section */}
        <div className="max-w-4xl text-center mt-16">
          <h1 className="text-4xl font-bold text-[#4d493f]">About Astrobyte Health Monitor</h1>
          <p className="mt-4 text-lg text-gray-600">
            Your all-in-one solution for tracking fitness, health, and nutrition, with advanced features like real-time expert chat and personalized diet plans.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {[
            "Daily Habit Tracker",
            "Custom Diet Plans",
            "Time Management with Voice Reminders",
            "Health & Fitness Progress Tracking",
            "Meal & Water Intake Monitoring",
            "Real-time Chat with Experts",
            "BMI Calculator with Diet Recommendations",
            "Shopping List Generator",
          ].map((feature, index) => (
            <div key={index} className="flex items-center bg-white p-5 rounded-xl shadow-lg">
             
              <p className="font-semibold text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Astrobyte Section */}
        <div className="max-w-4xl mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#4d493f]">Why Choose Astrobyte?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Unlike other health tracking apps, Astrobyte Health Monitor provides a <strong>holistic</strong> approach, integrating fitness, nutrition, and expert support into one seamless experience.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-[#4d493f] text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-[#3b3a32] transition">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
