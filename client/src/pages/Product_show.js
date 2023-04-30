import axios from "../axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Container, Row, Col, Badge,Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Categorization from "../components/Categorization";
import "./Product_show.css";
import "react-alice-carousel/lib/alice-carousel.css";
// import { useAddToCartMutation } from "../services/thriftApi";


function Product_show() {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const [product, setProduct] = useState(null);
    const [related, setRelated] = useState(null);
    // const [addToCart] = useAddToCartMutation;
   

    const handleDragStart = (e) => e.preventDefault();
    useEffect(() => {
        axios.get(`/products/${id}`).then(({ data }) => {
            setProduct(data.product);
            setRelated(data.related);
        });
    }, [id]);

    if (!product) {
        return <Loading />;
    }
    const responsive = {
        0: { items: 1 },
        200: { items: 2 },
        400: { items: 3 },
        600: {items: 4},
        800: {items: 5},
        1000: {items: 6}
    };

    const images = product.pictures.map((picture) => <img className="product-pic" src={picture.url} onDragStart={handleDragStart} />);

    let sameCategory_array = [];
    if (related) {
        sameCategory_array = related.map((product, idx) => (
            <div data-value={idx}>
                <Categorization {...product} />
            </div>
        ));
    }

    return (
        <Container style={{ position: "relative" }}>
            <Row>
                <Col lg={6}>
                    <AliceCarousel mouseTracking items={images} controlsStrategy="alternate" />
                </Col>
                <Col lg={6} className = "Main_Product">
                    <h1>{product.name}</h1>
                    <p>
                        <Badge>{product.category}</Badge>
                    </p>
                    <strong>BDT {product.price}</strong>
                    <p>
                    <p className = "content">
                        <strong>Size: </strong>{product.size}
                    </p>

                    </p>
                    <p className="content">
                        <strong>Description: </strong>{product.description}
                    </p>
                    <p className = "content">
                        <strong>Defects: </strong>{product.defects}
                    </p>
                    <p className = "content">
                        <strong>Brand: </strong>{product.brand}
                    </p>
                    <p className = "content">
                        <strong>#{product.keyword}</strong>
                    </p>
                    {user &&
                    
                    (
                        <>
                        {/* <Button size="lg" onClick={() => addToCart({ userId: user._id, productId: id, price: product.price, image: product.pictures[0].url })}>
                                Add to cart
                            </Button> */}
                        </>
                    )
                    }
                   
                   
                    
                </Col>
            </Row>
            <div>
                <h2 className="be-style">Similar Products Down Below</h2>
                <div>
                    <AliceCarousel mouseTracking items={sameCategory_array} responsive={responsive} controlsStrategy="alternate" />
                </div>
            </div>
        </Container>
    );
}

export default Product_show;