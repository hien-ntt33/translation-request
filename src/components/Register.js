import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginForm from "./Login";

export default function RegisterForm() {
    const [emailValidate, setEmailMessage] = useState('');
    const [pswdValidate, setPswdMessage] = useState('');
    const [confirmPass, setConfirmPswdMessage] = useState('');
    const [listMember, setListMember] = useState([
        {
            id: 1,
            username: 'HienNTT',
            email: 'hienntt@rikkei.com',
            projectName: 'Peraichi',
            password: 'Rikkei@123',
            confirmPswd: 'Rikkei@123'
        },
        {
            id: 2,
            username: 'AnhTL',
            email: 'anhtl@rikkei.com',
            projectName: '7NM',
            password: 'Rikkei@123',
            confirmPswd: 'Rikkei@123'
        }
    ]);

    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const pswdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    const inputUsernameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPJnameRef = useRef(null);
    const inputPswdRef = useRef(null);
    const inputConfirmPswdRef = useRef(null);

    const handleRegister = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const member = {
            id: Number(listMember.length + 1),
            username: inputUsernameRef.current.value,
            email: inputEmailRef.current.value,
            projectName: inputPJnameRef.current.value,
            password: inputPswdRef.current.value,
            confirmPswd: inputConfirmPswdRef.current.value
        };
        const emailValidate = () => {
            if (member.email === '') {
                setEmailMessage('Please enter your email!')
                return emailValidate;
            }
            else if (!emailRegex.test(member.email)) {
                setEmailMessage("Please enter a valid email");
            }
            else if (emailRegex.test(member.email)) {
                setEmailMessage("");
                return true
            }
        }
        const pswdValidate = () => {
            if (member.password === '') {
                setPswdMessage('Please enter your password!')
            }
            else if (!pswdRegex.test(member.password)) {
                setPswdMessage("Password must be at least 8 characters, including one UPPPERCASE and lowercase and number and symbol!");
            }
            else if (emailRegex.test(member.password)) {
                setPswdMessage("");
                return true
            }
        }
        const confirmPassword = () => {
            if (member.password !== member.confirmPswd) {
                setConfirmPswdMessage('Please make sure your passwords match!')
            }
            else {
                setConfirmPswdMessage('')
            }
        }
        const addMember = () => {
            if (emailValidate && pswdValidate && confirmPassword) {
                const newMember = [...listMember];
                newMember.push(member);
                setListMember(newMember)
            }
        }
    }
    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <h3 className="text-center font-weight-light my-4">Create account</h3>
                                <Form>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupUsername">
                                        <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
                                            <Form.Control type="text" placeholder="Enter username" ref={inputUsernameRef} />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupEmail">
                                        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                            <Form.Control type="email" placeholder="Enter email" ref={inputEmailRef} />
                                        </FloatingLabel>
                                        <div className="validate-message">{emailValidate}</div>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupPJname">
                                        <FloatingLabel controlId="floatingPJname" label="Project name" className="mb-3">
                                            <Form.Control type="text" placeholder="Enter project name" ref={inputPJnameRef} />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupPassword">
                                        <FloatingLabel controlId="floatingPswd" label="Password" className="mb-3">
                                            <Form.Control type="password" placeholder="Password" ref={inputPswdRef} />
                                        </FloatingLabel>
                                        <Form.Control.Feedback className="validate-message">{pswdValidate}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupPassword">
                                        <FloatingLabel controlId="floatingConfirmPswd" label="Confirm password" className="mb-3">
                                            <Form.Control type="password" placeholder="Confirm password" ref={inputConfirmPswdRef} />
                                        </FloatingLabel>
                                        <Form.Control.Feedback className="validate-message">{confirmPass}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant='danger' type='submit' onClick={handleRegister}>Create account</Button>
                                </Form>
                            </div>
                            <Link as={Link} to='/login'>Have an account? Go to login</Link>
                            <LoginForm registeredMember={listMember} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}