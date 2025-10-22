import React from "react";

export default function Banner({ image, height = 520, mode = "cover", position = "center", children }) {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 0,                         // banner por debajo del navbar
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        minHeight: height,
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${image})`,
        backgroundSize: mode,              // "cover" o "contain"
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0c3b0e", 
      }}
    >
      {/* Esto hace un Overlay suave*/}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      {/* Contenido opcionancl eima de la imagen 
      <div
        style={{
          position: "relative",
          maxWidth: "1140px", 
          margin: "0 auto",
          padding: "24px 16px",
          color: "white",
        }}
      >
        {children}
      </div>*/}
    </section>
  );
}
