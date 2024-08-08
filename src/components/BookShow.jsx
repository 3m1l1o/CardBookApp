import { useState, useContext } from "react";
import BooksContext from "../context/books";
import { BookEdit } from "./BookEdit";

export const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deletedBookById } = useContext(BooksContext)

  const handleDeleteClick = () => {
    deletedBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img 
      alt="books"
      src={`http://picsum.photos/seed/${book.id}/300/200`}
      
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
