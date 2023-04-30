import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"

const PostReview = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [reference, setRef] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("CLICKED")
    try{
        const res = await axios.post("http://localhost:8080/reviews/create",{
            title: title,
            content: content,
            reference: reference
        })
        console.log(res)
    }catch(err){}
  }

  return (
    <div>
        <Container>
            <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <h1>Post Review</h1>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={title} required onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="text" placeholder="Enter Content" value={content} required onChange={(e) => setContent(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reference</Form.Label>
                    <Form.Control type="text" placeholder="Enter Reference" value={reference} required onChange={(e) => setRef(e.target.value)} />
                </Form.Group>
                <Form.Group>
                        <Button type="submit">
                                Post
                        </Button>
                </Form.Group>
                
            </Form>
        </Container>
    </div>
  )
}

export default PostReview