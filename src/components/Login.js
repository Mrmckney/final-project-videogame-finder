import React, { useContext, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { UserDetailsContext } from '../App'

function Login({show, isLogin, handleClose}) {

    const {setUser} = useContext(UserDetailsContext)
    const [userCreds, setUserCreds] = useState(null)
    
    const handleSignIn = () => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCreds)
        })
        .then(response => response.json())
        .then(data => setUser(data))
        .then(() => handleClose(false))
        .catch(err => alert(err))
    }

    const handleSignUp = () => {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCreds)
        })
        .then(response => response.json())
        .then(data => setUser(data))
        .then(() => handleClose(false))
        .catch(err => alert(err))
    }

    const handleForm = e => {
        setUserCreds({ ...userCreds, [e.target.name]: e.target.value})
    }

    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{isLogin ? 'Login' : 'Sign up'} Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="username" placeholder="Username" onChange={handleForm} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handleForm} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    {isLogin 
                    ?
                    <Button variant="primary" onClick={handleSignIn}>
                        Login
                    </Button>
                    :
                    <Button variant="primary" onClick={handleSignUp}>
                        Sign up
                    </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Login