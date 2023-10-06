import "./App.css";
import React, { useState } from "react";
import logo from "./assets/logo-text.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ selectedProducts, setSelectedProducts }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const removeFromCart = (indexToRemove) => {
    const updatedCart = [...selectedProducts];
    updatedCart.splice(indexToRemove, 1);
    setSelectedProducts(updatedCart);
  };
  function calculateTotalPrice(selectedProducts) {
    const totalPrice = selectedProducts.reduce((total, product) => {
      const productPrice = parseFloat(
        product.fields.precio.replace(/\./g, "").replace(","),
      );

      return total + productPrice;
    }, 0);
    return totalPrice;
  }
  const total = calculateTotalPrice(selectedProducts);
  const formattedTotal = total.toLocaleString("es-ES");
  return (
    <div>
      <div className="navbar bg-red-900 fixed z-[99]">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden -translate-x-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => scrollToSection("sobremi")}
                  style={{ cursor: "pointer" }}
                >
                  Sobre Mi{" "}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("tienda")}
                  style={{ cursor: "pointer" }}
                >
                  Tienda Online{" "}
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("contacto")}
                  style={{ cursor: "pointer" }}
                >
                  Contacto{" "}
                </a>
              </li>
              <li>
                {" "}
                <button id="menu-button-mobile" onClick={toggleMenu}>
                  {" "}
                  Carrito <ShoppingCartIcon /> {selectedProducts.length}{" "}
                </button>{" "}
              </li>
              {isMenuVisible && (
                <div className="fixed bottom-4 left-4 w-full h-full flex items-start justify-end">
                  <button
                    onClick={toggleMenu}
                    className="btn btn-sm btn-circle btn-ghost absolute right-8 top-8"
                  >
                    ✕
                  </button>
                  <div className="menu max-w-screen-sm max-h-[100vh] bg-base-200 w-96 h-auto rounded-box m-5 right-0 ">
                    {selectedProducts.map((product, index) => (
                      <ul key={index}>
                        <div className="hero-content flex-col lg:flex-row ">
                          <div className="mt-8">
                            <h1 className="text-3xl font-bold">
                              {" "}
                              {product.fields.nombre}{" "}
                            </h1>
                            <p className="py-6">
                              Precio: $ {product.fields.precio}{" "}
                            </p>
                            <button
                              onClick={removeFromCart}
                              className="btn bg-red-900"
                            >
                              {" "}
                              Eliminar{" "}
                            </button>
                          </div>
                        </div>
                      </ul>
                    ))}
                    <div className="mt-auto">
                      <p className="text-2xl pb-4 text-left ">
                        {" "}
                        Total: $ {formattedTotal}{" "}
                      </p>
                      <Link to="/pago"
		      className="btn btn-primary">
                          Comprar{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
          <a
            onClick={() => scrollToSection("inicio")}
            style={{ cursor: "pointer" }}
            className="btn btn-ghost normal-case text-xl"
          >
            {" "}
            <img className="-mt-3 scale-110  max-sm:-ml-20 " src={logo} />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                onClick={() => scrollToSection("sobremi")}
                style={{ cursor: "pointer" }}
              >
                Sobre Mi
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("tienda")}
                style={{ cursor: "pointer" }}
              >
                {" "}
                Tienda Online
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contacto")}
                style={{ cursor: "pointer" }}
              >
                Contacto{" "}
              </a>
            </li>
            <li>
              {" "}
              <button id="menu-button" onClick={toggleMenu}>
                {" "}
                <ShoppingCartIcon /> {selectedProducts.length}{" "}
              </button>{" "}
            </li>
            {isMenuVisible && (
              <div className="fixed bottom-4 left-4 w-full h-full flex items-start justify-end">
                <button
                  onClick={toggleMenu}
                  className="btn btn-sm btn-circle btn-ghost absolute right-[23rem] top-8"
                >
                  ✕
                </button>
                <div className="menu bg-base-200 w-96 h-screen rounded-box m-5 right-0 ">
                  {selectedProducts.map((product, index) => (
                    <ul key={index}>
                      <div className="hero-content flex-col lg:flex-row ">
                        <img
                          src={`https:${product.fields.imagenes.fields.file.url}`}
                          className="h-[142px] w-20 max-w-sm rounded-lg shadow-2xl my-8"
                        />
                        <div className="mt-8">
                          <h1 className="text-3xl font-bold">
                            {" "}
                            {product.fields.nombre}{" "}
                          </h1>
                          <p className="py-6">
                            Precio: $ {product.fields.precio}
                          </p>
                          <button
                            onClick={removeFromCart}
                            className="btn bg-red-900"
                          >
                            {" "}
                            Eliminar{" "}
                          </button>
                        </div>
                      </div>
                    </ul>
                  ))}
                  <div className="mt-auto">
                    <p className="text-2xl pb-4 text-left ">
                      {" "}
                      Total: $ {formattedTotal}{" "}
                    </p>
                    <Link to="/pago"
		     className="btn btn-primary">
                      Comprar{" "}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  setSelectedProducts: PropTypes.func.isRequired,
};

export default Header;
