import './App.css'
import product1 from './assets/product-1.jpg'
import product2 from './assets/product-2.jpg'
import product3 from './assets/product-3.jpg'
function Store() {
return (
	<div id="tienda" className="bg-orange-100">
	<h1 className="text-5xl font-bold"> Tienda Virtual </h1>
	<p className="py-6"> Nuestra tienda virtual ofrece el servicio de accesoria presencial, visitas programadas con muestras de interés , showroom y asistencia a ferias de emprendedores.  </p> 
	<div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex justify-between w-full">
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img className="h-[80rem] w-[40rem]" src={product1} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Billeteras de cuero</h2>
        <p>Finas billeteras de cuero con múltiples compartimentos interiores, delicadas terminaciones y costuras, finos cierres y bolsillos para tarjetas y documentos. Hermosos colores y modelos.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img className="h-[80rem] w-[40rem]" src={product2} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Maletín de cuero</h2>
        <p>Maletín único y exclusivo para viajes  de negocios. 
Elaborado en fino y liviano cuero, múltiples compartimientos interiores exteriores, correa de hombro de excelencia y broches y cierres de alta calidad. 
Stock color negro. 
 </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product3} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Bandoleras de cuero</h2>
        <p>Bandoleras de fino cuero con delicadas terminaciones y costuras, dos divisiones interior, correa de hombro, cierres y hebillas finas. 
Stock Colores Burdeo y Pitón Negro/ Café. 
Origen: origen  Turco. </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex justify-between w-full">
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product1} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Billeteras de cuero</h2>
        <p>Finas billeteras de cuero con múltiples compartimentos interiores, delicadas terminaciones y costuras, finos cierres y bolsillos para tarjetas y documentos. Hermosos colores y modelos.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product2} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Maletín de cuero</h2>
        <p>Maletín único y exclusivo para viajes  de negocios. 
Elaborado en fino y liviano cuero, múltiples compartimientos interiores exteriores, correa de hombro de excelencia y broches y cierres de alta calidad. 
Stock color negro. 
Consulta valor por WS. </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product3} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Bandoleras de cuero</h2>
        <p>Bandoleras de fino cuero con delicadas terminaciones y costuras, dos divisiones interior, correa de hombro, cierres y hebillas finas. 
Stock Colores Burdeo y Pitón Negro/ Café. 
Origen: origen  Turco. </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex justify-between w-full">
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product1} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Billeteras de cuero</h2>
        <p>Finas billeteras de cuero con múltiples compartimentos interiores, delicadas terminaciones y costuras, finos cierres y bolsillos para tarjetas y documentos. Hermosos colores y modelos.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product2} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Maletín de cuero</h2>
        <p>Maletín único y exclusivo para viajes  de negocios. 
Elaborado en fino y liviano cuero, múltiples compartimientos interiores exteriores, correa de hombro de excelencia y broches y cierres de alta calidad. 
Stock color negro. 
Consulta valor por WS. </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product3} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Bandoleras de cuero</h2>
        <p>Bandoleras de fino cuero con delicadas terminaciones y costuras, dos divisiones interior, correa de hombro, cierres y hebillas finas. 
Stock Colores Burdeo y Pitón Negro/ Café. 
Origen: origen  Turco. </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="flex justify-between w-full">
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product1} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Billeteras de cuero</h2>
        <p>Finas billeteras de cuero con múltiples compartimentos interiores, delicadas terminaciones y costuras, finos cierres y bolsillos para tarjetas y documentos. Hermosos colores y modelos.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product2} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Maletín de cuero</h2>
        <p>Maletín único y exclusivo para viajes  de negocios. 
Elaborado en fino y liviano cuero, múltiples compartimientos interiores exteriores, correa de hombro de excelencia y broches y cierres de alta calidad. 
Stock color negro. 
Consulta valor por WS. </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-1">
<figure><img  className="h-[80rem] w-[40rem]"  src={product3} alt="Product 1" /></figure>
      <div className="card-body">
        <h2 className="card-title">Bandoleras de cuero</h2>
        <p>Bandoleras de fino cuero con delicadas terminaciones y costuras, dos divisiones interior, correa de hombro, cierres y hebillas finas. 
Stock Colores Burdeo y Pitón Negro/ Café. 
Origen: origen  Turco. </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Consultar Precio</button>
        </div>
      </div>

          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
	</div>
)
}

export default Store
