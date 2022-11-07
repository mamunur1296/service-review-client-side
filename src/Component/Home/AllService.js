import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const AllService = () => {
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
    <div className=" w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serves.map((sarves) => (
          <ServiceCart key={sarves._id} sarves={sarves}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default AllService;
