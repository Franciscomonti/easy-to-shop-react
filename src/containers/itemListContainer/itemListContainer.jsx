import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/itemList/itemList'
import {getFirestore, collection, getDocs, query ,where} from 'firebase/firestore'
import LoadSpinner from '../../components/loadSpinner/loadSpinner';

const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos] = useState([])
    const [loadSpin, setLoadSpin] = useState(false)
    const {idCategory} = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        let itemQuery = collection(db, 'productos');

        if (idCategory !== undefined) {
            itemQuery = query(itemQuery, where("marca","==", idCategory))
        }
        
        getDocs(itemQuery).then((snapshot)=> {
            const docs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

        setListaProductos(docs); 
        setLoadSpin(true)
    })

    },[idCategory]);

    return (
    <>
        {loadSpin ? <ItemList productos={listaProductos}/> : <LoadSpinner texto="estamos cargando tu proxima compra..."/>}
    </>
    )
}



export default ItemListContainer