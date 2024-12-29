import React from 'react';

const Cart = ({ cartItems, calculateTotal, removeFromCart }) => {
    return (
        <div className="cart-items">
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Tu carrito está vacío</p>
            )}
        </div>
    );
};

export default Cart;
