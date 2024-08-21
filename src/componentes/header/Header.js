import React, { useEffect } from "react";
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import Cookies from "universal-cookie";

function Header() {
    const {makeupCarrito, setMakeupCarrito} = useContext(dataContext)

    function whatsapp(){
        /*const telefono = "3106326454"
        const mensaje = "Hola. Quiero más información."
        const url = `https://api.whatsapp.com/send?phone=${telefono}&texto=${encodeURIComponent(mensaje)}`*/
        const url = `https://wa.link/d44qvb`
        window.open(url, "_black")
    }

    /*useEffect(() => {
        if(Cookies.get("email")){
            window.location.hash = "/sesion";
        }
    });*/

    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="logo" src="logo.jpg" alt="logo"/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <VideoLibraryIcon/>
                                <a className="nav-link" href="#"> Tutoriales </a>
                            </li>
                            <li className="nav-item">
                                <WhatsAppIcon/>
                                <a className="nav-link" href="#" onClick={whatsapp}> Contacto </a>
                            </li>
                            <Link to='/registro'>
                            <li className="nav-item">
                                <AccountBoxIcon/>
                                <a className="nav-link"> Registrarse </a>
                            </li>
                            </Link>
                            <Link to='/login'>
                            <li className="nav-item">
                                <LoginIcon/>
                                <a className="nav-link"> Iniciar sesión </a>
                            </li>
                            </Link>
                            <Link to="/carrito">
                                <h2 className="carrito"> 🛒{makeupCarrito.length}</h2>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header