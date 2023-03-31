import axios from "../axios"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import './Dashboard.css';
import Sneak_View from "../components/Sneak_View";

<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"></meta>

function Dashboard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);

  return (
    <React.Fragment>
      <div>
          <img src="https://img.freepik.com/premium-vector/super-sale-1010-banner-design-template-with-photo_490632-153.jpg?w=1380" className="dash-sign" />
          <div className="Swag">Our Products ↓</div>
          <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <Sneak_View {...product} />
                    ))}
                </div>
          
          
          
      </div>
      </React.Fragment>
  );
}

export default Dashboard;
