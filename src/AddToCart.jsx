import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartselector=useSelector((state)=>state.cart.items);
  console.log(cartselector.length);
  return (
    <div className="cart">
      <Link to="/cart">
      <img 
        src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png"
        alt="cart"
      />
      </Link>
      <span className="cart-count">{cartselector.length}</span>
    </div>
  );
}

export default AddToCart;
