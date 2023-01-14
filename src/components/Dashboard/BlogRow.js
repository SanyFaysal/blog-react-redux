import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BlogRow = ({ blog }) => {
  console.log(blog);
  const handleEditBlog = () => {};
  return (
    <tr>
      <th>{blog?.blogPosition + 1}</th>
      <td className="max-w-[150px] whitespace-normal">
        <div className="flex items-center ">
          <div className="">
            <div className="font-bold w-[]" style={{ wordWrap: 'break-word' }}>
              {blog?.blogTitle}
            </div>
            <div className="text-sm opacity-50">{blog?.blogType}</div>
          </div>
        </div>
      </td>
      <td className="max-w-[200px] whitespace-normal">
        {blog?.blogDetails.slice(0, 80)}
        ...
        <label htmlFor="my-modal-5" className="btn btn-xs btn-link ">
          Read more
        </label>
        <br />
      </td>
      <td className="font-semibold">
        <p>Admin</p>
      </td>
      <td className="font-semibold">
        <div>
          <input
            type="checkbox"
            className="toggle toggle-success toggle-sm  "
          />
        </div>
      </td>

      <th className=" ">
        <div className="flex justify-around items-center">
          <button
            onClick={handleEditBlog}
            className="btn btn-ghost rounded-xl "
          >
            <FiEdit2 className="text-xl text-green-500" />
          </button>
          <button className="btn btn-ghost rounded-xl ">
            <MdDeleteOutline className="text-2xl text-red-500" />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default BlogRow;
