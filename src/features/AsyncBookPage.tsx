import { Container } from "react-bootstrap";
import BookPage from "../components/BookPage";
import { useSelector } from "react-redux";
import { selectAsyncBookPage } from "./asyncBooksSelectors";
import Loader from "../components/Loader";

const AsyncBookPage = () => {
  const book = useSelector(selectAsyncBookPage);

  return (
    <Container>
      {book.isLoading ? (
        <Loader />
      ) : (
        <BookPage
          image={book.volumeInfo?.imageLinks?.medium}
          categories={book.volumeInfo?.categories}
          title={book.volumeInfo?.title}
          authors={book.volumeInfo?.authors}
          description={book.volumeInfo?.description}
        />
      )}
    </Container>
  );
};

export default AsyncBookPage;
