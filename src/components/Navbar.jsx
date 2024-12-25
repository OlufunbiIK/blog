import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { useState } from "react";
import Modal from "./Modal";

export default function Navbar() {
  //defining a state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  //1. navItems
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/services",
      link: "Services",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/contact",
      link: "Contact",
    },
  ];

  //modal details
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <navbar className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Design<span className="text-pink-500">DK</span>
        </a>
        {/* 2. navitems */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="text-white">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/*3. menuIcons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="flex hover:text-pink-500">
            <FaFacebook />
          </a>
          <a href="/" className="flex hover:text-pink-500">
            <FaDribbble />
          </a>
          <a href="/" className="flex hover:text-pink-500">
            <FaTwitter />
          </a>
          <button
            onClick={openLoginModal}
            className="bg-pink-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-pink-500 transition-all duration-200 ease-in"
          >
            Login
          </button>
          <button
            onClick={openSignupModal}
            className="bg-transparent border border-pink-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-pink-500 transition-all duration-200 ease-in"
          >
            Sign Up
          </button>
        </div>

        {/* our modal component is here */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <Modal
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
          type="login"
        />
        <Modal
          isOpen={isSignupModalOpen}
          onClose={closeSignupModal}
          type="signup"
        />
        {/*4. mobilemenuIcon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </navbar>

      {/*5. menu Item */}
      <ul
        className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white text-black ${
          isMenuOpen
            ? "fixed top-0 left-0 w-full transition-all ease-out duration-200"
            : "hidden"
        }`}
      >
        {navItems.map(({ path, link }, index) => (
          <li key={index} className="">
            <NavLink onClick={toggleMenu} to={path}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
