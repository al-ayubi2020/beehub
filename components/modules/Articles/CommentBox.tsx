import React from "react";

export interface CommentBoxProps {
  author?: string;
  date?: string;
  body?: string;
  authorValid?: string;
}

export const CommentBox: React.FC<CommentBoxProps> = ({
  author,
  date,
  body,
  authorValid,
}) => {
  return (
    <div className="antialiased mx-auto">
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed border-white shadow-md">
        <strong>{author}</strong>{" "}
        <span className="text-xs text-gray-400">{date}</span>
        <p className="text-sm">{body}</p>
        {author === authorValid && (
          <div className="w-full h-full flex justify-end mt-3">
            <button className="mx-2 hover:text-red-300">Edit</button>
            <button className="mx-2 hover:text-red-600">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
