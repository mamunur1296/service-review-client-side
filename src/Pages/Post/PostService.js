import React, { useState } from "react";
import moment from "moment";
import useTitle from "../../Hocks/useTitle";
import PostControl from "./PostControl";
import { toast } from "react-toastify";

const PostService = () => {
  useTitle("Admine Controll For Post ");
  const [post, setPost] = useState({});
  const [refresh, setRefresh] = useState(false);
  const handalPostForm = (e) => {
    e.preventDefault();
    const from = e.target;
    fetch("https://my-ca-server.vercel.app/poats", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("post successfull");
          setRefresh(!refresh);
          from.reset();
        }
      });
  };
  const handalPostfild = (e) => {
    const fildName = e.target.name;
    const fildValue = e.target.value;
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    const newPost = { ...post, time };
    newPost[fildName] = fildValue;
    setPost(newPost);
  };
  return (
    <div className="w-10/12 my-20  mx-auto">
      <h1 className="text-4xl text-black">Services post </h1>
      <form onSubmit={handalPostForm}>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Post Title :</p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline-green-600 outline  outline-1"
            type="text"
            name="title"
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Photo URL : </p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline-green-600 outline  outline-1"
            type="text"
            name="photo"
            id=""
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Service Price : </p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline outline-green-600  outline-1"
            type="text"
            name="price"
            id=""
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Discription :</p>
          <textarea
            onBlur={handalPostfild}
            rows="6"
            cols="25"
            name="body"
            className="col-span-6  outline  outline-green-600  outline-1"
          ></textarea>
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p></p>
          <button className="btn outline-green-500 hover:outline-red-500 outline outline-1 px-10 py-2  ">
            Post Now
          </button>
        </div>
      </form>
      <section>
        <PostControl refresh={refresh} setRefresh={setRefresh}></PostControl>
      </section>
    </div>
  );
};

export default PostService;
