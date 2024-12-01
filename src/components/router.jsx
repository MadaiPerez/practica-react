import {Routes, Route} from 'react-router-dom'
import Home from '../views/Home';
import Aboutus from '../views/Aboutus'
import Contact from '../views/Contact'
import Catalog from '../views/Catalog'
import Product from '../views/Product';
import Navbar from '../views/partials/navbar';
import Footer from '../views/partials/footer'
import ModalEditProduct from '../components/modalEditProduct';



const Router = ()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                < Route path= '/' element ={<Home/>} />
                < Route path= '/nosotros' element ={<Aboutus/>} />
                < Route path= '/contactanos' element ={<Contact/>} />
                < Route path= '/catalogo' element ={<Catalog/>} />
                < Route path= '/Product' element ={<Product/>} />
                < Route path='/editar-producto' element={<ModalEditProduct />} />
                
            </Routes>
             <Footer />
        </div>
    )
}

export default Router;