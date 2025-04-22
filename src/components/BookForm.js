import React, { useState, useEffect } from 'react';
import { addBook, updateBook } from '../services/bookService';

function BookForm({ selectedBook, refresh }) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: ''
  });

  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      setBook({ title: '', author: '', isbn: '', publishedYear: '' });
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.id) {
      updateBook(book.id, book).then(() => refresh());
    } else {
      addBook(book).then(() => refresh());
    }
    setBook({ title: '', author: '', isbn: '', publishedYear: '' });
  };

  return (
    <div className="card my-4">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">{book.id ? 'Edit Book' : 'Add New Book'}</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="title"
              value={book.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              name="author"
              value={book.author}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">ISBN</label>
            <input
              name="isbn"
              value={book.isbn}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter ISBN number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Published Year</label>
            <input
              name="publishedYear"
              value={book.publishedYear}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter year"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            {book.id ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
