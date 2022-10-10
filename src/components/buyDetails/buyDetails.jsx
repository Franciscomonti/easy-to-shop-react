import "./buyDetails.css"

const BuyDetails = (prop) => {

return(
        <div className="blq_buyDetail">
            <h2>Detalle de compra:</h2>
            <p>Titular de compra: {prop.newOrderInfo.buyer.name}</p>
            <p>Correo electronico: {prop.newOrderInfo.buyer.email}</p>
            <p>Telefono de contacto: {prop.newOrderInfo.buyer.phone}</p>
            <p>Tu numero de pedido es : {prop.id} </p>
        </div>
    );
};

export default BuyDetails;