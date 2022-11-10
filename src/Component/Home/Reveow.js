import React, { useEffect, useState } from "react";
import ReveowColl from "./ReveowColl";

const Reveow = () => {
  const [data, detData] = useState([]);
  useEffect(() => {
    fetch("https://my-ca-server.vercel.app/allreveow")
      .then((res) => res.json())
      .then((data) => {
        detData(data.data);
      });
  }, []);
  return (
    <div>
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl my-10 font-semibold leading-none text-center">
            What my customers are saying about me
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-3">
          {data.map((revew) => (
            <ReveowColl key={revew._id} revew={revew}></ReveowColl>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reveow;
