import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assits/preview.png";
import { AuthContext } from "../AuthProvaider/AuthProvaider";
import { FaRegCommentDots } from "react-icons/fa";

const Nave = () => {
  const { logout, user } = useContext(AuthContext);
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
              CA ON CONSULTATOR
            </span>
          </a>
          <div className="flex items-center">
            <th
              scope="row"
              class="flex items-center   text-gray-900 whitespace-nowrap"
            >
              <FaRegCommentDots class="w-10 h-10 text-red-400 rounded-full"></FaRegCommentDots>

              <div class="pl-3">
                <div class="font-normal text-green-700">Contact Me</div>
                <div class="text-base font-semibold text-gray-800">
                  +1767988385
                </div>
              </div>
            </th>
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
                  to="/allService"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/post"
                      className="text-gray-900  hover:underline"
                      aria-current="page"
                    >
                      Add service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myrevew"
                      className="text-gray-900  hover:underline"
                      aria-current="page"
                    >
                      My review
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
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-gray-900  hover:underline"
                      aria-current="page"
                    >
                      login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nave;
