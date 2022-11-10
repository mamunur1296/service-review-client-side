import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hocks/useTitle";
import ServiceCart from "./ServiceCart";

const Service = () => {
  const [serves, setServes] = useState([]);
  useTitle("Services");
  useEffect(() => {
    fetch("http://localhost:5000/servises")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setServes(data.data);
        }
      });
  }, []);
  return (
    <>
      <div className="mb-16 text-center ">
        <h1 className=" text-2xl md:text-4xl  mb-5">My Letest Services</h1>
        <p className=" w-full  md:w-1/2 mx-auto">
          My Service Canada Account ( MSCA) is a secure online portal. It allows
          you to apply, view and update your information for Employment
          Insurance ( EI )
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serves.map((sarves) => (
          <ServiceCart key={sarves._id} sarves={sarves}></ServiceCart>
        ))}
      </div>
      <div className="flex justify-center align-middle">
        <Link to="/allService">
          <button className="my-20 text-xl outline outline-1 outline-green-500 hover:outline-red-500 py-2 px-10 rounded">
            See all serves
          </button>
        </Link>
      </div>
    </>
  );
};

export default Service;
