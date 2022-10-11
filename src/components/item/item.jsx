import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import ImgThumbnail from '../imgThumbnail/imgThumbnail';
import ItemCount from '../itemCount/itemCount';
import './item.css'

const Item = ({ prod }) => {
    
    const {agregarProducto, estaEnCarrito} = useContext(CartContext)

    function agregar(quantity) {
        agregarProducto(prod, quantity)
    }

return(
    <div className='productos_cards'>

        <ImgThumbnail prod={prod}/>

        <div className='productos_cards_caract_blq'>
            <h2 className='productos_cards_caract_marca'>{ prod.marca }</h2>
            <h2 className='productos_cards_title'> { prod.nombre } </h2>
            <h3 className='productos_cards_price'><span className='productos_cards_price_span'> ${ prod.precio }</span> </h3>
            <p className='productos_cards_caract_descrip'>{prod.descripcion}</p>
            
            <div className='productos_cards_caract_btn_blq'>
            
                { estaEnCarrito(prod.id) ? 
                        <Link to='/cart' className='productos_cards_caract_btn_add'>Ir al carrito</Link> 
                        : 
                        <ItemCount  className='productos_cards_caract_btn_size' stock={prod.stock} onAdd={agregar} />
                }
                <Link className='productos_cards_caract_btn_add' to={`/detalle/${prod.id}`}>Detalles</Link>
            </div>
            
        </div>
    </div>
    
)}

export default Item