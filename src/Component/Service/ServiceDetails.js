import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="p-5 mx-auto w-10/12  text-black">
        <div className="flex flex-col   mx-auto overflow-hidden rounded">
          <img
            src={data.photo}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-400"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6  sm:px-10 sm:mx-12 lg:rounded-md bg-gray-500">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl text-gray-200 font-semibold sm:text-3xl"
              >
                {data.title}
              </a>
              <p className="text-xs text-gray-400">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>
            <div className="text-gray-100">
              <p>{data.body}</p>
            </div>
          </div>
        </div>
        <h1>reveow page </h1>
      </div>
    </div>
  );
};

export default ServiceDetails;
