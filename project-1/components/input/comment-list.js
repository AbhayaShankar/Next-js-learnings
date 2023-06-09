import classes from "./comment-list.module.css";
import Loading from "../ui/Loading";

function CommentList({ comments }) {
  // const { name, email, text } = comments;
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <>
        {/* {comments && <Loading />} */}
        {comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))}
      </>
    </ul>
  );
}

export default CommentList;
