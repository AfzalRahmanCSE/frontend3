//import Name from "./Name";
//import Counter from "./Counter";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from "./Header";
import Footer from "./Footer";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductList from './product/ProductList'
import NotFound from './NotFound';
import NewProduct from './product/NewProduct';
import ProductDetails from './product/ProductDetails';
import AddReview from './product/AddReview';
//import Users from "./users/Users";
// imp ort NewProduct from "./product/NewProduct";
// import ProductList from "./product/ProductList";
const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/products' element={<ProductList/>}/>
                    <Route path='/newproduct' element={<NewProduct/>}/>
                    <Route path='/product/details/:id' element={<ProductDetails/>}/>
                    <Route path='/addreview/:id' element={<AddReview/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
            {/* <NewProduct/> */}
           {/* <ProductList/> */}
            {/* <Users/> */}
          
            {/* <h1>Welcome to React App</h1> */}
            {/* <Counter value={15}/> */}
            {/* <Name firstName={"Afzal"} lastName={"Rahman"}/> */}
        </div>
    )
}

export default App;