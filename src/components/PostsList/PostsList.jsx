import { useSelector } from "react-redux";
import { selectItems } from "../../redux/posts/selectors";

import { PostsListItem } from "../PostsListItem/PostsListItem";

import styles from "./PostsList.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const PostsList = () => {
  const [page, setPage] = useState(1);

  const posts = useSelector(selectItems) ?? [];
  const visiblePosts = posts.slice(0, page * 25);

  const isBtnHidden = page * 25 >= posts.length;

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
