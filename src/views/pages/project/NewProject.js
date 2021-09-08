import React, {useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel, CRow, CFormTextarea} from '@coreui/react'
import http from "../../../api/http";
import {useHistory} from "react-router-dom";

const CustomStyles = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('');
    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()

        const form = event.currentTarget
        if (form.checkValidity() !== false) {
            http
                .post('/project/create', {name, description, source})
                .then((res) => {
                    if (res.data) {
                        window.location = "/";
                        //history.push("/");
                    } else {
                        alert("Project Creation Failed")
                    }
                })
        }
        setValidated(true)
    }
    return (
        <CForm
            className="row needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <CCol md={12}>
                <CFormLabel>Project Name</CFormLabel>
                <CFormInput type="text" placeholder="Issue Tracker" required onChange={(e) => setName(e.target.value)}/>
            </CCol>
            <CCol md={12} className={"btn-padding"}>
                <CFormLabel>Description</CFormLabel>
                <CFormTextarea type="text"
                            rows={10}
                            placeholder="Issue Tracker let's you track project related issues. Developed with React.js and Spring Boot"
                            onChange={(e) => setDescription(e.target.value)}
                            required/>
            </CCol>
            <CCol md={12} className={"btn-padding"}>
                <CFormLabel>Source</CFormLabel>
                <CFormInput type="text" placeholder="www.github.com/" onChange={(e) => setSource(e.target.value)}/>
            </CCol>
            <CCol xs={12} className={"btn-padding"}>
                <CButton color="primary" type="submit">
                    Create Project
                </CButton>
            </CCol>
        </CForm>
    )
}

const NewProject = ({popup}) => {
    const popupCss = popup ?  "" : "right-new-issue"
    return (
        <div className={"align-items-center margin-new " +popupCss}>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Create Project</strong> <small>To get started with a new project, simply fill up the
                            details</small>
                        </CCardHeader>
                    </CCard>
                </CCol>
            </CRow>
            <CustomStyles/>
        </div>

    )
}

export default NewProject
