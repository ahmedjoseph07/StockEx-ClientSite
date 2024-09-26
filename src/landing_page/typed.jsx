import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingComponent = () => {
  // Create a reference for the element where typing will occur
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to StockEx..",
        "Learn trading..",
        "Invest in everything",
      ], // Strings to display
      typeSpeed: 120, // Typing speed
      backSpeed: 70, // Backspacing speed
      loop: true, // Loop the typing effect
    };

    // Initialize the typing effect
    typed.current = new Typed(el.current, options);

    // Clean up to prevent memory leaks
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <h1>
        <span ref={el}></span> {/* Span where Typed.js will type */}
      </h1>
    </div>
  );
};

export default TypingComponent;
