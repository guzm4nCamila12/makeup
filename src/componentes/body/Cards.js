import React, { useContext } from 'react'
import { dataContext } from '../context/DataContext';

function Cards(props) {
    const {setMakeupCarrito} = useContext(dataContext)

    function addToCard(){
        setMakeupCarrito((currentMakeup) => {
            const isItemFound = currentMakeup.find((item) => item.id === props.items.id);
            console.log("IsItemFound--->>", isItemFound)
            if(isItemFound){
                return currentMakeup.map((item) => {
                    if(item.id === props.items.id){
                        return { ...item, cantidad: Number(item.cantidad) +1, precioCarrito: item.precioCarrito + item.precio}
                    } else {
                        return item
                    }
                })
            } else {
                return [...currentMakeup, props.items]
            }
        })
    }

    return (
        <div className='card2'>
            <img src={props.items.image} alt='logo'/>
            <div>
                <h5> {props.items.tittle}</h5>
                <p>{props.items.description}</p>
                <p>{props.items.precio}</p>
                <button onClick={addToCard} type="button" class="btn btn-outline-info"> COMPRAR </button>
            </div>
        </div>
    )
}

export default Cards
