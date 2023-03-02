import React from "react";
import "./styles/Timer.css";

export const Timer = () => {
  return (
    <div className="px-20">
      <div className="flex gap-6">
        <div className="flex flex-col">
          <p className="text-gray-500">Lunch</p>
          <p className="text-white">1:00 - 3:00 pm</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500">Dinner</p>
          <p className="text-white">7:00 - 9:00 pm</p>
        </div>
      </div>
    </div>
  );
};
