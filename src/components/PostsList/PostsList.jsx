import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { PostsListItem } from '../PostsListItem/PostsListItem';
import { selectItems } from '../../redux/posts/selectors';

import styles from './PostsList.module.css';
import { selectFilter } from '../../redux/filter/selectors';

export const PostsList = () => {
  const [page, setPage] = useState(1);

  const posts = useSelector(selectItems) ?? [];
  const filter = useSelector(selectFilter);

  const getFilteredPosts = () => {
    const normalizedFilter = filter.toLowerCase();

    return posts
      .slice(0, page * 25)
      .filter(
        post =>
          post.body.toLowerCase().includes(normalizedFilter) ||
          post.title.toLowerCase().includes(normalizedFilter)
      );
  };

  const visiblePosts = getFilteredPosts();

  const isBtnHidden = page * 25 >= posts.length;

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.wrapper}>
      <ul>
        {visiblePosts.map(({ id, ...otherProps }) => (
          <li key={id} className={styles.item}>
            <Link to={`${id}`}>
              <PostsListItem {...otherProps} />
            </Link>
          </li>
        ))}
      </ul>

      {!isBtnHidden && (
        <button className={styles.btn} type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
