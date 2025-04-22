import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light p-3" style={{ width: '250px' }}>
        <h4>Filters</h4>
        <ul className="list-group">
          <li className="list-group-item">Genre</li>
          <li className="list-group-item">Published Year</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container-fluid">
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Library Management</a>
        </nav>

        <div className="row">
          {/* Book List */}
          <div className="col-md-8">
            <BookList onEdit={handleEdit} refresh={refresh} />
          </div>

          {/* Book Form */}
          <div className="col-md-4">
            <BookForm selectedBook={selectedBook} refresh={handleRefresh} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Library Management System</p>
      </footer>
    </div>
  );
}

export default App;
