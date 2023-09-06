import backgroundImage from './assets/logo.jpg'

function Hero() {
	return (
<div id="inicio">
		<div className="hero min-h-screen" style={{backgroundImage: `url(${backgroundImage})`,marginTop:  0 }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Elige accesorios calidez y calidad para completar tu outfit del día a día</h1>
      <p className="mb-5">MICARAVANCERAI es un tienda con una pequeña trayectoria comercial pero con una amplia experiencia, conocimiento y estilo de cada producto seleccionado para su venta. </p>
      <button className="btn btn-primary">Ver Productos</button>
    </div>
  </div>
</div>
</div>
	)
}

export default Hero;
