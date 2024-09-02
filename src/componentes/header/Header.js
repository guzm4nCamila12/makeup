import React, { useEffect } from "react";
import './header.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import Cookies from "universal-cookie";

function Header() {
    const { makeupCarrito, setMakeupCarrito } = useContext(dataContext)

    function whatsapp() {
        /*const telefono = "3106326454"
        const mensaje = "Hola. Quiero más información."
        const url = `https://api.whatsapp.com/send?phone=${telefono}&texto=${encodeURIComponent(mensaje)}`*/
        const url = `https://wa.link/d44qvb`
        window.open(url, "_black")
    }

    useEffect(() => {
        const list = document.querySelectorAll(".list");

        function activeLink() {
            list.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
        }
        list.forEach((item) => item.addEventListener("click", activeLink));
    });

    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="logo" src="logo.jpg" alt="logo" />
                    <div className="titulo">
                        <p>MAKEUP CAMILA</p>
                    </div>
                    <div className="carrito">
                        <Link to="/carrito">
                            <h2 className="carrito"> 🛒{makeupCarrito.length}</h2>
                        </Link>
                    </div>
                    <div class="navigation">
                        <ul>
                            <li class="list active">
                                <a href="#">
                                    <span class="icon">
                                        <ion-icon name="home-outline"></ion-icon>
                                    </span>
                                    <span class="text">Home</span>
                                </a>
                            </li>
                            <li class="list">
                                <a href="#" onClick={whatsapp}>
                                    <span class="icon">
                                        <ion-icon name="logo-whatsapp"></ion-icon>
                                    </span>
                                    <span class="text">Contacto</span>
                                </a>
                            </li>
                            <Link to='/registro'>
                                <li class="list">
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="person-outline"></ion-icon>
                                        </span>
                                        <span class="text">Registrarse</span>
                                    </a>
                                </li>
                            </Link>
                            <Link to='/login'>
                                <li class="list">
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="log-in-outline"></ion-icon>
                                        </span>
                                        <span class="text">Iniciar sesión</span>
                                    </a>
                                </li>
                            </Link>
                            <div class="indicator"></div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header