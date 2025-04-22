import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap';

function BookList({ onEdit }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    getBooks().then(response => {
      setBooks(response.data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (id) => {
    deleteBook(id).then(() => fetchBooks());
  };

  return (
    <Card className="mb-4">
      <Card.Header as="h5">📚 Book List</Card.Header>
      <ListGroup variant="flush">
        {books.length === 0 && (
          <ListGroup.Item>No books found.</ListGroup.Item>
        )}
        {books.map(book => (
          <ListGroup.Item key={book.id}>
            <Row className="align-items-center">
              <Col md={8}>
                <strong>{book.title}</strong> by {book.author} ({book.publishedYear})
              </Col>
              <Col md={4} className="text-end">
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(book)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default BookList;

