import React from "react";
import Image1 from "../assets/Images/firesafety.jpeg";
import Image2 from "../assets/Images/firesafety2.jpeg";
import Image3 from "../assets/Images/firesafety3.jpeg";
import Image4 from "../assets/Images/firesafety4.jpeg";

const FireSafetyTrainingSection = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-6">
        Fire Safety Training
      </h2>

      {/* Content */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Our fire safety training is designed to educate employees and personnel
        on proper fire prevention, evacuation procedures, and the use of fire
        extinguishers. The training helps reduce risks, enhances emergency
        preparedness, and ensures compliance with safety regulations.
      </p>

      {/* Image Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
        <img
          src={Image1}
          alt="Fire Drill"
          className="h-48 w-full object-cover rounded shadow-md"
        />
        <img
          src={Image2}
          alt="Fire Extinguisher Training"
          className="h-48 w-full object-cover rounded shadow-md"
        />
        <img
          src={Image3}
          alt="Evacuation Practice"
          className="h-48 w-full object-cover rounded shadow-md"
        />
        <img
          src={Image4}
          alt="Safety Briefing"
          className="h-48 w-full object-cover rounded shadow-md"
        />
      </div>
    </section>
  );
};

export default FireSafetyTrainingSection;
