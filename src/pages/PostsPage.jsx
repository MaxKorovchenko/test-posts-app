import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPosts } from '../redux/posts/operations';
import { PostsList } from '../components/PostsList/PostsList';
import { selectError, selectIsLoading } from '../redux/posts/selectors';
import Loader from '../components/Loader/Loader';
import { ScrollUp } from '../components/ScrollUp/ScrollUp';
import { Filter } from '../components/Filter/Filter';

const PostsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div>
      {error && (
        <p style={{ fontSize: 24, textAlign: 'center', padding: 30 }}>
          Ooooops... something went wrong 😥 {error}
        </p>
      )}
      <Filter />
      {isLoading ? <Loader /> : <PostsList />}

      <ScrollUp />
    </div>
  );
};

export default PostsPage;
