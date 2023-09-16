import './App.css'
import {useEffect, useState} from 'react'
import useContentful from './useContentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
function Store() {
	const [products, setProducts] = useState([])
	const [productModels, setProductModels] = useState([])
	const { getProducts, getProductModels } = useContentful()
	const isMobile = window.innerWidth <= 768;
	const totalSlides = isMobile ? Math.ceil(products.length / 1): Math.ceil(products.length / 2)

	useEffect(() => {
	getProducts().then((response) => {
		setProducts(response.items)
	});
	}, [])



return (
<div id="tienda" className="bg-orange-100">
  <h1 className="text-5xl font-bold"> Tienda Virtual </h1>
  <p className="py-6"> Nuestra tienda virtual ofrece el servicio de asesoría presencial, visitas programadas con muestras de interés, showroom y asistencia a ferias de emprendedores. </p>
  <div className="carousel w-full ">
	{Array.from({ length: totalSlides }).map((_, slideIndex) => (
  <div id={`slide${slideIndex + 1}`} key={slideIndex} className="carousel-item relative w-full">
    <div className="flex justify-between w-full">
      {Array.from({ length: isMobile ? 1 : 2 }).map((_, cardIndex) => {
        const productIndex = isMobile ? slideIndex * 1 + cardIndex : slideIndex * 2 + cardIndex;
        const productData = products[productIndex];

        if (productData) {  
          return (
            <div className={`card w-${isMobile ? 'full' : '1/2'} max-sm:w-full bg-base-100 shadow-xl mx-1`} key={cardIndex}>
              <figure>
                <img
                  className="h-[1024px] w-[576px]"
                  src={`https:${productData.fields.imagenes.fields.file.url}`}
                  alt={productData.fields.nombre}
                />
		  {console.log(productData)}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{productData.fields.nombre}</h2>
                <p>{documentToReactComponents(productData.fields.descripcion)}</p>
                <div className="card-actions justify-end">
                  <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Ver Modelos</button>
		  <dialog id="my_modal_5" className="modal modal-middle max-sm:scale-[80%] max-sm:translate-x-[-20%]">

  <div className="modal-box">
 <form method="dialog">
        <button className="btn btn-sm btn-circle bg-black btn-ghost absolute right-2 top-2 z-[99]">X</button>
      </form>
		  <div className="carousel w-full">
                                {productData.fields.modelos.map((modelo, modeloIndex) => (
                                  <div id={`modal-slide${modeloIndex + 1}`} className="carousel-item relative w-full" key={modeloIndex}>
                                    <img src={`https:${modelo.fields.file.url}`} className="h-[1024px ]w-[576]" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                      <a href={`#modal-slide${modeloIndex === 0 ? productData.fields.modelos.length + 1 : modeloIndex - 0}`}
                                        className="btn btn-circle"
                                      >
                                        ❮
                                      </a>
                                      <a href={`#modal-slide${(modeloIndex + 2) % productData.fields.modelos.length}`} className="btn btn-circle">
                                        ❯
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="modal-action"></div>
                            </div>
                          </dialog>
                        </div>
                      </div>
                    </div>
                  );

        } else {
           
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
      >
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

