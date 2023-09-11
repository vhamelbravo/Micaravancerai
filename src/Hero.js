import backgroundImage from './assets/logo.jpg'

function Hero() {
	const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };
	return (
<div id="inicio">
		<div className="hero min-h-screen" style={{backgroundImage: `url(${backgroundImage})`,marginTop:  0 }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Elige accesorios calidez y calidad para completar tu outfit del día a día</h1>
      <p className="mb-5">MICARAVANCERAI es un tienda virtual con una pequeña trayectoria comercial pero con una amplia experiencia, conocimiento y estilo para la selección de los productos a la venta. </p>
      <a onClick={() => scrollToSection('tienda')} style={{ cursor: 'pointer' }}className="btn btn-primary">Ver Productos</a>
    </div>
  </div>
</div>
</div>
	)
}

export default Hero;
