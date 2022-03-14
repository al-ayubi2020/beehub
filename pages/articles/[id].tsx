import {
  ArticleDetailsHeader,
  CommentBox,
  CommentInput,
} from "../../components/modules";
import { useUserContext } from "../../components/context/UserContext";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const ArticleDetails = () => {
  const { username } = useUserContext();
  const [loading, setLoading] = useState(true);
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getPosts = async () => {
      const getPost = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}?populate=*`)
        .then((res: any) => {
          console.log(res);
          setPostId(res.data.data.id);
          setTitle(res.data.data.attributes.titile);
          setBody(res.data.data.attributes.body);
          setDate(
            new Date(res.data.data.attributes.createdAt).toLocaleDateString()
          );
          setImage(res.data.data.attributes.imageUrl);
          setComment(res.data.data.attributes.comments.data);
        });
    };

    if (id) {
      getPosts();
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="min-h-screen w-full bg-[#e5e5e5]">
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Head>
            <title>BeeHub Article - {title}</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link
              rel="shortcut icon"
              href="https://i.pinimg.com/originals/f1/6b/e4/f16be4268597a6ff5e8869712a223c45.jpg"
            />
          </Head>
          <ArticleDetailsHeader title={title} date={date} image={image} />
          <div className="h-full w-full md:px-10 lg:px-20 md:py-10">
            <div className="h-full w-full px-5 pt-5 md:pt-0 md:px-20 lg:px-40">
              <p className="text-justify">{body}</p>
            </div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 justify-start mt-5 pl-3">
              Comments ({comment.length})
            </h3>
            <div className="h-full w-full flex flex-col justify-center space-y-5 px-3 pb-5">
              {comment.map((comment: any) => (
                <div key={comment.id}>
                  <CommentBox
                    author={comment.attributes.author}
                    body={comment.attributes.comment}
                    date={comment.attributes.createdAt}
                    authorValid={username}
                    commentId={comment.id}
                  />
                </div>
              ))}
              <CommentInput postId={postId} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
