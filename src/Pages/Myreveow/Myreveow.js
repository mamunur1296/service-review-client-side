import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
import MyreceowColl from "./MyreceowColl";

const Myreveow = () => {
  const { user } = useContext(AuthContext);
  const [reveos, setReveos] = useState([]);
  console.log(reveos);
  useEffect(() => {
    fetch(`http://localhost:5000/reveousbyemail/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setReveos(data.data);
        }
      });
  }, [user?.email]);
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
            <MyreceowColl key={revew._id} revew={revew}></MyreceowColl>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Myreveow;
