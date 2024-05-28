import React from 'react'
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie'
import Carrusel from './carrusel/Carrusel';
import Body from './body/CardList'
import Footer from './footer/Footer';
import SesionExpired from './sesionExpired/SesionExpired';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function InicioSesion() {

    const cookie = new Cookies();
    const email = cookie.get('email'); 
    const nombres = cookie.get('nombres');
    const apellidos = cookie.get('apellidos');

    function Cerrar(){
        Swal.fire({
            title: "¿Estas seguro de cerrar sesion?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
        })
        .then((result) => {
            if(result.isConfirmed){
                cookie.remove("nombres");
                cookie.remove("apellidos");
                cookie.remove("email");
                window.location.hash = '/'
            }
        })
    }
  return (
    <div>
      <div>
        <h2> Bienvenid@: {nombres} {apellidos} </h2>
        <h2> {email} </h2>
      </div>
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
                                <AddLinkIcon/>
                                <a className="nav-link"> Referencias </a>
                            </li>
                            <li className="nav-item">
                                <AddIcCallIcon/>
                                <a className="nav-link"> Contacto </a>
                            </li>
                        </ul>
                        <button class="btn btn-outline-info" onClick={Cerrar}> Cerrar Sesion </button>
                    </div>
                </div>
            </nav>
        </div>
        <Carrusel/>
        <Body/>
        <Footer/>
        <SesionExpired/>
    </div>
  )
}
