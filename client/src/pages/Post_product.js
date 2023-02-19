import React, { useState } from "react";
import { Alert, Col,Form, Row, Button } from "react-bootstrap";
import "./Post_product.css";
import { usePostproductMutation } from "../services/thriftApi";

<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"></meta>

function Post_product() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [defects, setDefects] = useState("");
  const [images, setImages] = useState([]);
  const[postproduct,{isSuccess}] = usePostproductMutation();

  function cloudinary_widget() {
    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: "dsupzruck",
            uploadPreset: "emfjg0hi",
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
                setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
            }
        }
    );
    widget.open();
}

    function post_manage(e) {
        e.preventDefault();
        if (!name || !brand || !description || !price || !category || !defects || !images.length) {
            return alert
        }
        postproduct({ name,brand, description, price, category, defects,images });
    }

    

    return (
        <React.Fragment>
            <Row>
                <Col md={8} className="Post_Work">
                    <Form style={{ width: "100%" }} onSubmit={post_manage}>
                        <h1 className="Header12">Create a product</h1>
                        {isSuccess && <Alert variant="success">Product created with succcess</Alert>}
                        <Form.Group>
                            <label className="Label_Work2">Product name</label>
                            <Form.Control type="text" placeholder="Enter Product Name" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <label className="Label_Work2">Product brand</label>
                            <Form.Control type = "text" placeholder="Enter Product Brand" value={brand} required onChange={(e) => setBrand(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <label className="Label_Work2">Product desc</label>
                            <Form.Control as="textarea" placeholder="Enter Product Description" style={{ height: "17vh" }} value={description} required onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <label className="Label_Work2">Price</label>
                            <Form.Control type="number" placeholder="Price in Taka" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>

                        <Form.Group onChange={(e) => setCategory(e.target.value)}>
                            <label className="Label_Work2">Category</label>
                            <Form.Select>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                      <option value = "Crop Top">Crop Top </option>
                      <option value = "Mini Skirt">Mini Skirt</option>
                      <option value = "Midi Dress">Midi Dress</option>
                      <option value = "Midi Skirt">Midi Skirt</option>
                      <option value = "Stockings">Stockings</option>
                      <option value = "Headgear">Headgear</option>
                      <option value = "Sweater">Sweater</option>
                      <option value = "Belt">Belt</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <label className="Label_Work2">Defects</label>
                            <Form.Control type="text" placeholder="Enter Defects" value={defects} required onChange={(e) => setDefects(e.target.value)} />
                        </Form.Group>
                        <br></br>

                        <Form.Group>
                            <Button type="button" className = "Button" onClick={cloudinary_widget}>
                                Upload Images
                            </Button>
                            <div className="Pic_Preview_1">
                                {images.map((image) => (
                                    <div className="Pic_Preview_2">
                                        <img src={image.url} />
                                    </div>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" className = "Button" disabled={isSuccess}>
                                Create Product
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            </React.Fragment>
    );
}

export default Post_product;