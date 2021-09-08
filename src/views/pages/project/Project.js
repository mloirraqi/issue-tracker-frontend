import React, {useEffect, useState} from 'react';
import {
    CAccordion,
    CAccordionBody,
    CAccordionButton,
    CAccordionCollapse,
    CAccordionHeader,
    CAccordionItem,
    CButton,
    CModal
} from "@coreui/react";
import {useHistory, useParams} from 'react-router-dom';
import http from "../../../api/http";
import NewIssue from "../issue/NewIssue";
import AllIssues from "../issue/AllIssues";
import AppHeader from "../common/header/AppHeader";
import AppFooter from "../common/footer/AppFooter";

import moment, {Moment} from "moment";

const Project = ({project}) => {
    const history = useHistory();
    const params = useParams();

    const [projectState, setProjectState] = useState(
        project === undefined
            ? {name: '', description: ''}
            : project);
    const [collapsed, setCollapsed] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setCollapsed(project !== undefined)
        fetchProject()
    }, [project])

    const fetchProject = () => {
        if (project === undefined) {
            const projectId = params['projectId'];
            http
                .get('/project/one/' + projectId)
                .then((res) => {
                    if (res.data === null) {
                        history.push('/');
                    } else {
                        setProjectState(res.data)
                    }
                })
        }
    }

    useEffect(() => {
        if (modal) setCollapsed(false)
    }, [modal])

    return (
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="body flex-grow-1 px-3">
                <CAccordion>
                    <CModal
                        visible={modal}
                        onDismiss={() => setModal(false)}>
                        <NewIssue projectId={projectState.projectId} onComplete={(completed) => {
                            if (completed) setModal(false)
                        }}/>
                    </CModal>
                    <CAccordionItem>
                        <CAccordionHeader>
                            <CAccordionButton
                                collapsed={collapsed}
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                <strong className="left-tab">
                                    <div>
                                        {(project === undefined) ? 'Project Details: ' : ''}
                                        {projectState.description}
                                    </div>
                                    <div>
                                        {(project === undefined) ? 'Project Name: ' : ''}
                                        {projectState.name}
                                    </div>
                                    <div>Created at: {moment(projectState.creationTime).format("MM/DD/YYYY HH:mm:ss") }</div>
                                    <div>
                                        {
                                            (project !== undefined) &&
                                            <CButton onClick={() => {
                                                history.push({pathname: "/project/" + project.projectId})
                                            }}>Open</CButton>
                                        }
                                        {
                                            (project === undefined) &&
                                            <CButton onClick={() => {
                                                setModal(true)
                                            }}>Create Issue</CButton>
                                        }
                                    </div>
                                </strong>
                            </CAccordionButton>
                        </CAccordionHeader>
                        <CAccordionCollapse visible={!collapsed}>
                            <CAccordionBody>
                                {
                                    (project === undefined) &&
                                    <AllIssues issues={projectState.issues}/>
                                }
                            </CAccordionBody>
                        </CAccordionCollapse>
                    </CAccordionItem>
                </CAccordion>
            </div>
            <AppFooter />
        </div>
    )
}

export default Project;
