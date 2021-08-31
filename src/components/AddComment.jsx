import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin }) => {
  // state = {
  //     comment: {
  //         comment: '',
  //         rate: 1,
  //         elementId: null
  //     }
  // }
  const [comments, setcomments] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });
  useEffect(() => {
    setcomments({ ...comments, elementId: asin });
  }, [asin]);
  // componentDidUpdate(prevProps) {
  //     if (prevProps.asin !== this.props.asin) {
  //         this.setState({
  //             comment: {
  //                 ...this.state.comment,
  //                 elementId: this.props.asin
  //             }
  //         })
  //     }
  // }

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comments),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1NjJkNTI2MjAwMTViNmRjOWMiLCJpYXQiOjE2MzA0MjEwNjAsImV4cCI6MTYzMTYzMDY2MH0.kKgMKmUaJX8Vn66N4m1sSp9jCQ-e0NeCG0c6F6xS81E",
          },
        }
      );
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comments.comment}
            onChange={
              (e) => setcomments({ ...comments, comment: e.target.value })
              //   this.setState({
              //     comment: {
              //       ...this.state.comment,
              //       comment: e.target.value,
              //     },
              //   })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comments.rate}
            onChange={
              (e) => setcomments({ ...comments, rate: e.target.value })
              //   this.setState({
              //     comment: {
              //       ...this.state.comment,
              //       rate: e.target.value,
              //     },
              //   })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
