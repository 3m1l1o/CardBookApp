import { BookShow } from "./BookShow";
import BooksContext from "../context/books";

export const BookList = () => {
 const { books } = BooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
