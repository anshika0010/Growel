import React from "react";
import GuardImage1 from "../assets/Images/GuardImage1.jpg";
import GuardImage2 from "../assets/Images/GuardImage2.jpg";
import GuardImage3 from "../assets/Images/GuardImage3.jpg";
import GuardImage4 from "../assets/Images/GuardImage17.jpeg";
import GuardImage5 from "../assets/Images/GuardImage5.jpeg";
import GuardImage6 from "../assets/Images/GuardImage6.jpeg";
import GuardImage7 from "../assets/Images/GuardImage7.jpeg";
import GuardImage8 from "../assets/Images/GuardImage8.jpeg";
import GuardImage9 from "../assets/Images/GuardImage9.jpeg";
import GuardImage10 from "../assets/Images/GuardImage10.jpeg";
import GuardImage11 from "../assets/Images/GuardImage11.jpeg";
import GuardImage12 from "../assets/Images/GuardImage12.jpeg";
import GuardImage13 from "../assets/Images/GuardImage13.jpeg";
import GuardImage14 from "../assets/Images/GuardImage14.jpeg";
import GuardImage15 from "../assets/Images/GuardImage15.jpeg";
import GuardImage16 from "../assets/Images/GuardImage16.jpeg";
import GuardImage17 from "../assets/Images/GuardImage17.jpeg";
import GuardImage18 from "../assets/Images/GuardImage18.jpeg";
import GuardImage19 from "../assets/Images/GuardImage19.jpeg";
import GuardImage20 from "../assets/Images/GuardImage20.jpeg";
import GuardImage21 from "../assets/Images/GuardImage21.jpeg";
import GuardImage22 from "../assets/Images/GuardImage22.jpeg";
import GuardImage23 from "../assets/Images/GuardImage23.jpeg";
import GuardImage24 from "../assets/Images/GuardImage24.jpeg";
import GuardImage25 from "../assets/Images/GuardImage25.jpeg";
import GuardImage26 from "../assets/Images/GuardImage26.jpeg";
const images = [
  { id: 1, src: GuardImage1 },
  { id: 2, src: GuardImage2 },
  { id: 3, src: GuardImage3 },
  { id: 4, src: GuardImage4 },
  { id: 5, src: GuardImage5 },
  { id: 6, src: GuardImage6 },
  { id: 7, src: GuardImage7 },
  { id: 8, src: GuardImage8 },
  { id: 9, src: GuardImage9 },
  { id: 10, src: GuardImage10 },
  { id: 11, src: GuardImage11 },
  { id: 12, src: GuardImage12 },
  { id: 13, src: GuardImage13 },
  { id: 14, src: GuardImage14 },
  { id: 15, src: GuardImage15 },
  { id: 16, src: GuardImage16 },
  { id: 17, src: GuardImage17 },
  { id: 18, src: GuardImage18 },
  { id: 19, src: GuardImage19 },
  { id: 20, src: GuardImage20 },
  { id: 21, src: GuardImage21 },
  { id: 22, src: GuardImage22 },
  { id: 23, src: GuardImage23 },
  { id: 24, src: GuardImage24 },
  { id: 25, src: GuardImage25 },
  { id: 26, src: GuardImage26 },
];

const Images = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {images.map((img) => (
          <div
            key={img.id}
            className="w-full aspect-square overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={`Guard ${img.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Images;
