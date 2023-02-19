import React from 'react';
import {Nav,Navbar,NavDropdown} from "react-bootstrap";

function Navigation_Bar() {
    return (
      <Navbar bg="white">
        <React.Fragment>
          <Navbar.Brand href="/Dashboard" ><img src = "https://e7.pngegg.com/pngimages/1016/542/png-clipart-black-house-house-computer-icons-home-automation-kits-real-estate-home-icon-angle-building-thumbnail.png" width="30" height="30"></img> </Navbar.Brand>
          <Navbar.Brand href="/Post_product" ><img src = "https://cdn-icons-png.flaticon.com/512/4712/4712540.png" width="30" height="30"></img> </Navbar.Brand>
          {/* <a href="default.asp"><img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;"></a> */}
          <Navbar.Brand title = "Thrift Apparels Curation">Thrift Apparels Curation</Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="♥User" className = "Dropdown">
                <NavDropdown.Item href="/Register">Register ɔ◔‿◔ɔ♥ </NavDropdown.Item>
                <NavDropdown.Item href="/Log_In">Login ◑‿◐
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </React.Fragment>
      </Navbar>
    );
  }
  
  export default Navigation_Bar;
