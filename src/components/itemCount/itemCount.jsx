
import "./itemCount.css"
import { useState } from 'react';



function ItemCount ({stock, onAdd }) {
    const [quantity, setCount] = useState(1);

    const sumProductCount = () => {
      if (quantity < stock) {
        setCount(quantity + 1);
      }
    }

    const restProductCount = () => {
      if (quantity > 1) {
        setCount(quantity - 1);
      }
    }

  return (
    <div className='item_count'>
          <div className='item_count_contador'>
            <button onClick={restProductCount} className='item_count_btn_blq_btn' >-</button>
            <span className='item_count_btn_span'>{quantity}</span>
            <button onClick={sumProductCount} className='item_count_btn_blq_btn'  >+</button>
          </div>
          <button onClick={() => onAdd(quantity)}  className='productos_cards_caract_btn_add' >Agregar al carrito</button> 
          <button className= 'productos_cards_caract_btn_fav'><img src='/img/icon/fav_icon.svg' alt='favicon' className='productos_cards_caract_btn_fav_img'/></button>
    </div>
  )
}


export default ItemCount