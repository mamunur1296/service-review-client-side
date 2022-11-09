import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import MyreceowColl from "./MyreceowColl";

const Myreveow = () => {
  const { user, logout } = useContext(AuthContext);
  const [reveos, setReveos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://my-ca-server.vercel.app/reveousbyemail/?email=${user?.email}`,
      {
        headers: {
          authorijation: `Bearrr ${localStorage.getItem("token")}`,
        },
      }
    )
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
      fetch(`https://my-ca-server.vercel.app/deleterevew/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("suxcess fully delete");
            setRefresh(!refresh);
          }
        });
    }
  };
  return (
    <div>
      <div class="overflow-x-auto relative w-10/12 mx-auto shadow-md sm:rounded-lg">
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
    </div>
  );
};

export default Myreveow;
