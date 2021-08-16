import { useState } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import Login from './Login'
import '../App.css'

function NavBar() {
    const [show, setShow] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const handleClose = () => setShow(false)
    return(
        <>
        <Navbar>
            <Container fluid>
                <Navbar.Brand href="/"><h1>Logo</h1></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavDropdown
                            title={
                                <img
                                    style={{ width:60 , height:60 }}
                                    src={'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg'} 
                                    alt="user pic"
                                />
                            }
                            id="nav-dropdown-dark-example"
                            menuVariant="dark"
                        >
                            
                            <NavDropdown.Item onClick={() => {
                                setIsLogin(true)
                                setShow(true)
                            }}
                            >
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => {
                                setIsLogin(false)
                                setShow(true)
                            }}
                            >
                                SignUp
                            </NavDropdown.Item>
                            
                            {/* <NavDropdown.Item onClick={() => {
                                setIsLogin(true)
                                setShow(false)
                            }}
                            >
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => {
                                setIsLogin(false)
                                setShow(false)
                            }}
                            >
                                Logout
                            </NavDropdown.Item> */}
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Login show={show} isLogin={isLogin} handleClose={handleClose} />
        </>
    )
}

export default NavBar