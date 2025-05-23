import React from "react";
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
import GuardImage11 from "../assets/Images/GuardImage11.jpeg";
// import GuardImage4 from "../assets/Images/GuardImage4.jpeg";

const images = [
  { id: 1, src: GuardImage2, alt: "Image 2" },
  { id: 2, src: GuardImage1, alt: "Image 1" },
  { id: 3, src: GuardImage3, alt: "Image 3" },
  { id: 4, src: GuardImage1, alt: "Image 4" },
  { id: 5, src: GuardImage1, alt: "Image 5" },
];

const Images = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((img) => (
        <div key={img.id}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
