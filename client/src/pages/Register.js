import { Col,Form,Row,Button } from "react-bootstrap";
import { useRegMutation } from '../services/thriftApi';
import {Alert} from "react-bootstrap";
import './Register.css';
import React,{useState} from 'react';
import {Link} from "react-router-dom";

<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"></meta>

function Register() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [reg, { error, isSuccess, isError }] = useRegMutation();

    function reg_manage(e) {
        e.preventDefault();
        reg({ name, email, password });
    }

  return (
    <React.Fragment>
        <Row className = "bg">
        <Col md = {6} className = "Register_Pic"></Col>
                <Col md = {6} className = "Register_Work">
                <Form style = {{width : "100%"}}onSubmit = {reg_manage}>
                    <h1 className = "Header1">Sign-up! Join us!</h1>
                    <Form.Group>
                        <label className = "Label_Work">Name</label>
            
                    <Form.Control
                        type = "name" placeholder = "Enter Name" value = {name} required onChange = {(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <label className = "Label_Work">Email Address</label>
                        
                    <Form.Control
                        type = "email" placeholder = "Enter Email" value = {email} required onChange = {(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <label className = "Label_Work">Password</label>
                        
                    <Form.Control
                        type = "password" placeholder = "Enter Password" value = {password} required onChange = {(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button className = "Button" type = "submit"disabled= {isSuccess}>Register</Button>
                    </Form.Group>
                    {isSuccess && <Alert variant="success">Account created with succcess</Alert>}
                    {isError && <Alert variant = "danger">{error.data}</Alert>}
                    <p>
                        Account already exists? <Link to = "/Log_In">Login</Link> 
                    </p>
                   
                    <p className = "Header1">
                    Open an account and you won't regret it. Or at least we hope so (╥︣﹏᷅╥)
                    </p>
                    </Form>
    
    <div class="column">
  <div class="row">
  <img src ="https://cdn-icons-png.flaticon.com/512/1926/1926409.png"></img>
  </div>
  <div class="row">
  <img src ="https://cdn-icons-png.flaticon.com/128/4273/4273296.png"></img>
  </div>
  <div class="row">
  <img src ="https://cdn-icons-png.flaticon.com/512/120/120010.png"></img>
  </div>
</div>
     </Col>

     {/* <div className = "cloths">SS</div> */}
           
        </Row>
           
    </React.Fragment>
  )
}

export default Register
