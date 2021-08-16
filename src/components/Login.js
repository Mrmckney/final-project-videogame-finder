import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'

function Login({show, isLogin, handleClose}) {

    const handleSignIn = () => {

    }

    const handleSignUp = () => {

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
                        <Form.Control type="username" placeholder="Username" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
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