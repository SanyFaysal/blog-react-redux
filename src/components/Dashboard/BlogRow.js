import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';

const BlogRow = ({ blog }) => {
  return (
    <tr>
      <th>1</th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">Web Development</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
      </td>
      <td className="font-semibold">Admin</td>

      <th className="flex justify-around ">
        <button className="btn btn-ghost rounded-xl">
          <FiEdit2 className="text-xl text-green-500" />
        </button>
        <button className="btn btn-ghost rounded-xl ">
          <MdDeleteOutline className="text-2xl text-red-500" />
        </button>
      </th>
    </tr>
  );
};

export default BlogRow;
