// import Logo from '../NavLogo.svg'
import '../css/navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src='./images/NavLogo.svg' alt="" />
                {/* <img src={Logo} alt="" /> */}
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies" target="_blank">Favourites</Link></li>
                    <li><Link to="/add-favourites">Add to Favourites</Link></li>
                    <li><Link to="">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
