import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link para navegación
import './BookList.css';

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            {books.map((book) => (
                <div key={book.id} className="book-card">
                    <img src={book.cover} alt={book.title} className="book-cover" />
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    {/* Botón para ir a los detalles del libro */}
                    <Link to={`/book/${book.id}`}>
                        <button className="details-button">Ver Detalles</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BookList;
