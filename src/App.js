import './App.css';
import Header from './Header.js'
import Hero from './Hero.js'
import About from './About.js'
import Store from './Store.js'
import Contact from './Contact.js'

function App() {
  return (
    <div className="App">
	  <div className="h-screen w-screen bg-orange-100">
	  <Header />
	  <Hero />
	  <About />
	  <Store />
	  <Contact />
	  </div>
    </div>
  );
}

export default App;
