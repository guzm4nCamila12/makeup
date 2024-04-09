import React from 'react'

import { Routes, Route, HashRouter } from "react-router-dom";
import Registro from './Registro';
import App from '../App'

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path = '/' element={<App/>}/>
                <Route exact path = '/registro' element={<Registro/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Router
