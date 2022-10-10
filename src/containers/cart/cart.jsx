import React, {useContext} from 'react'
import "./cart.css"
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCart from '../../components/itemCart/itemCart';

const Cart = () =>{
    const {cart, precioTotal, vaciarCarrito} = useContext(CartContext)

    if (cart.length === 0){
        return (
            <div className='carrito-vacio-blq'>
                <p className='carrito-vacio-parrafo'>El carrito esta vacio</p>
                <Link to='/' className='carrito-vacio-lnk'>Ir a comprar</Link>
            </div>
        )
    }else{

    return(
        <>

        { cart.map(producto => <ItemCart key={producto.id} producto={producto} />)};
        <div className='Carrito-opciones'>
            <p>Total de Compra: ${precioTotal()}</p>
            <div className='Carrito-opciones-btn-blq'>
                <p onClick={()=>vaciarCarrito()} className='Carrito-opciones-btn'>Vaciar Carrito</p>
                <NavLink to="/form" className='Carrito-opciones-btn'>Continuar compra</NavLink>
            </div>
        </div>
        </>
    )
    }
}

export default Cart