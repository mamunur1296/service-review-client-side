import React, { useEffect, useState } from "react";
import PostControlColl from "./PostControlColl";

const PostControl = () => {
  const [serves, setServes] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allservises")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setServes(data.data);
          setRefresh(!refresh);
        }
      });
  }, [refresh]);
  return (
    <div>
      <div>
        <h1 className="text-gray-800 text-4xl my-10 mt-40">
          Control your Post{" "}
        </h1>
      </div>
      <div class="overflow-x-auto relative w-10/12 mx-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between items-center pb-4 bg-white "></div>
        <table class="w-full text-sm text-left text-gray-700 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="py-3 px-6">
                Service Imege
              </th>
              <th scope="col" class="py-3 px-6">
                service Title
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
              <th scope="col" class="p-4">
                Action
              </th>
            </tr>
          </thead>
          {serves.map((serv) => (
            <PostControlColl key={serv._id} serv={serv}></PostControlColl>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PostControl;
