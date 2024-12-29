import { useState } from 'react';

// Custom Hook para manejar el carrito de compras
const useCart = () => {
    // Estado del carrito
    const [cart, setCart] = useState([]);

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    // Función para calcular el total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Retornar el estado del carrito y las funciones para manipularlo
    return { cart, addToCart, removeFromCart, getTotal };
};

export default useCart;
