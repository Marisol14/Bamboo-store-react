import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemListContainer.css";

// Importamos las imágenes correctamente desde assets
import laptopImg from "../assets/laptop.jpg";
import smartphoneImg from "../assets/smartphone.jpeg";
import camisetaImg from "../assets/camiseta.jpg";
import zapatillasImg from "../assets/zapatilla.jpeg";
import sillaGamerImg from "../assets/silla.jpeg";
import lamparaLedImg from "../assets/lampara.jpeg";

const productos = [
  { id: "1", nombre: "Laptop Gamer", categoria: "electronicos", precio: "$1500", img: laptopImg },
  { id: "2", nombre: "Smartphone", categoria: "electronicos", precio: "$800", img: smartphoneImg },
  { id: "3", nombre: "Camiseta", categoria: "remeras", precio: "$25", img: camisetaImg },
  { id: "4", nombre: "Zapatillas", categoria: "jeans", precio: "$60", img: zapatillasImg },
  { id: "5", nombre: "Silla Gamer", categoria: "hogar", precio: "$200", img: sillaGamerImg },
  { id: "6", nombre: "Lámpara LED", categoria: "hogar", precio: "$40", img: lamparaLedImg },
];

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (id) {
        setItems(productos.filter((item) => item.categoria === id));
      } else {
        setItems(productos);
      }
    }, 1000);
  }, [id]);

  return (
    <div>
      <h2 className="title">{id ? `Categoría: ${id}` : "Todos los productos"}</h2>
      <div className="product-list">
        {items.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>Precio: {item.precio}</p>
              <Link to={`/item/${item.id}`} className="detail-btn">Ver Detalles</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
