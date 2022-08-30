import React from 'react';
import 'react-bootstrap'
import {Container,Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/body.css'





const Image = () => {
    return (
      <article className="article" id="compImage">
        <img src="https://www.quadbtech.com/images/basket0.5x.png" className='card-pix' alt="background" width="inherit" />
        <span className="header">QuadB
        <p className='msubtitle'>...the best</p></span>
      </article>
    );
  };


function Body(){
    return (
        <div id='bdy' >
        <Navbar   className="gap-3 px-3 flex-grow-2 justify-content-spaceBetween" style={{height:"8.356vh" ,fontSize:"1rem" ,justifyContent:"space-between", borderBottom: "3px solid grey", borderTop:"none", backgroundColor: "black"}} fixed='top'>
  <Container>
     <Navbar.Brand className="Brand" style={{color: "#FFD600", fontSize:"2rem" ,marginRight: "30%" , lineHeight:"50%",  fontWeight:"bolder"  }} href="#home">QuadB⭐Tech </Navbar.Brand>   
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </Container>
</Navbar>

        {Image()}
        <div style={{ paddingBottom: "8px", backgroundColor:"white"}}>
        <Nav className='newd'  variant='pills' defaultActiveKey="/quadbtech" as="ul">
  <Nav.Item as="li">
    <Nav.Link style={{margin:"4px auto -3px 10px"}} href="/quadbtech">All Posts</Nav.Link>
  </Nav.Item>  
  <Nav.Item as="li">
    <Nav.Link style={{margin:"4px auto -3px auto"}} eventKey="link-2" href="#quadbtech" disabled>Summary</Nav.Link>
  </Nav.Item>
</Nav>
</div>
</div>

    )
};



export default Body
