import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../redux/thunk/createBlog';

export const initialState = {
  blogTitle: '',
  blogType: '',
  blogTags: [],
  postedBy: 'Admin',
  blogDetails: '',
};
export const addBlogReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      if (action.payload.name === 'blogTags') {
        return {
          ...state,
          blogTags: [
            ...action.payload?.value?.split(',')?.map((tag) => tag?.trim()),
          ],
        };
      }
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
const AddBlog = () => {
  const [state, dispatch] = useReducer(addBlogReducer);
  const addDispatch = useDispatch();
  const handleSubmit = async () => {
    addDispatch(createBlog(state));
  };
  return (
    <div className="mb-12">
      <div>
        <h1 className="mt ml-16 font-bold text-3xl text-gray-600">Add Blog </h1>
      </div>
      <div className="flex justify-center mt-6  mx-16">
        <div className="grid grid-cols-1 gap-5  w-full border p-8 rounded">
          <label htmlFor="Blog Title" className="font-semibold">
            Blog Title{' '}
            <input
              type="text"
              name="blogTitle"
              placeholder="Type here"
              className="input input-bordered w-full required mt-1 "
              onChange={(e) =>
                dispatch({
                  type: 'INPUT',
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </label>

          <label htmlFor="Blog Type" className="font-semibold">
            Blog Type
            <select
              name="blogType"
              onChange={(e) =>
                dispatch({
                  type: 'INPUT',
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              className="select select-bordered w-full required mt-1 "
            >
              <option disabled selected>
                Select Type of Blog
              </option>
              <option value="Programming">Programing</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Design">Web Design</option>
            </select>
          </label>
          <label htmlFor="Blog Title" className="font-semibold">
            Blog Tags
            <br />
            <span className="text-xs">
              You can add multiple tag by using comma like (App Development, Web
              Development)
            </span>
            <input
              onChange={(e) =>
                dispatch({
                  type: 'INPUT',
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="blogTags"
              className="input input-bordered w-full required mt-1 "
            ></input>
          </label>

          <label htmlFor="Blog Title" className="font-semibold">
            Blog Details{' '}
            <textarea
              onChange={(e) =>
                dispatch({
                  type: 'INPUT',
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="blogDetails"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full h-28 mt-1  "
            />
          </label>
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="text-white px-10 bg-green-500 py-3 rounded-lg"
            >
              Add Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
