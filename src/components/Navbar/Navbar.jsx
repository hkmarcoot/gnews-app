import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isHamOpen, setIsHamOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between py-4 bg-gradient-to-b from-sky-100 to-blue-200 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
        <div className="flex items-center pl-8">
          <img
            src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
            alt="School Of Code Logo"
            width="50rem"
          />
          <p className="font-mono font-normal text-3xl md:text-4xl lg:text-5xl text-blue-800">
            GNews
          </p>
        </div>
        <div className="font-mono hidden lg:flex items-center pl-4">
          <Link
            to="/"
            className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
          >
            Home
          </Link>

          <Link
            to="/searchpage"
            className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
          >
            Search
          </Link>

          <Link
            to="/faqpage"
            className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
          >
            FAQ
          </Link>

          <Link
            to="/contactpage"
            className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
          >
            Contact
          </Link>
        </div>
        <div
          className="flex lg:hidden pr-8 items-center"
          onClick={() => {
            setIsHamOpen((prev) => !prev);
          }}
        >
          <svg
            viewBox="0 0 100 80"
            width="30"
            height="30"
            className="hover:fill-blue-800"
          >
            <rect width="80" height="10"></rect>
            <rect y="30" width="80" height="10"></rect>
            <rect y="60" width="80" height="10"></rect>
          </svg>
        </div>
        <div className={isHamOpen ? "showMenu" : "hideMenu"}>
          <div
            className="menu font-mono"
            onClick={() => {
              setIsHamOpen(false);
            }}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/searchpage"
                  className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  to="/faqpage"
                  className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contactpage"
                  className="font-medium text-sm text-black mx-8 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
    .showMenu{  
        position: absolute;
        top: 8rem;
        left: 6%;
        width: 88%;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        border: 1px solid black;
        z-index: 9;
    }
    .showMenu .menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: white;

        padding: 3.6rem 0;
    }
    .showMenu .menu ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
    .hideMenu{
        display: none;
    }`}</style>
    </>
  );
}

export default Navbar;
