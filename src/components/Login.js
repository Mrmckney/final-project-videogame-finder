import bcrypt from 'bcryptjs'
import React, { useContext, useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { UserDetailsContext } from '../App'

const mySalt = "$2a$10$Y5H9Mw5WmFVDB46qEhCU0u"

function Login({isLogin, handleClose, show}) {
    
    const {setUser, setDisplayName} = useContext(UserDetailsContext)
    const [userCreds, setUserCreds] = useState(null)
    
    const handleSignIn = () => {
        if(userCreds === null){
            alert('Missing username or password')
            return 
        }
        const {username, password} = userCreds
        if(username === "" || password === "" ){
            alert('Missing username or password')
            return
        }
        const hashedPassword = bcrypt.hashSync(password, mySalt)
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password: hashedPassword})
        })
        .then(response => response.json())
        .then(data => {
            if(data.status !== 200){
                alert(data.message)
                return
            }
            if(data.message !== 'Login Attempt Failed'){
                handleClose(false)
            }
            setDisplayName(data.user.username)
            setUser(data.token)
            localStorage.setItem('user', data.token)
            localStorage.setItem('displayname', data.user.username)
        })
        .catch(err => alert(err))
    }

    const handleSignUp = () => {
        if(userCreds === null){
            alert('Missing username or password')
            return 
        }
        const {username, password} = userCreds
        if(username === "" || password === "" ){
            alert('Missing username or password')
            return
        }
        const hashedPassword = bcrypt.hashSync(password, mySalt)
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password: hashedPassword})
        })
        .then(response => response.json())
        .then(data => {
            setDisplayName(data.user.username)
            setUser(data.token)
            localStorage.setItem('user', data.token)
            localStorage.setItem('displayname', data.user.username)
        })
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