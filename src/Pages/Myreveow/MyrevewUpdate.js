import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const MyrevewUpdate = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [update, setUpdate] = useState(data);
  const navigate = useNavigate();

  const HandalRevewUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/updatereveow/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("update successfully");
          navigate("/myrevew");
        }
      });
  };
  const handalPostfild = (e) => {
    const inputName = e.target.name;
    const Inputvalue = e.target.value;
    const newPostes = { ...update };
    newPostes[inputName] = Inputvalue;
    setUpdate(newPostes);
  };
  return (
    <div>
      <div className="w-10/12 my-20  mx-auto">
        <h1 className="text-4xl text-black">Update Reveow </h1>

        <form onSubmit={HandalRevewUpdate}>
          <div className="md:grid my-10 md:grid-cols-7">
            <p className="text-xl">Name :</p>
            <input
              className="h-6 col-span-6 md:w-72 outline-green-600 outline  outline-1"
              type="text"
              name="title"
              readOnly
              defaultValue={user?.displayName}
            />
          </div>
          <div className="md:grid my-10 md:grid-cols-7">
            <p className="text-xl">Email : </p>
            <input
              className="h-6 col-span-6 md:w-72 outline-green-600 outline  outline-1"
              type="text"
              name="photo"
              readOnly
              defaultValue={user?.email}
            />
          </div>
          <div className="md:grid my-10 md:grid-cols-7">
            <p className="text-xl">Service Title : </p>
            <input
              className="h-6 col-span-6 md:w-72 outline outline-green-600  outline-1"
              type="text"
              name="price"
              readOnly
              defaultValue={data.title}
            />
          </div>
          <div className="md:grid my-10 md:grid-cols-7">
            <p className="text-xl">Revew Comment </p>
            <textarea
              onBlur={handalPostfild}
              rows="6"
              cols="25"
              name="body"
              defaultValue={data.body}
              className="col-span-6  outline  outline-green-600  outline-1"
            ></textarea>
          </div>
          <div className="md:grid my-10 md:grid-cols-7">
            <p></p>

            <button className="btn outline-green-500 hover:outline-red-500 outline outline-1 px-10 py-2  ">
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyrevewUpdate;
