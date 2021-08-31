import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useState } from "react";
import { useEffect } from "react";

const CommentArea = ({ asin }) => {
  // state = {
  //     comments: [], // comments will go here
  //     isLoading: false,
  //     isError: false
  // }
  const [comments, setcomments] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const fetchData = async () => {
    if (
      // prevProps.asin !== this.props.asin
      asin === false
    ) {
      setisLoading(true);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setcomments(comments);
          setisLoading(false);
          setisError(false);
          //   this.setState({
          //     comments: comments,
          //     isLoading: false,
          //     isError: false,
          //   });
        } else {
          console.log("error");
          setisLoading(false);
          setisError(false);
        }
      } catch (error) {
        console.log(error);
        setisLoading(false);
        setisError(true);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [asin]);
  //   componentDidUpdate = async (prevProps) => {
  // if (prevProps.asin !== this.props.asin) {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   try {
  //     let response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/comments/" +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw",
  //         },
  //       }
  //     );
  //     console.log(response);
  //     if (response.ok) {
  //       let comments = await response.json();
  //       this.setState({
  //         comments: comments,
  //         isLoading: false,
  //         isError: false,
  //       });
  //     } else {
  //       console.log("error");
  //       this.setState({ isLoading: false, isError: true });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({ isLoading: false, isError: true });
  //   }
  // }
  //   };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
