import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../Componentes/LandingPage/LandingPage';
import { CartProvider } from '../context/CartContext';
import MainPage from '../pages/MainPage';
import BookPage from '../pages/BookPage';
import CartPage from '../pages/CartPage';
import Checkout from '../pages/Checkout';
import BookList from '../Componentes/BookList/BookList';
import books from '../books';

function App() {
    return (
        <Router>
            <CartProvider>  {/* Envuelve tu aplicación con el CartProvider */}
                <Routes>

                    <Route path="/" element={<LandingPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/books" element={<BookList books={books} />} />
                    <Route path="/book/:id" element={<BookPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<Checkout />} />

                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;
