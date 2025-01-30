import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemDetailContainer.css"; // Asegúrate de importar los estilos

// Simulación de productos
const productos = [
  { id: "1", nombre: "Laptop Gamer", descripcion: "Laptop potente para gaming y trabajo", categoria: "electronicos", precio: "$1500", img: "/assets/laptop.jpg" },
  { id: "2", nombre: "Smartphone", descripcion: "Smartphone con cámara avanzada y gran batería", categoria: "electronicos", precio: "$800", img: "/assets/smartphone.jpeg" },
  { id: "3", nombre: "Camiseta", descripcion: "Camiseta de algodón de alta calidad", categoria: "ropa", precio: "$25", img: "/assets/camiseta.jpeg" },
  { id: "4", nombre: "Zapatillas", descripcion: "Zapatillas deportivas de última generación", categoria: "ropa", precio: "$60", img: "/assets/zapatilla.jpeg" },
  { id: "5", nombre: "Silla Gamer", descripcion: "Silla ergonómica para largas sesiones de trabajo y juego", categoria: "hogar", precio: "$200", img: "/assets/silla.jpeg" },
  { id: "6", nombre: "Lámpara LED", descripcion: "Lámpara de bajo consumo con luz regulable", categoria: "hogar", precio: "$40", img: "/assets/lampara.jpeg" },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const producto = productos.find((item) => item.id === id);

  return (
    <div className="detail-container">
      {producto ? (
        <div className="detail-card">
          <img src={producto.img} alt={producto.nombre} className="detail-img" />
          <div className="detail-info">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p className="detail-price"><strong>Precio:</strong> {producto.precio}</p>
            <Link to="/" className="back-btn">Volver al catálogo</Link>
          </div>
        </div>
      ) : (
        <p className="not-found">Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

