import React, { useState, useEffect } from "react";

const LuzCursor = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const circles = [];
  for (let i = 0; i < 3; i++) {
    circles.push(
      <div
        key={i}
        className="luz-cursor-light"
        style={{
          width: `${650 - i * 150}px`,
          height: `${650 - i * 150}px`,
          opacity: `${1 - i * 0.4}`,
        }}
      />
    );
  }

  return (
    <div
      className="luz-cursor-container"
      style={{ left: position.x, top: position.y }}
    >
      <div className="centered">
        <div className="luz-cursor-light1"></div>
        <div className="luz-cursor-light2"></div>
        <div className="luz-cursor-light3"></div>
        <div className="luz-cursor-light4"></div>
      </div>
    </div>
  );
};

export default LuzCursor;
