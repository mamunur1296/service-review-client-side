import React from "react";

const PostControlColl = ({ serv }) => {
  return (
    <tbody>
      <tr class="bg-white border-b  hover:bg-gray-100 ">
        <th
          scope="row"
          class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img class="w-20 " src={serv.photo} alt="" />
          <div class="pl-3">
            <div class="text-base font-semibold">{}</div>
            <div class="font-normal text-gray-500">{}</div>
          </div>
        </th>
        <td class="py-4 px-6">{serv.title}</td>
        <td class="py-4 px-6">
          <div class="flex items-center">
            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              MUTE
            </button>
          </div>
        </td>
        <td class="py-4 px-6">
          <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            EDIT
          </button>
        </td>
        <td class="py-4 px-6">
          <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            DELITE
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default PostControlColl;
