import React from "react";
import Banar from "../../Component/Home/Banar";
import Service from "../../Component/Home/Service";

const Home = () => {
  return (
    <div>
      <section>
        <Banar></Banar>
      </section>
      <section className="w-10/12 mx-auto">
        <Service></Service>
      </section>
    </div>
  );
};

export default Home;
