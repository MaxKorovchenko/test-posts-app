const styles = {
  textAlign: 'center',
  fontSize: 50,
  margin: 50,
  color: 'red',
  textShadow: '2px 2px 5px black',
};

const NotFoundPage = () => {
  return (
    <div style={styles}>
      Wrong Address😥
      <br />
      <br /> Click on Home or Posts
    </div>
  );
};

export default NotFoundPage;
