import { useSelector } from "react-redux";
import { selectAsyncBooks } from "./asyncBooksSelectors";
import { useAppDispatch } from "../redux-hooks";
import { useEffect } from "react";
import { fetchAllBooks } from "./booksAsyncActions";
import BookCard from "../components/BookCard";

const AsyncBookList = () => {
  const books = useSelector(selectAsyncBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.volumeInfo.title}
          categories={book.volumeInfo.categories}
          image={book.volumeInfo.imageLinks.thumbnail}
          authors={book.volumeInfo.authors}
        />
      ))}
    </ul>
  );
};

export default AsyncBookList;
