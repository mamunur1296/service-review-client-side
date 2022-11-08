import React from "react";
import { useLoaderData } from "react-router-dom";
import Reveow from "../Reveow/Reveow";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <section className="p-5 mx-auto w-10/12  text-black">
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
      </section>
      <section className="w-10/12 mx-auto">
        <h1 className="text-4xl my-24"> Rite your Inprotent Reveows </h1>
        <div>
          <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-700 b text-black">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs text-gray-600">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-700">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus. Donec eget ultricies diam, eu molestie arcu. Etiam nec
                lacus eu mauris cursus venenatis. Maecenas gravida urna vitae
                accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum
                sem.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button>inter your reveow</button>
          <div>
            <Reveow></Reveow>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
