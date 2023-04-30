import axios from "../axios"
import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import './Dashboard.css';
import { LinkContainer } from "react-router-bootstrap";
import {Col,Row} from "react-bootstrap";
import categories from "../categories";
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

          <h2 className="new">Categories Down Below</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
          
          
      </div>
      </React.Fragment>
  );
}

export default Dashboard;
