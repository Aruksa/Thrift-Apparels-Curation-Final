import React,{useState} from 'react';

import { Col,Form,Row,Button,Alert } from "react-bootstrap";
import './Log_In.css';
import {useLogMutation} from "../services/thriftApi";
import {Link} from "react-router-dom";

 <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"></meta> 

function Log_In() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [log,{isSuccess,error,isError}] = useLogMutation();

    function log_manage(e){
        e.preventDefault();
        log({email,password});      
    }

  return (
    <React.Fragment>
        <Row className = "bg2">
        <Col md = {6} className = "Login_Pic"></Col>
                <Col md = {6} className = "Login_Work">
                <Form style = {{width : "100%"}}onSubmit = {log_manage}>
                    <h1 className = "Header1">Welcome Back!</h1>
                    <Form.Group>
                        <label className = "Label_Work">Email Address</label>
                    <Form.Control
                        type = "email" placeholder = "Enter Email" value = {email} required onChange = {(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>   
                    {/* gap after enter pass */}
                        <label className = "Label_Woek">Password</label>
                    <Form.Control
                        type = "password" placeholder = "Enter Password" value = {password} required onChange = {(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button className = "Button" type = "submit" disabled= {isSuccess}>Login</Button>
                    </Form.Group>
                    {isSuccess && <Alert variant="success">Logged in with succcess</Alert>}
                    {isError && <Alert variant = "danger">{error.data}</Alert>}
                    <p>
                        New Here? <Link to = "/Register">Create Account</Link>
                    </p>
                
                    <p className = "Header1">
                    Winter Sale is going ON! Get upto FLAT 15% discounts on your favourite items ♡
                    </p>
                    </Form>

                    <div class="column">
  <div class="row">
  <img src ="https://cdn-icons-png.flaticon.com/512/3507/3507059.png"></img>
  </div>
  <div class="row">
  <img src ="https://cdn-icons-png.flaticon.com/512/2806/2806119.png"></img>
  </div>
  <div class="row">
  <img src ="https://cdn-icons-png.flaticon.com/512/6483/6483099.png"></img>
  </div>
</div>
            </Col>
            

        </Row>
       
        </React.Fragment>
  )
}

export default Log_In
