import React, { createContext, useContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveer el contexto al resto de la aplicación
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);  // Estado para el carrito

    // Función para agregar un libro al carrito
    const addToCart = (book) => {
        setCart(prevCart => {
            const existingBook = prevCart.find(item => item.id === book.id);  // Comprobar si el libro ya está en el carrito
            if (existingBook) {
                // Si el libro ya está en el carrito, aumenta la cantidad
                return prevCart.map(item =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Si no está, agrega el libro con cantidad 1
                return [...prevCart, { ...book, quantity: 1 }];
            }
        });
    };

    // Función para eliminar un libro del carrito
    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));  // Filtra el libro que debe eliminarse por su id
    };

    // Función para calcular el total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);  // Suma el precio de todos los libros multiplicado por su cantidad
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
            {children}  {/* Provee el contexto al resto de los componentes */}
        </CartContext.Provider>
    );
};

// Hook personalizado para usar el carrito en otros componentes
export const useCart = () => useContext(CartContext);
