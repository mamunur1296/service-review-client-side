import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import useTitle from "../../Hocks/useTitle";
import Reveow from "../Reveow/Reveow";
import Revews from "../Revews/Revews";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { data } = useLoaderData();
  const [revew, setRevew] = useState([]);
  const [refresh, setRefresh] = useState(false);
  console.log(revew);
  useEffect(() => {
    fetch(`https://my-ca-server.vercel.app/allrevew/${data._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setRevew(data.data);
        }
      });
  }, [refresh]);
  useTitle(data.title);
  return (
    <div>
      <section className="p-5 mx-auto w-11/12 md:w-10/12  text-black">
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
                className="inline-block mt-10 mb-5 text-2xl text-gray-200 font-semibold sm:text-3xl"
              >
                {data.title}
              </a>
              <p className="text-xl  text-gray-100">
                Proce : $
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xl hover:underline"
                >
                  {data.price}
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
        {revew.map((rev) => (
          <Revews key={rev._id} rev={rev}></Revews>
        ))}
        <div>
          <div>
            {user ? (
              <>
                <Reveow
                  key={data._id}
                  setRefresh={setRefresh}
                  refresh={refresh}
                  data={data}
                ></Reveow>
              </>
            ) : (
              <>
                <p className="text-3xl my-40 text-center text-green-600">
                  <Link to="/login">Please login to add a review</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
