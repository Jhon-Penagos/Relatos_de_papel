import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';
import Navbar from "../Componentes/Navbar/Navbar";
import Swal from "sweetalert2";

const Checkout = () => {
    const { cart, getTotal } = useCart(); // Obtener los productos del carrito y el total
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: ''
    }); // Datos del formulario

    // Función para manejar los cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí simulas el procesamiento del pago
        Swal.fire({
            title: "¡Pago exitoso!",
            text: "Gracias por tu compra. Recibirás un correo con los detalles.",
            icon: "success",
            confirmButtonText: "Aceptar"
        }).then(() => {

            window.location.href = "/main";
        });
    };

    return (
        <div className="checkout">
            <Navbar />
            <div className="checkout-content">
                <h2>Finaliza tu Compra</h2>
                <div className="checkout-summary">
                    <h3>Resumen de la Compra</h3>
                    {cart.length === 0 ? (
                        <p>No tienes productos en el carrito</p>
                    ) : (
                        <div>
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        <span>{item.title}</span> - ${item.price} x {item.quantity}
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ${getTotal()}</h3>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <h3>Detalles de Envío y Pago</h3>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Dirección de Envío</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cardNumber">Número de Tarjeta</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cardExpiry">Fecha de Expiración</label>
                        <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cardCVC">CVC</label>
                        <input
                            type="text"
                            id="cardCVC"
                            name="cardCVC"
                            value={formData.cardCVC}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="checkout-button">Realizar Pago</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
