import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ButtonAnimation = ({ children, className = "", onClick }) => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);
  let xSet, ySet;

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();

      const x = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientX - left);

      const y = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientY - top);

      return { x, y };
    };

    xSet = gsap.quickSetter(flair, "xPercent");
    ySet = gsap.quickSetter(flair, "yPercent");

    const handleMouseEnter = (e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e) => {
      const { x, y } = getXY(e);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.25,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden cursor-pointer ${className}`}
    >
      {/* Flair effect */}
      <span
        ref={flairRef}
        className="absolute inset-0 scale-0 origin-top-left pointer-events-none z-0"
      >
        <span className="block w-[170%] aspect-square bg-red-600  rounded-full absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
      </span>

      {/* Label */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ButtonAnimation;
