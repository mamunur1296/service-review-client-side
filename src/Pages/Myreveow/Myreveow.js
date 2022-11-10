import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import useTitle from "../../Hocks/useTitle";
import MyreceowColl from "./MyreceowColl";

const Myreveow = () => {
  useTitle("your all reveow");
  const { user, logout } = useContext(AuthContext);
  const [reveos, setReveos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/reveousbyemail/?email=${user?.email}`, {
      headers: {
        authorijation: `Bearrr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        }
        logout();
        navigate("/login");
      })
      .then((data) => {
        if (data.message) {
          setReveos(data.data);
        }
      });
  }, [user?.email, refresh]);
  const handalDeletReveow = (id) => {
    const idExjest = window.confirm("are you shore Delete it ");
    if (idExjest) {
      fetch(`http://localhost:5000/deleterevew/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Delete Successfull");
            setRefresh(!refresh);
          }
        });
    }
  };
  return (
    <div>
      {reveos[0] ? (
        <>
          <div class="overflow-x-auto my-28 relative w-10/12 mx-auto shadow-md sm:rounded-lg">
            <div class="flex justify-between items-center pb-4 bg-white "></div>
            <table class="w-full text-sm text-left text-gray-700 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    User Info
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Coments
                  </th>
                  <th scope="col" class="py-3 px-6">
                    service
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Action
                  </th>
                  <th scope="col" class="p-4">
                    Action
                  </th>
                </tr>
              </thead>
              {reveos.map((revew) => (
                <MyreceowColl
                  key={revew._id}
                  handalDeletReveow={handalDeletReveow}
                  revew={revew}
                ></MyreceowColl>
              ))}
            </table>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1 className="text-3xl text-green-600 my-72 text-center">
              No reviews were added
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Myreveow;
