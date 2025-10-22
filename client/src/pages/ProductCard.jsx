function ProductCard({ img, titulo, precio, onAdd }) {
  return (
    <div className="card">
      <img src={img} alt={titulo} />
      <h4>{titulo}</h4>
      <p>${precio} CLP</p>
      <button onClick={onAdd}>Añadir</button>
    </div>
  );
}


//Guarde este ejemplo para hacer las cards para los productos
//Esto es ocupar props
// Padre
<ProductCard
  img="/img/pelota.jpg"
  titulo="Pelota para perro"
  precio={4990}
  onAdd={() => carrito.add("VR001")}
/>