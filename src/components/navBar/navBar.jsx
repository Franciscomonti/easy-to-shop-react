import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../../components/cartWidget/cartWidget';
import "./navBar.css";

const NavBar = () => {
    return (
        <div>
        <nav className='style_navBar'>
            <Link to="/" className='style_navLogo'><img src={'/img/logo/logo.png'} alt="logo" className='style_navLogo_Img'/></Link>
            <ul className='style_nav_blq_btn'>
                <NavLink to="/" className='style_nav_blq_btn_li'>Todos</NavLink>
                <NavLink to="/category/Adidas" className='style_nav_blq_btn_li'>Adidas</NavLink>
                <NavLink to="/category/Nike" className='style_nav_blq_btn_li'>Nike</NavLink>
                
            </ul>
            <NavLink to="/cart" className='style_nav_cart'>
                <CartWidget/>
            </NavLink>
        </nav>
        </div>

    )
}

export default NavBar;


