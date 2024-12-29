import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from "../Componentes/Navbar/Navbar";
import { useNavigate } from 'react-router-dom';  // Para navegación
import './CartPage.css';
import Swal from "sweetalert2";

const CartPage = () => {
    const { cart, removeFromCart, getTotal } = useCart();  // Usamos el hook para acceder al carrito
    const navigate = useNavigate();  // Hook para redirigir a la página de pago

    const handleCheckout = () => {
        // Redirige a la página de pago
        navigate('/checkout');
    };

    const handleRemoveFromCart = (bookId) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esto eliminará el libro del carrito",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(bookId); // Lógica para eliminar el libro
                Swal.fire(
                    "Eliminado",
                    "El libro ha sido eliminado del carrito",
                    "success"
                );
            }
        });
    };

    return (
        <div className="cart-page">
            <Navbar />
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>No tienes productos en el carrito</p>
            ) : (
                <div>
                    {cart.map((book) => (
                        <div key={book.id} className="cart-item">
                            <img src={book.image} alt={book.title} />
                            <div>
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <p>${book.price}</p>
                                <button onClick={() => handleRemoveFromCart(book.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${getTotal()}</h3>
                    <button onClick={handleCheckout} className="checkout-button">Pagar</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
