import React from "react";
import './productos.css'

const products = [
    { id: 1, name: 'Producto 1', price: '$2500', img: '' },
    { id: 2, name: 'Producto 2', price: '$3100', img: '' },
    { id: 3, name: 'Producto 3', price: '$2750', img: '' },
    { id: 4, name: 'Producto 4', price: '$3300', img: '' },
    { id: 5, name: 'Producto 5', price: '$3500', img: '' },
    { id: 6, name: 'Producto 6', price: '$4100', img: '' },
    { id: 7, name: 'Producto 7', price: '$4100', img: '' },
    { id: 8, name: 'Producto 8', price: '$3950', img: '' },
    { id: 9, name: 'Producto 9', price: '$2750', img: '' },
    { id: 9, name: 'Producto 10', price: '$2900', img: '' },
    { id: 9, name: 'Producto 11', price: '$3800', img: '' },
    { id: 9, name: 'Producto 12', price: '$2100', img: '' },

];

function Productos() {
    return (
        <div className="product-gallery">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Productos;
