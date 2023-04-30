import React from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
// import CheckoutForm from "../components/CheckoutForm";
import {useRemoveFromCartMutation} from "../services/thriftApi";
import "./CartPage.css";
import { Elements } from "@stripe/react-stripe-js";



function CartPage() {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.product);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();


    return (
        <Container style={{ minHeight: "95vh" }} className="cart-container">
            <Row>
                <Col>
                    <h1 className="pt-2 h3">Shopping cart</h1>
                    {cart.length == 0 ? (
                        <Alert variant="info">Shopping cart is empty. Add products to your cart</Alert>
                    ) : (
                        <Elements>
                            {/* <CheckoutForm /> */}
                        </Elements>
                    )}
                </Col>
                {cart.length > 0 && (
                    <Col md={5}>
                        <>
                            <Table responsive="sm" className="cart-table">
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* loop through cart products */}
                                    {cart.map((item) => (
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>
                                                {!isLoading && <i className="fa fa-times" style={{ marginRight: 10, cursor: "pointer" }} onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })}></i>}
                                                <img src={item.pictures[0].url} style={{ width: 100, height: 100, objectFit: "cover" }} />
                                            </td>
                                            <td>${item.price}</td>
                                            <td>
                                                <span className="quantity-indicator">
                                                    <span>{user.cart[item._id]}</span>
                                                </span>
                                            </td>
                                            <td>${item.price * user.cart[item._id]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div>
                                <h3 className="h4 pt-4">Total: ${user.cart.total}</h3>
                            </div>
                        </>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default CartPage;