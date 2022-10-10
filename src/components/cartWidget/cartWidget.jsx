import React, {useContext} from 'react'
import './cartWidget.css'
import { CartContext } from '../../context/cartContext';

const  CartWidget = () => {

    const {totalProductos} = useContext(CartContext)

    return (
        <div className='nav_cart_container'>
            <img src= {'/img/icon/cart_vacio.svg'} alt="icon-cart-vacio" className='style_nav_cart_img'/>
            <span className='style_nav_cart_span'>{totalProductos()}</span>
        </div>
    )
}

export default CartWidget



