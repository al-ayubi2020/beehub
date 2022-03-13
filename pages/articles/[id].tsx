import { NextPage } from "next";
import {
  ArticleDetailsHeader,
  CommentBox,
  CommentInput,
} from "../../components/modules";
import { useUserContext } from "../../components/context/UserContext";
import axios from "axios";
import { useState } from "react";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*`
  );

  const paths = data.data.map((post: any) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}?populate=*`
  );

  return {
    props: { data },
  };
};

const ArticleDetails: NextPage = (props) => {
  const { username } = useUserContext();

  const d = new Date(props.data.data.attributes.createdAt).toLocaleDateString();

  console.log(d);

  return (
    <div className="min-h-screen w-full bg-[#e5e5e5]">
      <ArticleDetailsHeader
        title={props.data.data.attributes.titile}
        date={d}
        image={props.data.data.attributes.imageUrl}
      />
      <div className="h-full w-full md:px-10 lg:px-20 md:py-10">
        <div className="h-full w-full px-5 pt-5 md:pt-0 md:px-20 lg:px-40">
          <p className="text-justify">{props.data.data.attributes.body}</p>
        </div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900 justify-start mt-5 pl-3">
          Comments ({props.data.data.attributes.comments.data.length})
        </h3>
        <div className="h-full w-full flex flex-col justify-center space-y-5 px-3 pb-5">
          {props.data.data.attributes.comments.data.map(
            (comment: any, id: number) => (
              <div key={id}>
                <CommentBox
                  author={comment.attributes.author}
                  body={comment.attributes.comment}
                  date={comment.attributes.createdAt}
                  authorValid={username}
                  commentId={comment.id}
                />
              </div>
            )
          )}
          <CommentInput postId={props.data.data.id} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
