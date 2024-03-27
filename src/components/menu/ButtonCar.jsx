import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import ContentCar from "./ContentCar";
function ButtonCar() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        className="fixed right-5 top-5 z-[1] bg-yellow-300 p-2 rounded-full animate-bounce"
        onClick={() => {
          setVisible((prevVisible) => !prevVisible);
        }}
      >
        {" "}
        <FaShoppingBag className="text-3xl text-gray-800"></FaShoppingBag>
        <span className="text-white absolute -top-1 -left-2 bg-red-600 rounded-full p-1 text-sm w-6 h-6 text-center items-center flex justify-center">
          2
        </span>
      </button>
      <ContentCar visible={visible}></ContentCar>
    </div>
  );
}

export default ButtonCar;
