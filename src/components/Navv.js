
import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';



function Navv({settext , setrate}) {
  return (
    <div>
      
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">  <Link style={{textDecoration:"none" , color:"white"}}to="/">Movies</Link>
            </Nav.Link>
            <Nav.Link href="#action2"><Link style={{textDecoration:"none" , color:"white"}}to="/about">About</Link>
            </Nav.Link>
             <Nav.Link href="#action3" ><Link style={{textDecoration:"none" , color:"white"}}to="/contact">contact</Link>
             </Nav.Link> 
          </Nav>
          <div className='stars'>
          <ReactStars count={5} size={24}  activeColor="#ffd700"  onChange={(newRating)=>setrate (newRating)}/>,
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>settext (e.target.value)}
            />
            <Button variant="outline-success" style={{backgroundColor:"yellow",border:"none",color:"dark"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navv
