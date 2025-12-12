import { useDispatch } from "react-redux"
import Product from "./Product"
import Header from "./Redux/Header"
import { clearAllItems } from "./Redux/slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./Redux/CartList";

function App() {
 
const dispatch=useDispatch();
  return (
    <>

    <BrowserRouter>
         <Header/>

    <Routes>
   
      <Route path="/" element={<Product/>} ></Route>
       <Route path="/cart" element={<CartList/>} ></Route>
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
