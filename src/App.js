import "./App.css";
import React from "react";
import Header from "./Header.js";
import Hero from "./Hero.js";
import About from "./About.js";
import Store from "./Store.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="App ">
        <Header />
        <Hero />
        <About />
        <Store />
        <Contact />
    </div>
  );
}

export default App;
