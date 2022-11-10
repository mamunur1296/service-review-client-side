import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ServiceCart = ({ sarves }) => {
  const { title, _id, photo, body, price } = sarves;
  const [rating, setRating] = useState("");

  const handalservesDetails = (id) => {
    fetch(`https://my-ca-server.vercel.app/servicedetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md ">
        <PhotoProvider>
          <PhotoView src={photo}>
            <img src={photo} alt="" />
          </PhotoView>
        </PhotoProvider>

        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {title}
            </h5>
          </a>

          <div className="flex items-center mt-2.5 mb-5">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div>
            <p>{body ? body.slice(0, 100) + "..." : " no discription"}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Proce: ${price}
            </span>
            <Link
              onClick={() => handalservesDetails(_id)}
              to={`/servicedetails/${_id}`}
              className=" text-xl outline outline-1 outline-green-500 hover:outline-red-500 py-2 px-10 rounded"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
