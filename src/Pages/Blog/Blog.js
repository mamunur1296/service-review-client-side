import React from "react";
import { Link, Outlet } from "react-router-dom";
import useTitle from "../../Hocks/useTitle";

const Blog = () => {
  useTitle("read letest blog");
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="mb-3">
              <Link
                to="/blog"
                className="inline-block text-green-500 hover:text-green-600    "
              >
                <p>Difference between SQL and NoSQL</p>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/blog/1"
                className="inline-block text-green-500 hover:text-green-600    "
              >
                <p>What is JWT, and how does it work?</p>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/blog/2"
                className="inline-block text-green-500 hover:text-green-600    "
              >
                <p>What is the difference between javascript and NodeJS?</p>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/blog/3"
                className="inline-block text-green-500 hover:text-green-600    "
              >
                <p>
                  How does NodeJS handle multiple requests at the same time?
                </p>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="flex flex-col  space-y-8 lg:col-span-3">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
