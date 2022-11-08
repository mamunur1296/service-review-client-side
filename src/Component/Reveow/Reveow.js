import React, { useState } from "react";

const Reveow = () => {
  const [post, setPost] = useState({});
  const handalPostForm = (e) => {
    e.preventDefault();
    // const from = e.target;
    // fetch("http://localhost:5000/poats", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(post),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.acknowledged) {
    //       alert("post complite");
    //       from.reset();
    //     }
    //   });
  };
  const handalPostfild = (e) => {
    const fildName = e.target.name;
    const fildValue = e.target.value;
    const newPost = { ...post };
    newPost[fildName] = fildValue;
    setPost(newPost);
  };
  return (
    <div className="w-10/12  mx-auto">
      <h1 className="text-xl">post youre new service </h1>
      <p>if are you post here </p>
      <form onSubmit={handalPostForm}>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Title</p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline  outline-1"
            type="text"
            name="title"
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Photo</p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline  outline-1"
            type="text"
            name="photo"
            id=""
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Price</p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline  outline-1"
            type="text"
            name="price"
            id=""
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Boby</p>
          <textarea
            onBlur={handalPostfild}
            rows="12"
            cols="24"
            name="body"
            className="col-span-6  outline  outline-1"
          ></textarea>
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p></p>
          <button className="btn outline outline-1 px-10 py-2  ">
            Post Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reveow;
