import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');



    const [phoneNumberErr, setphoneNumberErr] = useState({});
    const [passwordErr, setpasswordErr] = useState({});

    const validatePhone = (e) => {
        setPhoneNumber(e.target.value);
    }
    const validatePassword = (p) => {
        setPassword(p.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            navigate('/portfolio');
        }

    }

    const formValidation = () => {
        const phoneNumberErr = {};
        const passwordErr = {};
        //const emailErr = {};
        let isValid = true;
        if (phoneNumber.trim().length > 10 || phoneNumber.length < 10) {
            phoneNumberErr.phoneNumberLength = "Your phone number is invalid!";
            isValid = false;
        } if (password.length > 4 || password.length < 4) {
            passwordErr.passwordLength = "Password is Invalid Enter your 4 digit password";
            isValid = false;
        } else {
        }
        setphoneNumberErr(phoneNumberErr);
        setpasswordErr(passwordErr);
        return isValid;
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                    <form class="row g-3 needs-validation" novalidate>
                        <Row>
                            <Col></Col>
                            <Col><h4>Login Details</h4></Col>
                            <Col></Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col></Col>
                            <div class="col-sm-4">
                                <Col><label for="input1" class="form-label">Mobile Number</label></Col>
                            </div>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <div class="col-sm-4">
                                <Col><input type="number" class="form-control" id="number" value={phoneNumber}
                                    onChange={(e) => validatePhone(e)} placeholder="Enter Number" required /></Col>
                            </div>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Col>{Object.keys(phoneNumberErr).map((key) => {
                                    return <div style={{ color: "red" }}>{phoneNumberErr[key]}</div>
                                })}</Col>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col></Col>
                            <div class="col-sm-4">
                                <Col><label for="input2" class="form-label" id="password" >Password</label></Col>
                            </div>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <div class="col-sm-4">
                                <Col><input type="text" class="form-control" id="password" value={password}
                                    onChange={(e) => validatePassword(e)} placeholder="Password" required /></Col>
                            </div>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            {/* <Col><div style={{ color: "red" }}> {showError} </div></Col> */}
                            <Col>{Object.keys(passwordErr).map((key) => {
                                return <div style={{ color: "red" }}>{passwordErr[key]}</div>
                            })}</Col>
                            <Col></Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col></Col>
                            <Col><button class="btn btn-primary" type="submit" onClick={onSubmit} >Submit</button></Col>
                            <Col></Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col><label for="input2" class="form-label">Don't have an account?</label></Col>
                            <Col><Link to="/register">Create New Account</Link></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </form>
    );

}

export default Login;