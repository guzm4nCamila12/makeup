import React from 'react'

import { Routes, Route, HashRouter } from "react-router-dom";
import Registro from './Registro';
import App from '../App'
import Login from './Login';
import InicioSesion from './InicioSesion';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path = '/' element = {<App/>}/>
                <Route exact path = '/registro' element = {<Registro/>}/>
                <Route exact path ='/login' element = {<Login/>}/>
                <Route exact path = '/sesion-iniciada' element = {<InicioSesion/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Router
