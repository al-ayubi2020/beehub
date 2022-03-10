import React from "react";
import { useUserContext } from "../../context/UserContext";

export interface CommentInputProps {
  isLogin?: boolean;
}

export const CommentInput: React.FC<CommentInputProps> = ({ isLogin }) => {
  const { modalOpen, setModalOpen } = useUserContext();
  const { user } = useUserContext();

  return (
    <div className="mx-auto w-full ">
      <div className="border rounded-lg px-4 py-2 sm:px-6 sm:py-4 relative border-white shadow-md">
        <strong>Add a new comment</strong>
        {user ? (
          <textarea
            className=" relative top-0 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            required
          ></textarea>
        ) : (
          <div className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 relative flex flex-col items-center justify-center">
            <p>You must log in first!</p>
            <button
              className="bg-red-300 px-2 py-1 rounded-md shadow-sm hover:bg-green-400 duration-300"
              onClick={() => setModalOpen(true)}
            >
              Login
            </button>
          </div>
        )}
        {user && (
          <div className="h-full w-full flex justify-end pt-4">
            <button className="bg-red-300 px-2 py-1 rounded-md shadow-sm hover:bg-green-400 duration-300">
              Post Comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentInput;
