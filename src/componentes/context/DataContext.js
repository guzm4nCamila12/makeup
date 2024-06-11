import { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [makeupCarrito, setMakeupCarrito] = useState([])
    const [cantidadElementos, setCantidadElementos] = useState(0)

    return (
        <dataContext.Provider value = {{ makeupCarrito, setMakeupCarrito, cantidadElementos, setCantidadElementos }}> { children } </dataContext.Provider>
    )
}

export default DataProvider;