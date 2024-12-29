import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookItem.css';

const BookItem = ({ book }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Redirige a la página de detalles del libro
        navigate(`/book/${book.id}`);
    };

    return (
        <div className="book-item" onClick={handleClick}>
            <img src={book.image} alt={book.title} className="book-cover" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
        </div>
    );
};

export default BookItem;
