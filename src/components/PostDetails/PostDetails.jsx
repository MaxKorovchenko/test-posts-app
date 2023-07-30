import { useSelector } from "react-redux";

import { selectPost } from "../../redux/posts/selectors";

import styles from "./PostDetails.module.css";

export const PostDetails = () => {
  const { userId, id, title, body } = useSelector(selectPost);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.user}>User: {userId}</h2>
      <h3 className={styles.number}>Post №: {id}</h3>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{body}</p>
    </div>
  );
};
