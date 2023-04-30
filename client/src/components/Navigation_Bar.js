import React from 'react';
import {Nav,Navbar,NavDropdown,Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation_Bar() {
  function handleLogout() {
    dispatch(logout());
  }
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
    return (
      <Navbar bg="white">
        <React.Fragment>
          <Navbar.Brand href="/Dashboard" ><img src = "https://e7.pngegg.com/pngimages/1016/542/png-clipart-black-house-house-computer-icons-home-automation-kits-real-estate-home-icon-angle-building-thumbnail.png" width="30" height="30"></img> </Navbar.Brand>
          {user && (
                <>
                <Navbar.Brand href="/Post_product" ><img src = "https://cdn-icons-png.flaticon.com/512/4712/4712540.png" width="30" height="30"></img> </Navbar.Brand>
                <Navbar.Brand href="/show_review" >Blog</Navbar.Brand>
                <Navbar.Brand href="/post_review" >Post Thoughts</Navbar.Brand>
             
                </>
               )}
          
          
          {/* <a href="default.asp"><img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;"></a> */}
          <Navbar.Brand title = "Thrift Apparels Curation">Thrift Apparels Curation</Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="♥User" className = "Dropdown">
                {!user && (
                <>
                <NavDropdown.Item href="/Register">Register ɔ◔‿◔ɔ♥ </NavDropdown.Item>
                <NavDropdown.Item href="/Log_In">Login ◑‿◐
                </NavDropdown.Item>
                </>
               )}
                {user && (
                <>
                <Button variant="danger" onClick={handleLogout} className="logout-btn">
                                        Logout
                </Button>
                <LinkContainer to="/cart" style={{color: 'dark'}}>
                  <Button>
                    Cart
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    {user?.cart.count > 0 && (
                                        <span className="badge badge-warning" id="cartcount">
                                            {user.cart.count}
                                        </span>
                                    )}
                                </Nav.Link>
                    </Button>
                </LinkContainer>
                
                </>
               )}
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className='ms-auto'>
         
          </Nav>
          </React.Fragment>
      </Navbar>
    );
  }
  
  export default Navigation_Bar;
