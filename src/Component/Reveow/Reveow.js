import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import moment from "moment";
import ReactStars from "react-rating-stars-component";

const Reveow = ({ data, setRefresh, refresh }) => {
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
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
          setRefresh(!refresh);
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
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <span className="text-xl font-bold">{rating}</span>
            </div>
          </div>
          <form
            onSubmit={handalReveow}
            className="p-4 space-y-2 text-sm text-gray-700"
          >
            <div className="md:grid my-10 md:grid-cols-7">
              <textarea
                onBlur={handalRevewfild}
                rows="3"
                cols="24"
                name="body"
                placeholder="Type your comments"
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
