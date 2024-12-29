import React, { useState } from 'react';
import Navbar from '../Componentes/Navbar/Navbar';
import SearchBar from '../Componentes/SearchBar/SearchBar';
import BookList from '../Componentes/BookList/BookList';
import './MainPage.css';


const books = [
    { id: 1, title: 'Cien años de soledad', author: 'Autor: Gabriel García Márquez', cover: '/assets/img/CienAños.jpg' },
    { id: 2, title: 'Don Quijote de la Mancha', author: ' Autor: Miguel de Cervantes', cover: '/assets/img/DonQuijo.jpg' },
    { id: 3, title: 'El amor en los tiempos del cólera', author: 'Autor: Gabriel García Márquez', cover: '/assets/img/ElAmorTiem.jpg' },
    { id: 4, title: '1984', author: 'Autor: George Orwell', cover: '/assets/img/1984.jpg' },
    { id: 5, title: 'Matar a un ruiseñor', author: 'Autor: Harper Lee', cover: '/assets/img/MatarUnRui.jpg' },
    { id: 6, title: 'Orgullo y prejuicio', author: 'Autor: Jane Austen', cover: '/assets/img/OrguPrejui.jpg' },
    { id: 7, title: 'Crimen y castigo', author: 'Autor: Fiódor Dostoyevski', cover: '/assets/img/CrimenCasti.jpg' },
    { id: 8, title: 'La casa de los espíritus', author: 'Autor: Isabel Allende', cover: '/assets/img/LaCasaEspiri.jpg' },
    { id: 9, title: 'Fahrenheit 451', author: 'Autor: Ray Bradbury', cover: '/assets/img/Fahren.jpg' },
    { id: 10, title: 'El túnel', author: 'Autor: Ernesto Sabato', cover: '/assets/img/tunel.jpg' }

];

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar libros según el término de búsqueda
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="main-page">
            <Navbar />
            <div className="main-content">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <BookList books={filteredBooks} />
            </div>

        </div>
    );
};

export default MainPage;