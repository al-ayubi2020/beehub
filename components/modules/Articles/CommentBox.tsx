import React from "react";

export const CommentBox = () => {
  return (
    <div className="antialiased mx-auto">
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed border-white shadow-md">
        <strong>Sarah</strong>{" "}
        <span className="text-xs text-gray-400">3:34 PM</span>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="w-full h-full flex justify-end mt-3">
          <button className="mx-2 hover:text-red-300">Edit</button>
          <button className="mx-2 hover:text-red-600">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
