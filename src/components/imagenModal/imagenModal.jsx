import { useState } from "react"
import './imagenModal.css'

const ImagenModal = ({prod})=>{

    const [imagenActiva, setImagenActiva] = useState(prod.portada)

return(
        <div className="productos_cards_img_blq">
            <div className="productos_cards_blq_img_peq">
                <img onClick={() => setImagenActiva(prod.portada)} src={ prod.portada } alt={prod.key} className="productos_cards_img_peq"/>
                <img onClick={() => setImagenActiva(prod.down)} src={ prod.down } alt={prod.key} className="productos_cards_img_peq"/>
                <img onClick={() => setImagenActiva(prod.right)} src={ prod.right } alt={prod.key} className="productos_cards_img_peq"/>
                <img onClick={() => setImagenActiva(prod.back)} src={ prod.back} alt={prod.key} className="productos_cards_img_peq"/>
            </div>
        
            <div className="productos_cards_blq_img_grande">
                <img src={ imagenActiva } alt={prod.key} className="productos_cards_img_grande"/>
            </div>    
        </div>
)};

export default ImagenModal


