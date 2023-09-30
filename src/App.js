import "./App.css";
import React, { useState } from "react";
import Header from "./Header.js";
import Hero from "./Hero.js";
import About from "./About.js";
import Store from "./Store.js";
import Contact from "./Contact.js";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <div className="App ">
      <Header
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Hero />
      <About />
      <Store
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Contact />
    </div>
  );
}

export default App;
