import React from "react";
import About from "../../Component/Home/About";
import Banar from "../../Component/Home/Banar";
import Reveow from "../../Component/Home/Reveow";
import Service from "../../Component/Home/Service";
import useTitle from "../../Hocks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <section className="my-20 bg-orange-100">
        <Banar></Banar>
      </section>
      <section className="w-10/12 mx-auto">
        <Service></Service>
      </section>
      <section className="w-10/12 mx-auto my-10 bg-orange-50">
        <About></About>
      </section>
      <section className="w-10/12 mx-auto">
        <Reveow></Reveow>
      </section>
    </div>
  );
};

export default Home;
