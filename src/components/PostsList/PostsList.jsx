import { useSelector } from "react-redux";
import { selectItems } from "../../redux/posts/selectors";

import { PostsListItem } from "../PostsListItem/PostsListItem";

import styles from "./PostsList.module.css";
import { Link } from "react-router-dom";

export const PostsList = () => {
  const posts = useSelector(selectItems);

  return (
    <div className={styles.wrapper}>
      <ul>
        {posts.map(({ id, ...otherProps }) => (
          <li key={id} className={styles.item}>
            <Link to={`${id}`}>
              <PostsListItem {...otherProps} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
