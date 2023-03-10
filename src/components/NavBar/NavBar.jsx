import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"


const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <NavLink  to="/">Baron de la cerveza </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className={({ isActive })=> isActive ? 'btn btn-secondary' : 'btn btn-dark'} to="/categoria/cerveza">Cervezas</NavLink>
                    <NavLink className={({ isActive })=> isActive ? 'btn btn-secondary' : 'btn btn-dark'} to="/categoria/vino">Vinos</NavLink>
                   
                </Nav>
                <Nav>
                    <Link to='/cart' >🛒</Link>
                    
                    
                    <CartWidget />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar