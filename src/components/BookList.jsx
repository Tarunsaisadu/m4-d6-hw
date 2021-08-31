import React from "react";
import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  //   state = {
  //     searchQuery: "",
  //     selectedBook: null,
  //   };
  const [selectedBook, setSeletedBook] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  //   value={this.state.searchQuery}
                  value={searchQuery}
                  onChange={(e) => setsearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {
              // this.props.books
              books
                .filter((b) =>
                  b.title.toLowerCase().includes(
                    //   this.state.searchQuery
                    searchQuery
                  )
                )
                .map((b) => (
                  <Col xs={3} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedBook={
                        //   this.state.selectedBook
                        selectedBook
                      }
                      changeSelectedBook={(asin) => setSeletedBook(asin)}
                    />
                  </Col>
                ))
            }
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
