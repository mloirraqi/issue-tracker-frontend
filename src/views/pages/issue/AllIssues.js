import React from 'react';
import {CButton} from "@coreui/react";
import Table from "antd/lib/table";
import AppHeader from "../common/header/AppHeader";
import AllProjects from "../project/AllProjects";
import AppFooter from "../common/footer/AppFooter";
import moment, {Moment} from "moment";


const AllIssues = ({issues}) => {

    const columns = [
        {
            title: "Title",
            dataIndex: "message",
        },
        {
            title: "Creation Time",
            dataIndex: "creationTime",
            type: "date",
            render: (date)=> <div>{moment(date).format("MM/DD/YYYY HH:mm:ss")}</div>
        },
        {
            title: "Option",
            dataIndex: "projectId",
            render: (projectId) =>
                <CButton onClick={() => {
                    history.push({pathname: "/project/" + projectId})
                }}>
                    Open
                </CButton>
        }
    ];

    return (
        <div>
            <strong>All Issues:</strong>
            <Table
                filterType="light"
                size="small"
                columns={columns}
                dataSource={issues}
                rowKey="key"
                pagination={{
                    defaultCurrent: 10
                }}
            />
        </div>
    )
}

export default AllIssues;
