import React, {useState} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilLockLocked, cilUser} from '@coreui/icons'
import {Link, useHistory} from "react-router-dom";
import http from "../../../api/http";

const Register = () => {
    const history = useHistory();
    const [usernameAvailable, setUsernameAvailable] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onRegister = () => {
        if (username === '' || password !== password2 || password === '') {
            alert("Please fill up the form")
        }
        http
            .post("/auth/join", {username, password})
            .then((res) => {
                if (res.data === true) {
                    history.push("/login");
                } else {
                    alert("Account creation failed\n");
                }
            });

    }

    const onUsernameChange = (username) => {
        setUsername(username)
        if (username !== '') {
            http
                .get("/auth/check/?username=" + username)
                .then((res) => {
                    setUsernameAvailable(res.data);
                })
        } else {
            setUsernameAvailable(false);
        }
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm>
                                    <h1>Register</h1>
                                    <p className="text-medium-emphasis">Create your account</p>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser}/>
                                        </CInputGroupText>
                                        <CFormInput
                                            valid={usernameAvailable}
                                            placeholder="Username"
                                            autoComplete="username"
                                            onChange={(e) => onUsernameChange(e.target.value)}/>
                                    </CInputGroup>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked}/>
                                        </CInputGroupText>
                                        <CFormInput
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="new-password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </CInputGroup>
                                    <CInputGroup className="mb-4">
                                        <CInputGroupText>
                                            <CIcon icon={cilLockLocked}/>
                                        </CInputGroupText>
                                        <CFormInput
                                            valid={password === password2 && password !== ''}
                                            type="password"
                                            placeholder="Repeat password"
                                            autoComplete="new-password"
                                            onChange={(e) => setPassword2(e.target.value)}
                                        />
                                    </CInputGroup>
                                    <div className="d-grid">
                                        <CButton
                                            onClick={() => onRegister()}
                                            color="success">
                                            Create Account
                                        </CButton>
                                    </div>
                                </CForm>
                                <div className="h-10"/>
                                <Link to="/login">
                                    <div className="d-grid">
                                        <CButton color="primary">Have an account?</CButton>
                                    </div>
                                </Link>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Register
