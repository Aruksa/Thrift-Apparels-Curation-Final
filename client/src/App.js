import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation_Bar from './components/Navigation_Bar';
import Dashboard from './pages/Dashboard';
import Log_In from './pages/Log_In';
import Register from './pages/Register';
import Post_product from "./pages/Post_product";
import Product_show from './pages/Product_show';
import Category from './pages/Category';
import CartPage from './pages/CartPage';
import PostReview from './pages/PostReview';
import ShowReview from './pages/ShowReview';
import OrdersPage from "./pages/OrdersPage";
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation_Bar/>
      <Routes>
      <Route index element={<Dashboard/>}/>
      
      <Route path="*" element={<Dashboard/>}/>
      <Route path = "/product/:id" element = {<Product_show/>}/>
      <Route path="/category/:category" element={<Category />} />
      {user && 
        <>
        <Route path = "/Post_product" element = {<Post_product/>}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path = "/post_review" element = {<PostReview/>}/>
        <Route path="/show_review" element={<ShowReview />} />       
        </>
      }
      {!user && 
        <>
        <Route path = "/Log_In" element = {<Log_In/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        </>
      }
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
