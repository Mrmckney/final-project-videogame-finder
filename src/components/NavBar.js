import React, { useContext } from 'react'
import { Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Login from './Login'
import logo from '../image/Dog-Logo.png'
import { UserDetailsContext } from '../App'

function NavBar() {

    const {user, setUser, show, setShow, isLogin, setIsLogin} = useContext(UserDetailsContext)

    const handleClose = () => setShow(false)
    
    return(
        <>
        <Navbar>
            <Container fluid>
                <Navbar.Brand>
                    <img className="logo-size" src={logo} alt="Dog with disk in mouth"/> 
                </Navbar.Brand>
                <Navbar.Brand>
                    <h1 className="title">Game Retriever</h1>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Form className="d-flex search-bar">
                        <FormControl
                            type="search"
                            placeholder="Search games here"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
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
                           {!user 
                           ?
                           <>
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
                            </>
                            :
                            <>
                            <NavDropdown.Item onClick={() => {
                                setUser(null)
                                localStorage.clear()
                            }}
                            >
                                Logout
                            </NavDropdown.Item>
                            </>
                            }
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