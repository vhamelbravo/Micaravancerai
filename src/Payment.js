import React from "react";
import logo from "./assets/logo-text.png";
import { Link } from "react-router-dom";
import image from "./assets/despacho.jpg";
import backgroundImage from "./assets/logo.jpg";
import "./App.css";

function Payment() {
  return (
	  <>
	  <div className="navbar bg-red-900 fixed z-[99]">
  <Link to="/" className="btn btn-ghost normal-case text-xl"><img className="-mt-3 scale-110  max-sm:-ml-20 " src={logo} />{" "}</Link>
</div>
	  <div className="hero min-h-screen"
		style={{ backgroundImage: `url(${backgroundImage})`, marginTop: 0 }}
		>
		<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">Información de Despacho</h2>
    <p>Cta Corriente Banco  Santander. 

MICARAVANCERAI SpA
<br/>
Número: 920 98206
<br/>
Correo: m.a.chamorro.o@gmail.con

Rut.:77.648.951-4</p>
    <div className="card-actions justify-end">
      <a href="wa.link/t1z3rf" className="btn btn-primary">Contactar en WSP </a>
    </div>
  </div>
</div>
		</div>
	  </>
  )
}

export default Payment;
