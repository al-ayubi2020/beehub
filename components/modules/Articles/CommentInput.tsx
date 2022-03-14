import { CircularProgress } from "@mui/material";
import React, { useRef, useState } from "react";
import { useUserContext } from "../../context/UserContext";

export interface CommentInputProps {
  postId?: String;
}

export const CommentInput: React.FC<CommentInputProps> = ({ postId }) => {
  const { setModalOpen, postComment, user, loading } = useUserContext();

  const [comment, setComment] = useState("");

  const handlePostComment = async () => {
    postComment(`${comment}`, postId);
  };

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
            onChange={(e) => {
              setComment(e.currentTarget.value);
            }}
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
            {loading ? (
              <div className="bg-red-300 px-2 py-1 rounded-md shadow-sm h-8 w-24 flex items-center justify-center">
                <CircularProgress size={20} />
              </div>
            ) : (
              <button
                className="bg-red-300 px-2 py-1 rounded-md shadow-sm hover:bg-green-400 duration-300"
                onClick={handlePostComment}
              >
                Post Comment
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentInput;
