import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation_Bar from './components/Navigation_Bar';
import Dashboard from './pages/Dashboard';
import Log_In from './pages/Log_In';
import Register from './pages/Register';
import Post_product from "./pages/Post_product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation_Bar/>
      <Routes>
      <Route index element={<Dashboard/>}/>
      <Route path = "/Log_In" element = {<Log_In/>}/>
      <Route path = "/Register" element = {<Register/>}/>
      <Route path="*" element={<Dashboard/>}/>
      <Route path = "/Post_product" element = {<Post_product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
