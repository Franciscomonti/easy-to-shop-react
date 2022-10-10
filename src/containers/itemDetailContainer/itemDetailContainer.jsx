
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/itemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import LoadSpinner from '../../components/loadSpinner/loadSpinner';

const ItemDetailContainer = () => {

    const [Item, setItem ] = useState();
    const [loadSpin, setLoadSpin] = useState(false);
    const {idProducto} = useParams();

    useEffect(() =>{
            const db = getFirestore();
            const itemRef = doc(db, 'productos', idProducto);

            getDoc(itemRef).then((snapshot) => {
                const producto = {id: snapshot.id, ...snapshot.data()};
                setItem(producto)
                setLoadSpin(true)
            });
        
    }, [idProducto]);



return (
        <>
            { 
            loadSpin ? <ItemDetail producto={Item} key={Item.id} /> 
            : <LoadSpinner texto="cargando los detalles del producto"/>
            } 
        </>
    );
};


export default ItemDetailContainer;