import styles from "./PostsListItem.module.css";

export const PostsListItem = ({ title, body }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p>{body}</p>
    </>
  );
};
