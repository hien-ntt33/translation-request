import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({ registeredMember }) {
    const navigate = useNavigate();
    const [emailValidate, setEmailMessage] = useState('');
    const [pswdValidate, setPswdMessage] = useState('');
    const inputEmailRef = useRef(null);
    const inputPswdRef = useRef(null);
    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    function handleLogin(event) {
        event.preventDefault();
        event.stopPropagation();
        const member = {
            email: inputEmailRef.current.value,
            password: inputPswdRef.current.value
        };
        function emailValidate() {
            if (member.email === '') {
                setEmailMessage('Please enter your email!')
            }
            else if (member.email !== '' && !emailRegex.test(member.email)) {
                setEmailMessage("Please enter a valid email");
            }
            else if (emailRegex.test(member.email)) {
                setEmailMessage("");
                return true
            }
        }
        function pswdValidate() {
            if (member.password === '') {
                setPswdMessage('Please enter your password!')
            }
            else {
                setPswdMessage("");
                return true
            }
        }

        if (emailValidate() && pswdValidate()) {
            const loginMember = registeredMember?.find((item) => item.email === member.email && item.password === member.password);
            if (loginMember === '') {
                alert('Invalid email or password!')
            }
            else {
                alert('Login success');
                navigate('/');
            }
        }
    }

    return (
        <div id="layoutAuthentication" className="background-hrm">
            <div id="layoutAuthentication_content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5 form-padding">
                                <h3 className="text-center font-weight-light my-4">Login</h3>
                                <Form className="form-layout">
                                    <Form.Group className="form-floating mb-3" controlId="formGroupEmail">
                                        <FloatingLabel controlId="floatingLoginEmail" label="Email address" className="mb-3">
                                            <Form.Control type="email" placeholder="name@example.com" ref={inputEmailRef} />
                                        </FloatingLabel>
                                        <div className="email validate-message">{emailValidate}</div>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupPassword">
                                        <FloatingLabel controlId="floatingLoginPswd" label="Password" className="mb-3">
                                            <Form.Control type="password" placeholder="Password" ref={inputPswdRef} />
                                        </FloatingLabel>
                                        <Form.Control.Feedback className="pswd validate-message">{pswdValidate}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant='danger' type='submit' onClick={handleLogin}>Login</Button>
                                </Form>
                            </div>
                        </div>
                        <Link as={Link} to='/register' className="login-register-link">Need an account? Sign up!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}