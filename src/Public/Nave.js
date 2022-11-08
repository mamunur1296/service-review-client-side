import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assits/preview.png";
import { AuthContext } from "../AuthProvaider/AuthProvaider";

const Nave = () => {
  const { logout, user } = useContext(AuthContext);
  console.log(user);
  const handalLogOut = () => {
    logout()
      .then((res) => {})
      .catch((err) => {});
  };
  return (
    <div>
      <nav className="bg-gray-300 border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              CA ON WEB .
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-gray-500  hover:underline"
            >
              (555) 412-1234
            </a>
            <a href="https://flowbite.com" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap ">
                {user?.displayName}
              </span>
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-200 ">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  to="/home"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/post"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  Post
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  regester
                </Link>
              </li>
              <li>
                <button
                  onClick={handalLogOut}
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nave;
