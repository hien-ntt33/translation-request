import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import LoginForm from '../login/Login';

export default function RegisterForm() {
    const navigate = useNavigate();
    const [usernameValidate, setUsernameMessage] = useState('');
    const [emailValidate, setEmailMessage] = useState('');
    const [projectNameValidate, setProjectNameMessage] = useState('');
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
    const pswdRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

    const inputUsernameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPJnameRef = useRef(null);
    const inputPswdRef = useRef(null);
    const inputConfirmPswdRef = useRef(null);

    const handleRegister = () => {
        const member = {
            id: Number(listMember.length + 1),
            username: inputUsernameRef.current.value,
            email: inputEmailRef.current.value,
            projectName: inputPJnameRef.current.value,
            password: inputPswdRef.current.value,
            confirmPswd: inputConfirmPswdRef.current.value
        };
        const usernameValidate = () => {
            if (member.username === '') {
                setUsernameMessage('Please enter your username!')
            }
            else {
                setUsernameMessage("");
                return true
            }
        }
        const emailValidate = () => {
            if (member.email === '') {
                setEmailMessage('Please enter your email!')
            }
            else if (!emailRegex.test(member.email)) {
                setEmailMessage("Please enter a valid email");
            }
            else if (emailRegex.test(member.email)) {
                setEmailMessage("");
                return true
            }
        }
        const projectNameValidate = () => {
            if (member.projectName === '') {
                setProjectNameMessage('Please enter your project name!')
            }
            else {
                setProjectNameMessage("");
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
            else if (pswdRegex.test(member.password)) {
                setPswdMessage("");
                return true
            }
        }
        const confirmPassword = () => {
            if (member.confirmPswd === '') {
                setConfirmPswdMessage('Please enter your confirm password!')
            }
            else if (member.password !== member.confirmPswd) {
                setConfirmPswdMessage('Please make sure your passwords match!')
            }
            else {
                setConfirmPswdMessage('');
                return true
            }
        }
        if (usernameValidate() && emailValidate() && projectNameValidate() && pswdValidate() && confirmPassword()) {
            const newMember = [...listMember];
            const memberIndex = newMember.findIndex((user) => user.email === member.email)
            if (memberIndex != -1) {
                setEmailMessage('This email is already in use')
            }
            else {
                newMember.push(member);
                setListMember(newMember);
                console.log(listMember)
                alert('Your account has been created successfully!')
                navigate("/login");
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
                                <h3 className="text-center font-weight-light my-4">Create account</h3>
                                <Form>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupUsername">
                                        <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
                                            <Form.Control required type="text" placeholder="Enter username" ref={inputUsernameRef} />
                                        </FloatingLabel>
                                        <div className="username validate-message">{usernameValidate}</div>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupEmail">
                                        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                            <Form.Control required type="email" placeholder="Enter email" ref={inputEmailRef} />
                                        </FloatingLabel>
                                        <div className="email validate-message">{emailValidate}</div>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupPJname">
                                        <FloatingLabel controlId="floatingPJname" label="Project name" className="mb-3">
                                            <Form.Control required type="text" placeholder="Enter project name" ref={inputPJnameRef} />
                                        </FloatingLabel>
                                        <div className="PJname validate-message">{projectNameValidate}</div>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupPassword">
                                        <FloatingLabel controlId="floatingPswd" label="Password" className="mb-3">
                                            <Form.Control required type="password" placeholder="Password" ref={inputPswdRef} />
                                        </FloatingLabel>
                                        <div className="pswd validate-message">{pswdValidate}</div>
                                    </Form.Group>
                                    <Form.Group className="form-floating mb-3" controlId="formGroupPassword">
                                        <FloatingLabel controlId="floatingConfirmPswd" label="Confirm password" className="mb-3">
                                            <Form.Control required type="password" placeholder="Confirm password" ref={inputConfirmPswdRef} />
                                        </FloatingLabel>
                                        <div className="confirm-pswd validate-message">{confirmPass}</div>
                                    </Form.Group>
                                    <Button variant='danger' onClick={() => { handleRegister() }}>Create account</Button>
                                </Form>
                            </div>
                            <Link as={Link} to='/login' className="login-register-link">Have an account? Go to login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <LoginForm registeredMember={listMember} />
        </div>
    )
}