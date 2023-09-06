import './App.css'
import logo from './assets/logo-text.png'
function Header() {
	const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };
return (
<div>
	<div className="navbar bg-red-900 fixed z-[99]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a onClick={() => scrollToSection('sobremi')} style={{ cursor: 'pointer' }}>
            Sobre Mi </a></li>
            <li><a onClick={() => scrollToSection('tienda')} style={{ cursor: 'pointer' }}>Tienda Online </a></li>
        <li><a onClick={() => scrollToSection('contacto')} style={{ cursor: 'pointer' }}>Contacto </a></li>
      </ul>
    </div>
    <a onClick={() => scrollToSection('inicio')} style={{ cursor: 'pointer' }}className="btn btn-ghost normal-case text-xl"> <img className="-mt-3" src={logo}/> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a onClick={() => scrollToSection('sobremi')} style={{ cursor: 'pointer' }}>Sobre Mi</a></li>
      <li><a onClick={() => scrollToSection('tienda')} style={{ cursor: 'pointer' }}> Tienda Online</a></li>
      <li><a onClick={() => scrollToSection('contacto')} style={{ cursor: 'pointer' }}>Contacto </a></li>
    </ul>
  </div>
</div>
</div>
)
}

export default Header

