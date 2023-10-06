import "./App.css";
import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PropTypes from "prop-types";

function Store({ selectedProducts, setSelectedProducts }) {
  const [products, setProducts] = useState([]);
  const { getProducts } = useContentful();
  const isMobile = window.innerWidth <= 1024;
  const productsPerPage = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(products.length / productsPerPage);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.items);
    });
  }, []);

  const addToCart = (productData) => {
    setSelectedProducts([...selectedProducts, productData]);
  };
  const handleSeeCart = () => {
    const button = document.getElementById("menu-button");
    const buttonMobile = document.getElementById("menu-button-mobile");

    document.getElementById("buy-modal").close();
    if (isMobile === false) {
      button.click();
    } else {
      buttonMobile.click();
    }
  };

  return (
    <div id="tienda" className="bg-orange-100">
      <h1 className="text-5xl font-bold"> Tienda Virtual </h1>
      <p className="py-6">
        {" "}
        Nuestra tienda virtual ofrece el servicio de asesoría presencial,
        visitas programadas con muestras de interés, showroom y asistencia a
        ferias de emprendedores.{" "}
      </p>
      <div className="carousel w-full">
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            id={`slide${slideIndex + 1}`}
            key={slideIndex}
            className="carousel-item relative w-full"
          >
            <div className="flex justify-between w-full">
              {Array.from({ length: productsPerPage }).map((_, cardIndex) => {
                const productIndex = slideIndex * productsPerPage + cardIndex;
                const productData = products[productIndex];

                if (productData) {
                  return (
                    <div
                      className={`card w-${
                        isMobile ? "full" : "1/2"
                      } max-sm:w-full bg-base-100 shadow-xl mx-1`}
                      key={cardIndex}
                    >
                      <figure>
                        <img
                          className={`h-[1024px] w-${
                            isMobile ? "full" : "1/2"
                          }`}
                          src={`https:${productData.fields.imagenes.fields.file.url}`}
                          alt={productData.fields.nombre}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          {productData.fields.nombre}
                        </h2>
                        <p>
                          {documentToReactComponents(
                            productData.fields.descripcion,
                          )}
                        </p>
                        <h3 className="text-xl text-left">
                          {" "}
                          Precio: $ {productData.fields.precio}{" "}
                        </h3>
                        <div className="card-actions justify-end">
                          <button
                            onClick={() =>
                              document
                                .getElementById(`my_modal_${productIndex}`)
                                .showModal()
                            }
                            className="btn btn-primary"
                          >
                            Ver Modelos
                          </button>
                          <button
                            onClick={() => {
                              document.getElementById("buy-modal").showModal();
                              addToCart(productData);
				    console.log(productData.fields.slug)
                            }}
                            className="snipcart-add-item btn btn-primary"
			  data-item-id="starry-night"
  data-item-price="79.99"
  data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
  data-item-image="/assets/images/starry-night.jpg"
  data-item-name="The Starry Night"
                          >
                            Comprar
                          </button>
                          <dialog
                            id={`my_modal_${productIndex}`}
                            className="modal modal-middle"
                          >
                            <div className="modal-box">
                              <form method="dialog">
                                <button className="btn btn-sm btn-circle bg-black btn-ghost absolute right-2 top-2 z-[99]">
                                  X
                                </button>
                              </form>
                              {productData &&
                              productData.fields.modelos?.length > 0 ? (
                                <div className="carousel w-full">
                                  {productData.fields.modelos.map(
                                    (modelo, modeloIndex) => (
                                      <div
                                        id={`modal-slide${modeloIndex + 1}`}
                                        className={`carousel-item relative w-full ${
                                          modeloIndex === currentSlide
                                            ? "block"
                                            : "hidden"
                                        }`} // Show or hide the slide based on currentSlide value
                                        key={modeloIndex}
                                      >
                                        <img
                                          src={`https:${modelo.fields.file.url}`}
                                          className="h-[1024px] w-[576px]"
                                        />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <button
                                            onClick={() => {
                                              setCurrentSlide(
                                                (currentSlide -
                                                  1 +
                                                  productData.fields.modelos
                                                    .length) %
                                                  productData.fields.modelos
                                                    .length,
                                              );
                                            }}
                                            className="btn btn-circle"
                                          >
                                            ❮
                                          </button>
                                          <button
                                            onClick={() => {
                                              setCurrentSlide(
                                                (currentSlide + 1) %
                                                  productData.fields.modelos
                                                    .length,
                                              );
                                            }}
                                            className="btn btn-circle"
                                          >
                                            ❯
                                          </button>
                                        </div>
                                      </div>
                                    ),
                                  )}
                                </div>
                              ) : (
                                <p> No hay más modelos disponibles </p>
                              )}
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
              <button
                onClick={() => {
                  const prevSlide =
                    ((slideIndex + totalSlides - 1) % totalSlides) + 1;
                  document.getElementById(`slide${prevSlide}`).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() => {
                  const nextSlide = ((slideIndex + 1) % totalSlides) + 1;
                  document.getElementById(`slide${nextSlide}`).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
            <dialog id="buy-modal" className="modal modal-center ">
              <div className="modal-box max-md:h-50">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Producto agregado a carrito
                </h3>
                <br />
                <button onClick={handleSeeCart} className="btn">
                  {" "}
                  Ver Carrito{" "}
                </button>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
Store.propTypes = {
  setSelectedProducts: PropTypes.func.isRequired,
  selectedProducts: PropTypes.array.isRequired,
};

export default Store;
