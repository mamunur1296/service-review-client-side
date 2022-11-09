import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Service = () => {
  const [serves, setServes] = useState([]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serves.map((sarves) => (
          <ServiceCart key={sarves._id} sarves={sarves}></ServiceCart>
        ))}
      </div>
      <div className="flex justify-center align-middle">
        <Link to="/allService">
          <button className="my-20 text-xl outline outline-1 py-2 px-10 rounded">
            See all serves
          </button>
        </Link>
      </div>
    </>
  );
};

export default Service;
