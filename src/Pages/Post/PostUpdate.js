import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostUpdate = () => {
  const info = useLoaderData();
  const data = info.data;
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [refresh, setRefresh] = useState(false);
  const handalPostForm = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/updatepost/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("your product successFully updated");
          navigate("/post");
        }
      });
  };

  const handalPostfild = (e) => {
    const fildName = e.target.name;
    const fildValue = e.target.value;
    const newPost = { ...post };
    newPost[fildName] = fildValue;
    setPost(newPost);
  };
  return (
    <div className="w-10/12 my-20  mx-auto">
      <h1 className="text-4xl text-black">Services Update </h1>
      <form onSubmit={handalPostForm}>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Post Title :</p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline-green-600 outline  outline-1"
            type="text"
            name="title"
            defaultValue={data.title}
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Photo URL : </p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline-green-600 outline  outline-1"
            type="text"
            name="photo"
            defaultValue={data.photo}
          />
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p className="text-xl">Service Price : </p>
          <input
            onBlur={handalPostfild}
            className="h-6 col-span-6 md:w-72 outline outline-green-600  outline-1"
            type="text"
            name="price"
            defaultValue={data.price}
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
            defaultValue={data.body}
          ></textarea>
        </div>
        <div className="md:grid my-10 md:grid-cols-7">
          <p></p>
          <button className="btn outline outline-1 px-10 py-2  ">
            Post Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostUpdate;
