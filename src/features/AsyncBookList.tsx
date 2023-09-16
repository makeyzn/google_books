import { useSelector } from "react-redux";
import { selectAsyncBooks } from "./asyncBooksSelectors";
import { useAppDispatch } from "../redux-hooks";
import { useEffect } from "react";
import { fetchAllBooks, fetchBook } from "./booksAsyncActions";
import BookCard from "../components/BookCard";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AsyncBookList = () => {
  const books = useSelector(selectAsyncBooks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchAllBooks({ search: "react", sorting: "newest", category: "" })
    );
  }, []);

  const openBook = (id: string) => {
    dispatch(fetchBook(id));
    navigate("/bookPage");
  };

  return (
    <Row xs={2} md={3} lg={4} xl={5} className="g-4 container-fluid mt-3">
      {books &&
        books.items &&
        books.items.map((book, idx) => (
          <Col key={idx}>
            <BookCard
              onClick={() => openBook(book.id)}
              key={book?.id}
              title={book.volumeInfo?.title}
              categories={book.volumeInfo?.categories}
              image={book.volumeInfo.imageLinks?.thumbnail}
              authors={book.volumeInfo?.authors}
            />
          </Col>
        ))}
    </Row>
  );
};

export default AsyncBookList;
