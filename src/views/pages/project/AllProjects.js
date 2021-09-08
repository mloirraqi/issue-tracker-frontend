import React, {useEffect, useState} from 'react';
import http from "../../../api/http";
import "antd/dist/antd.css";
import "@ant-design/pro-table/dist/table.css";
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import ProTable from '@ant-design/pro-table'
import Table from 'antd/lib/table'
import {CButton, CModal} from "@coreui/react";
import {useHistory} from "react-router-dom";
import NewIssue from "../issue/NewIssue";
import NewProject from "./NewProject";
import moment from "moment";

const AllProjects = () => {
    const history = useHistory();
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Description",
            dataIndex: "description"
        },
        {
            title: "Source",
            dataIndex: "source",
            copyable: true
        },
        {
            title: "Creation Time",
            dataIndex: "creationTime",
            type: "date",
            render:(date) =>
                <div>
                    {
                        moment(date).format("MM/DD/YYYY HH:mm:ss")
                    }
                </div>
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
    const requestProjects = () => {
        http
            .get('/project/all')
            .then((res)=>setData(res.data))
    }

    useEffect(()=>{
        requestProjects()
    },[])

    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    return(
        <div>
            <CModal
                visible={modal}
                onDismiss={() => setModal(false)}>
                <NewProject popup={true}/>
            </CModal>
            <CButton onClick={() => {
                setModal(true)
            }}>
                New Project
            </CButton>

            <div className="margin-all">
                <strong>All Projects:</strong>
                <Table
                    className="table-striped-rows"
                    filterType="light"
                    size="small"
                    columns={columns}
                    dataSource={data}
                    rowKey="key"
                    pagination={{
                        defaultCurrent: 10
                    }}
                />
            </div>
        </div>
    )
}

export default AllProjects;
