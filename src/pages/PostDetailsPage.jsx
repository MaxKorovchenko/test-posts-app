import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPost } from "../redux/posts/operations";
import { PostDetails } from "../components/PostDetails/PostDetails";

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return <PostDetails />;
};

export default PostDetailsPage;
