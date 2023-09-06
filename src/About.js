import './App.css'
import avatar from './assets/banner.png'
function About() {
return (
<div id="sobremi">
	<div className="hero min-h-screen bg-orange-100">
  <div className="hero-content flex-col lg:flex-row">
	<div className="avatar">
  <div className="w-[100] h-[100] rounded-full">
    <img  src={avatar}/>
  </div>
</div>
    <div>
      <h1 className="text-5xl font-bold">Sobre Mi </h1>
      <p className="py-6">Soy una emprendedora dedicada a la importación al detalle de artículos y accesorios de vestir de alto estándar ,  calidez y calidad para un público exigente y manteniendo un valor accesible.</p>
    </div>
  </div>
</div>
</div>
)
}

export default About
