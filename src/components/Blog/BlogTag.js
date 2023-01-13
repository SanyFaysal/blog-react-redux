import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTag } from '../../redux/acitons/blogFilterAction';
import { RxCross2 } from 'react-icons/rx';

const BlogTag = ({ tag }) => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state?.filter);
  const selectedTags = tags?.includes(tag);

  return (
    <div className="m-1">
      <button
        onClick={() => dispatch(addTag(tag))}
        className={`px-3 text-sm py-1 inline-block rounded-full  ${
          selectedTags ? 'bg-blue-500 text-white' : 'bg-gray-100'
        }`}
      >
        {tag}
        <p className="w-4 inline-block">
          {' '}
          {selectedTags && <RxCross2 className="inline-block ml-1" />}
        </p>
      </button>
    </div>
  );
};

export default BlogTag;
