import React, {useState} from 'react'
import {CButton, CCard, CCardBody, CCol, CForm, CFormInput, CInputGroup, CInputGroupText, CRow} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {cilBug, cilUser} from "@coreui/icons";
import http from "../../../api/http";

const NewIssue = ({projectId, onComplete}) => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const createIssue = () => {
        http
            .post('issue/create/', {projectId, issues: [{message}]})
            .then((res) => {
                if (res.data === true) onComplete(true)
            })
    }

    return (
        <CCard className="p-4">
            <CCardBody>
                <CForm>
                    <h1>Create New Issue</h1>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilBug}/>
                        </CInputGroupText>
                        <CFormInput
                            placeholder="Error Message"
                            onChange={(e) => setMessage(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                            <CIcon icon={cilUser}/>
                        </CInputGroupText>
                        <CFormInput
                            placeholder="Assign someone"
                            onChange={(e) => setUsername(e.target.value)}/>
                    </CInputGroup>
                    <CRow>
                        <CCol xs={6}>
                            <CButton color="primary" className="px-4" onClick={() => createIssue()}>
                                Create Issue
                            </CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CCardBody>
        </CCard>
    )
}

export default NewIssue;
