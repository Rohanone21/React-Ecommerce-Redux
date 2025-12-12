import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";
import "./Header.css"
const Header=()=>{
  return(

  <header>
    
     <div>
     <nav>
      <ul>
 
    <li><Link to={"/"}>Home</Link></li>
   
      </ul>
     </nav>
     </div>
    <AddToCart/>
  </header>

  


  );
}
export default Header;