import React from "react";
import "./styles/Main.css";

export default function Main() {
  return (
    <div>
      <div className="py-28 px-20">
        <div className="flex flex-col gap-6 w-3/6">
          <h1 className="text-white text-9xl">
            KA<span className="text-yellow-400">BAB</span>
          </h1>

          <p className="text-white text-[27px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="flex gap-6 pt-12">
            <button className="bg-yellow-400 h-14">
              <span className="mx-[58px] btn">Order Now</span>
            </button>
            <button className="bg-transparent border-4 h-14">
              <span className="mx-[58px] btn text-white">View More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
