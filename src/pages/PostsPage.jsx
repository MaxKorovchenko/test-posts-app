import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../redux/posts/operations";
import { PostsList } from "../components/PostsList/PostsList";

const PostsPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div>
      <PostsList />
    </div>
  );
};

export default PostsPage;
