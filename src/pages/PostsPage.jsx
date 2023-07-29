import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts/operations";
import { PostsList } from "../components/PostsList/PostsList";

const PostsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <PostsList />
    </div>
  );
};

export default PostsPage;
