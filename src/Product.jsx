import { useDispatch, useSelector } from "react-redux";
import { addItem, RemoveItem } from "./Redux/slice";
import { fetchProducts } from "./Redux/productSlice";
import { useEffect } from "react";
import "./Redux/Product.css";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const prodSelector = useSelector((state) => state.products.items);

  const cartselector=useSelector((state)=>state.cart.items)
  console.log(cartselector.length);


  return (
    <>
   

      <div className="product-grid">
        {prodSelector.map((item) => (
          <div className="product-card" key={item.id}>
            <img className="product-img" src={item.thumbnail} alt={item.title} />

            <div className="product-content">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-brand">{item.brand}</p>

              <div className="product-price-rating">
                <span className="product-price">${item.price}</span>
                <span className="product-rating">⭐ {item.rating}</span>
              </div>
            {
            cartselector.find((cartItem)=> cartItem.id===item.id)? <button
                  onClick={() => dispatch(RemoveItem(item))}
                className="btn-added"
              >
                Remove from  Cart
              </button>: <button
                onClick={() => dispatch(addItem(item))}
                className="btn"
              >
                Add To Cart
              </button>
            }
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
