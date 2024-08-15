import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col></Col>
                    <Col><h3>Create New Account</h3></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <div class="col-sm-4">
                    <Col><label for="input1" class="form-label">Mobile Number</label></Col>
                    </div>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Col>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="+91 ******" aria-label="+91 ******" aria-describedby="button-addon2"></input>
                                <button class="btn btn-primary" type="button" id="button-addon2">Send OTP</button>
                            </div>
                        </Col>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <div class="col-sm-4">
                    <Col><label for="input1" class="form-label">Verify Otp</label></Col>
                    </div>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Col>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="****" aria-label="****" aria-describedby="button-addon2"></input>
                                <button type="button" class="btn btn-light">Verify</button>
                            </div>
                        </Col>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col><label for="input2" class="form-label">Already have an account?</label></Col>
                    <Col><Link to="/login">log in</Link></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>

    );

}

export default Register;