import "./Header.css";
import addButton from '../img/add.svg';
import logo from '../img/film.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header id="header">
        <div id="logo">
          <Link to="/"> <img src={logo} alt="logo"/></Link>
          <h2>Filmes favoritos de 2022</h2>
        </div>
        <nav id="navegar">
          <ul>
            <li><Link to="/add"> <img src={addButton} alt="add button"/> </Link></li>

          </ul>
        </nav> 
      </header>  
  );
}

export default Header