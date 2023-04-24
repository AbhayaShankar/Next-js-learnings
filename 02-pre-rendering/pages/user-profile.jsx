function userProfile(props) {
  return <h1>{props.username}</h1>;
}

export default userProfile;

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      username: "Abhaya",
    },
  };
}
