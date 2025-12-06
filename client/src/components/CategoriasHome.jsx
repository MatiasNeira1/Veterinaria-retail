import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PerroImg from "/img/categorias/foto-perro-categorias.jpg";
import GatoImg from "/img/categorias/foto-gato-categorias.jpg";
import FarmaciaImg from "/img/categorias/foto-farmacia-categorias.webp";
import AccesoriosImg from "/img/categorias/foto-accesorio-categorias.webp";

const categorias = [
  { key: "perro", titulo: "PERRO", img: PerroImg, to: "/productos?cat=perro" },
  { key: "gato", titulo: "GATO", img: GatoImg, to: "/productos?cat=gato" },
  { key: "farmacia", titulo: "FARMACIA", img: FarmaciaImg, to: "/Productos-Farmacia" },
  { key: "accesorios", titulo: "ACCESORIOS", img: AccesoriosImg, to: "/productos?cat=accesorios" },
];

export default function CategoriasHome() {
  const navigate = useNavigate();

  const handleClickCard = (ruta) => {
    if (ruta) navigate(ruta);
  };

  return (
    <section
      style={{
        backgroundColor: "white",
        padding: "48px 0 64px",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "800",
            marginBottom: "32px",
            color: "black",
            textAlign: "center",
          }}
        >
          Comprar por categorías
        </h2>

        {/* Contenedor de cards centradas, sin scroll */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {categorias.map((cat) => (
            <div
              key={cat.key}
              onClick={() => handleClickCard(cat.to)}
              style={{
                flex: "0 0 220px",
                backgroundColor: "#f3f3f3",
                borderRadius: "18px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 12px 18px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.28)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(0,0,0,0.28)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 210,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.titulo}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: 10,
                  fontWeight: "800",
                  letterSpacing: "1px",
                  fontSize: "1rem",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {cat.titulo}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
