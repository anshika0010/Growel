import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedHeading = ({ text, as = "h2", className = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = text.split("");
    textRef.current.innerHTML = "";

    const spans = chars.map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      textRef.current.appendChild(span);
      return span;
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(spans, {
      opacity: 1,
      duration: 0.02,
      stagger: 0.05,
      ease: "none",
    })
      .to({}, { duration: 2 })
      .to(spans, {
        opacity: 0,
        duration: 0.01,
        stagger: 0.02,
        ease: "none",
      })
      .to({}, { duration: 0.5 });

    return () => {
      tl.kill();
    };
  }, [text]);

  const Tag = as;

  return (
    <Tag
      ref={textRef}
      className={`inline-block whitespace-pre-wrap ${className}`}
    ></Tag>
  );
};

export default AnimatedHeading;
