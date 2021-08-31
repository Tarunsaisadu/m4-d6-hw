import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => {
  console.log(commentsToShow);
  return (
    <ListGroup style={{ color: "black" }}>
      {commentsToShow.map((comment) => (
        <div>
          <SingleComment comment={comment} key={comment._id} />
        </div>
      ))}
    </ListGroup>
  );
};

export default CommentList;
