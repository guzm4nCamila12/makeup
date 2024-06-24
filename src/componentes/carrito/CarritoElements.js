import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";
import DeleteIcon from '@mui/icons-material/Delete';

function CarritoElements() {
    const { makeupCarrito, setMakeupCarrito } = useContext(dataContext)

    const eliminarProducto = (e) => {
        const productoFiltrado = makeupCarrito.filter((filtro) => filtro.id !== Number(e.currentTarget.id))
        setMakeupCarrito(productoFiltrado)
    }

    {/*const cantidad = () => {
        setMakeupCarrito((actualesProductos) => {
            return actualesProductos.map((producto) => {
                const valor = document.getElementById(libs.id)?.value || libs.cantidad;
                return { ...libs, precioCarrito: libs.precio * valor.value, cantidad: valor.value }
            })
        })
    }*/}

    const cantidad = () => {
        setMakeupCarrito((actualesProductos) => {
            return actualesProductos.map((producto) => {
                const valor = document.getElementById(producto.id)?.value || producto.cantidad;
                return { ...producto, precioCarrito: producto.precio * valor.value, cantidad: valor.value }
            })
        })
    }

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number)
    }

    return makeupCarrito.map((producto) => {
        if (!producto || !producto.image) {
            return null; // o maneja el caso donde image es undefined
        }

        return (
            <section className="h-100" key={producto.id}>
                <div className="container h-100 py-2">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src={producto.image}
                                                className="img-fluid rounded-3"
                                                alt={producto.tittle}
                                            />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{producto.tittle}</p>
                                            <p><span className="text-muted"></span>{producto.description}</p>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <input
                                                id={producto.id}
                                                min="1"
                                                name="quantity"
                                                value={producto.cantidad}
                                                type="number"
                                                className="form-control form-control-sm"
                                                onChange={cantidad}
                                            />
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">$ {formatoNumero(producto.precioCarrito)}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <button className="btn btn-dark" id={producto.id} onClick={eliminarProducto}>
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    });
}

export default CarritoElements;
