import React, { useRef, useState } from "react";
import { useUserContext } from "../../context/UserContext";

export interface CommentBoxProps {
  commentId?: string;
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
  commentId,
}) => {
  const { deleteComment, putComment } = useUserContext();

  const commentEditRef = useRef();

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="antialiased mx-auto">
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed border-white shadow-md">
        <strong>{author}</strong>{" "}
        <span className="text-xs text-gray-400">{date}</span>
        {isEdit ? (
          <textarea
            className=" relative top-0 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Fixed Comment"
            required
            defaultValue={body}
            ref={commentEditRef}
          ></textarea>
        ) : (
          <p className="text-sm">{body}</p>
        )}
        {author === authorValid && (
          <div className="w-full h-full flex justify-end mt-3">
            {isEdit ? (
              <div>
                <button
                  className="mx-2 hover:text-green-300"
                  onClick={() =>
                    putComment(`${commentEditRef.current.value}`, commentId)
                  }
                >
                  Post
                </button>
                <button
                  className="mx-2 hover:text-red-300"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  Batal
                </button>
              </div>
            ) : (
              <button
                className="mx-2 hover:text-red-300"
                onClick={() => setIsEdit(!isEdit)}
              >
                Edit
              </button>
            )}
            <button
              className="mx-2 hover:text-red-600"
              onClick={() => deleteComment(commentId)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
