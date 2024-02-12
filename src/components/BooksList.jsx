import  { useState, useEffect } from 'react';
import './styles.scss'; 

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/books?_quantity=24')
      .then(response => response.json())
      .then(data => {
        setBooks(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="books-list">
      
      <hr /> 
      <div className="book-cards">
        {books.map(book => (
          <div key={book.isbn} className="book-card">
            <img src={`https://picsum.photos/200/300?random=${book.isbn}`} alt={book.title} />
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Description: {book.description}</p>
              <div className="bottom-section">
                <button className="genre-button">Gênero</button>
                <span className="publication-date">{book.published}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;