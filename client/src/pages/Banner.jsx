  import React from "react";


  export default function Banner({ img, height = 750, mode = "cover", position = "center", children }) {
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
          backgroundImage: `url(${img})`,
          backgroundSize: mode,              
          backgroundPosition: position,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0c3b0e"
          
        }}
      >
      
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
      
      </section>
    );
  }
