import React from "react";
import { Card } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function Categorization({ _id, name, keyword, pictures }) {
    return (
        <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "15rem", margin: "8px" }}>
            <Card style={{ width: "30rem", margin: "8px" }}>
                <Card.Img src={pictures[0].url} style={{ height: "175px", objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card>
                        {keyword}
                    </Card>
                </Card.Body>
            </Card>
        </LinkContainer>
    );
}

export default Categorization;