import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import moment from "moment";

const Reveow = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({});

  const handalReveow = (e) => {
    e.preventDefault();
    const from = e.target;
    const body = post.body;
    const revewId = data._id;
    const userEmail = user?.email || "undefiend";
    const userImg = user?.photoURL || "undefiend";
    const title = data.title;
    const name = user?.displayName;
    const postTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    const userinfo = {
      body,
      revewId,
      userEmail,
      userImg,
      title,
      name,
      postTime,
    };

    fetch("http://localhost:5000/revewinfo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("post complite");
          from.reset();
        }
      });
  };
  const handalRevewfild = (e) => {
    const fildName = e.target.name;
    const fildValue = e.target.value;
    const newPost = { ...post };
    newPost[fildName] = fildValue;
    setPost(newPost);
  };

  return (
    <section>
      <div>
        <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-700 b text-black">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src={user?.photoURL}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">{user?.displayName}</h4>
                <span className="text-xs text-gray-600">2dais</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <form
            onSubmit={handalReveow}
            className="p-4 space-y-2 text-sm text-gray-700"
          >
            <div className="md:grid my-10 md:grid-cols-7">
              <textarea
                onBlur={handalRevewfild}
                rows="12"
                cols="24"
                name="body"
                className="col-span-6  outline  outline-1"
              ></textarea>
            </div>
            <div className="md:grid my-10 md:grid-cols-7">
              <button
                type="submit"
                className="btn outline outline-1 px-10 py-2  "
              >
                Post Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reveow;