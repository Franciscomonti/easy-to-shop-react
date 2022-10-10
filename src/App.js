import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './containers/itemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';
import Cart  from './containers/cart/cart';
import { CartPorvider } from './context/cartContext';
import ContactForm from './containers/contactForm/contactForm';

function App() {
  return (

    <CartPorvider>
      <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
              <Route path="/detalle/:idProducto" element={<ItemDetailContainer />}/> 
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/form" element={<ContactForm/>} />
          </Routes>
      </BrowserRouter>
    </CartPorvider>
  );
}

export default App;
