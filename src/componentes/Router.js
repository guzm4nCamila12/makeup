import React from 'react'

import { Routes, Route, HashRouter } from "react-router-dom";
import Registro from './Registro';
import App from '../App'
import Login from './Login';
import InicioSesion from './InicioSesion';
import DataProvider from './context/DataContext';
import CarritoVacio from './carrito/CarritoVacio';
import CarritoElements from './carrito/CarritoElements';
import CarritoContents from './carrito/CarritoContents';

function Router() {
    return (
        <DataProvider>
            <HashRouter>
                <Routes>
                    <Route exact path = '/' element = {<App/>}/>
                    <Route exact path = '/registro' element = {<Registro/>}/>
                    <Route exact path ='/login' element = {<Login/>}/>
                    <Route exact path = '/sesion-iniciada' element = {<InicioSesion/>}/>
                    <Route exact path = '/carrito-vacio' element = {<CarritoVacio/>}/>
                    <Route exact path = '/carrito' element = {<CarritoContents/>}/>
                </Routes>
            </HashRouter>
        </DataProvider>
    )
}

export default Router
