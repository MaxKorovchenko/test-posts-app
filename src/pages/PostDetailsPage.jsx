import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPost } from "../redux/posts/operations";
import { PostDetails } from "../components/PostDetails/PostDetails";
import { selectError, selectIsLoading } from "../redux/posts/selectors";
import Loader from "../components/Loader/Loader";

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <>
      {error && (
        <p style={{ fontSize: 24, textAlign: "center", padding: 30 }}>Ooooops... something went wrong 😥 {error}</p>
      )}
      {isLoading && <Loader />}
      {!error && !isLoading && <PostDetails />}
    </>
  );
};

export default PostDetailsPage;
