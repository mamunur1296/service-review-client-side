import React from "react";
import { Link } from "react-router-dom";

const MyreceowColl = ({ revew, handalDeletReveow }) => {
  const { userImg, body, name, postTime, title, userEmail, _id } = revew;

  return (
    <tbody>
      <tr class="bg-white border-b  hover:bg-gray-100 ">
        <th
          scope="row"
          class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img class="w-10 h-10 rounded-full" src={userImg} alt="Jese image" />
          <div class="pl-3">
            <div class="text-base font-semibold">{name}</div>
            <div class="font-normal text-gray-500">{userEmail}</div>
          </div>
        </th>
        <td class="py-4 px-6">{body}</td>
        <td class="py-4 px-6">
          <div class="flex items-center">{title}</div>
        </td>
        <td class="py-4 px-6">
          <Link to={`/recewupdate/${_id}`}>
            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Update
            </button>
          </Link>
        </td>
        <td class="py-4 px-6">
          <button
            onClick={() => handalDeletReveow(_id)}
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            delit
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MyreceowColl;
