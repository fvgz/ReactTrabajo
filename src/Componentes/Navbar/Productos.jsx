import React from "react";
import './productos.css'

const products = [
    { id: 1, name: 'Paleta de Sombras', price: '$2500' , img:'/paleta.jpg'},
    { id: 2, name: 'Paleta de Sombras', price: '$3100', img: '/paleta2.jpg' },
    { id: 3, name: 'Paleta de Sombras', price: '$2750', img: '/paleta3.jpg' },
    { id: 4, name: 'Paleta de Sombras', price: '$3300', img: '/paleta4.jpg' },
    { id: 5, name: 'Paleta de Sombras', price: '$3500', img: '/paleta5.jpg' },
    { id: 6, name: 'Contorno', price: '$4100', img: '/contorno.jpg' },
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
