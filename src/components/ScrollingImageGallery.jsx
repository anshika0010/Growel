import React from "react";
import { Link } from "react-router-dom";
import GuardImage1 from "../assets/Images/GuardImage1.jpg";
import GuardImage2 from "../assets/Images/GuardImage2.jpg";
import GuardImage3 from "../assets/Images/GuardImage3.jpg";
import GuardImage4 from "../assets/Images/GuardImage4.jpeg";
import GuardImage5 from "../assets/Images/GuardImage5.jpeg";
import GuardImage6 from "../assets/Images/GuardImage6.jpeg";
import GuardImage7 from "../assets/Images/GuardImage7.jpeg";
import GuardImage8 from "../assets/Images/GuardImage8.jpeg";
import GuardImage9 from "../assets/Images/GuardImage9.jpeg";
import GuardImage10 from "../assets/Images/GuardImage10.jpeg";

const ScrollingImageGallery = () => {
  const images = [
    GuardImage1,
    GuardImage2,
    GuardImage3,
    GuardImage4,
    GuardImage5,
    GuardImage6,
    GuardImage7,
    GuardImage8,
    GuardImage9,
    GuardImage10,
  ];

  return (
    <div className="relative w-full overflow-hidden bg-blue-900 py-10">
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
          {images.concat(images).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Security personnel ${idx + 1}`}
              className="h-48 w-auto transition duration-300 hover:brightness-125 hover:scale-105 rounded shadow-lg"
            />
          ))}
        </div>
      </div>

      <Link to="/gallery">
        <button className="absolute bottom-4 right-4 bg-white text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-red-100 transition">
          View Gallery
        </button>
      </Link>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingImageGallery;
