import './Navbar.css';
import { Link } from 'react-router-dom';  // Importamos Link para navegación sin recarga de página
const Navbar = () => {
    return (
        <nav className="navbar">

            <Link to="/" className="navbar-logo">Inicio <img src="/assets/img/Inicio.png" alt="Carrito de Compras" width="40" height="40"/></Link>
            <ul className="navbar-menu">
                <li><Link to="/main">Librería</Link></li>  {/* Link a la librería */}
                <li><Link to="/about">Nosotros</Link></li>  {/* Link a la página "Nosotros" */}
                <li><Link to="/contact">Contacto</Link></li>  {/* Link a la página "Contacto" */}
                <li><Link to="/cart">Carrito de Compras <img src="/assets/img/Carrito_compras.png" alt="Carrito de Compras" width="40" height="40" /></Link></li>  {/* Link al carrito */}
            </ul>

            <div className="navbar-search">
                <input type="text" placeholder="Buscar libros..." />
                <button>Buscar</button>
            </div>
        </nav>
    );
};

export default Navbar;
