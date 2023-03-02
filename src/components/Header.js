import React from "react";
import logo from "./assets/Logo.svg";
import "./styles/Header.css";
import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Header() {
  const defaultPages = [
    { title: "Home", href: "/" },
    { title: "About", href: "/About" },
    { title: "OurSpecials", href: "/OurSpecials" },
    { title: "OurChefs", href: "/OurChefs" },
    { title: "Locations", href: "/Locations" },
  ];

  return (
    <div>
      <div className="flex justify-between px-20">
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          {/* <ul className="list-none flex gap-12 text-white">
            <li>
              <a href="/" className="hover:underline hover:text-yellow-200">
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="hover:underline hover:text-yellow-200">
                About
              </a>
            </li>
            <li>
              <a
                href="/OurSpecials"
                className="hover:underline hover:text-yellow-200">
                Our Specials
              </a>
            </li>
            <li>
              <a
                href="/OurChefs"
                className="hover:underline hover:text-yellow-200">
                Our Chefs
              </a>
            </li>
            <li>
              <a
                href="/Location"
                className="hover:underline hover:text-yellow-200">
                Locations
              </a>
            </li>
          </ul > */}
          <ul className="list-none flex gap-12 text-white">
            {defaultPages.map((pages) => (
              <li>
                <a
                  href={pages.href}
                  className="hover:underline hover:text-yellow-200">
                  {pages.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 items-center ">
          <a href="#">
            <FaRegUser className="text-white text-xl hover:text-yellow-400" />
          </a>
          <a href="#">
            <FaRegStar className="text-white text-xl hover:text-yellow-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
