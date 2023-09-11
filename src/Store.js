import './App.css'
import product1 from './assets/product-1.jpg'
import product2 from './assets/product-2.jpg'
import product3 from './assets/product-3.jpg'
import product4 from './assets/product-4.jpg'
import product5 from './assets/product-5.jpg'
import product6 from './assets/product-6.jpg'
import product7 from './assets/product-7.jpg'
import product8 from './assets/product-8.jpg'
import product9 from './assets/product-9.jpg'
import {useEffect, useState} from 'react'
import useContentful from './useContentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Store() {
	const [products, setProducts] = useState([])
	const { getProducts } = useContentful()
	const totalSlides = Math.ceil(products.length / 3)

	useEffect(() => {
	getProducts().then((response) => {
		setProducts(response.items)
	});
	}, [])
return (
<div id="tienda" className="bg-orange-100">
  <h1 className="text-5xl font-bold"> Tienda Virtual </h1>
  <p className="py-6"> Nuestra tienda virtual ofrece el servicio de asesoría presencial, visitas programadas con muestras de interés, showroom y asistencia a ferias de emprendedores. </p>
  <div className="carousel w-full">
	{Array.from({ length: totalSlides }).map((_, slideIndex) => (
  <div id={`slide${slideIndex + 1}`} key={slideIndex} className="carousel-item relative w-full">
    <div className="flex justify-between w-full">
      {Array.from({ length: 2 }).map((_, cardIndex) => {
        const productIndex = slideIndex * 3 + cardIndex;
        const productData = products[productIndex];

        if (productData) { // Check if product data exists
          return (
            <div className="card w-1/2 max-sm:w-full bg-base-100 shadow-xl mx-1" key={cardIndex}>
              <figure>
                <img
                  className="h-[1920px] w-[1080px]"
                  src={`https:${productData.fields.imagenes.fields.file.url}`}
                  alt={productData.fields.nombre}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{productData.fields.nombre}</h2>
                <p>{documentToReactComponents(productData.fields.descripcion)}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Ver Modelos</button>
                </div>
              </div>
            </div>
          );
        } else {
          // Return an empty div or placeholder if no product data is available
          return <div key={cardIndex}></div>;
        }
      })}
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a
        href={`#slide${(slideIndex + totalSlides - 1) % totalSlides + 1}`} // Calculate the previous slide index
        className="btn btn-circle"
      >
        ❮
      </a>
      <a
        href={`#slide${(slideIndex + 1) % totalSlides + 1}`} // Calculate the next slide index
        className="btn btn-circle"
      >2
        ❯
      </a>
    </div>
  </div>
))}
    </div>
	</div>
)
}

export default Store

