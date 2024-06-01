import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ isMovieDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navOption = "text-md text-blue-600 font-mono text-white";

  return (
    <nav>
      <div
        className={`z-50 fixed w-full md:h-fit top-0 left-0 md:flex items-center justify-between px-16 bg-neutral-900 ${
          isMovieDetails ? "placeholder-opacity-100" : "opacity-85"
        }`}
      >
        <p className="font-bold text-xl md:text-3xl my-5 text-blue-600 font-mono">
          <a onClick={() => navigate("/")}>Movie API</a>
        </p>
        <div
          className={
            isMovieDetails
              ? "hidden"
              : `absolute top-6 md:top-8 right-10 md:hidden w-10 h-10`
          }
          onClick={toggleMenu}
        >
          <ion-icon name={isOpen ? "close" : "menu-outline"} />
        </div>
        <div
          className={`z-10 md:w-fit w-full md:static absolute bg-neutral-900 opacity-95 ${
            isOpen ? "top-[60px] left-0" : "top-[-200px] left-0"
          }`}
        >
          {isMovieDetails ? (
            <div className="text-white">
              <ion-icon
                onClick={() => navigate("/")}
                name="arrow-back-outline"
              ></ion-icon>
            </div>
          ) : (
            <ul className={`md:flex flex-col md:flex-row`}>
              <li className="m-7">
                <a href="#about" className={navOption}>
                  About Us
                </a>
              </li>
              <li className="m-7">
                <a href="#projects" className={navOption}>
                  Movies
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
