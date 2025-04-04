"use client"
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          color="255, 255, 255"
          outerStyle={{
            boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.7)",
          }}
        />
      )}
    </>
  );
}
