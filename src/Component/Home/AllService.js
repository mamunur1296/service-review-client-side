import React, { useEffect, useState } from "react";
import useTitle from "../../Hocks/useTitle";
import ServiceCart from "./ServiceCart";

const AllService = () => {
  useTitle("services");
  const [serves, setServes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allservises")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setServes(data.data);
        }
      });
  }, []);
  return (
    <div className=" w-full md:w-10/12 my-24 mx-auto">
      <div className="text-center text-5xl mb-20">
        <h1>All Survices</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serves.map((sarves) => (
          <ServiceCart key={sarves._id} sarves={sarves}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default AllService;
