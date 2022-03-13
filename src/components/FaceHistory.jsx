import React from 'react';
//import {Typography, Divider, Menu} from 'antd';
import {Typography} from 'antd';
import { Table } from 'antd';
import qs from 'qs';
//import { ReadOutlined, FileSearchOutlined  } from '@ant-design/icons';
import { ReadOutlined } from '@ant-design/icons';
import HomePage from "./HomePage";


const {Title} = Typography;

const columns = [
    {
        title: '序号',
        dataIndex: 'name',
        sorter: true,
        render: name => `${name.first} ${name.last}`,
        width: '5%',
    },
    {
        title: '分解图',
        dataIndex: 'gender',
        // filters: [
        //     { text: 'Male', value: 'male' },
        //     { text: 'Female', value: 'female' },
        // ],
        width: '35%',
    },
    {
        title: '分解图',
        dataIndex: 'gender',
        // filters: [
        //     { text: 'Male', value: 'male' },
        //     { text: 'Female', value: 'female' },
        // ],
        width: '35%',
    },
    {
        title: '开始时间',
        dataIndex: 'email',
        width: '5%',
    },
    {
        title: '结束时间',
        dataIndex: 'email',
        width: '5%',
    },
    {
        title: '结果',
        dataIndex: 'email',
    },
];
const getRandomuserParams = params => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
});

class App extends React.Component {
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
    };
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    fetch = (params = {}) => {
        this.setState({ loading: true });
        fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    loading: false,
                    data: data.results,
                    pagination: {
                        ...params.pagination,
                        total: 200,
                        // 200 is mock data, you should read it from server
                        // total: data.totalCount,
                    },
                });
            });
    };

    render() {
        const { data, pagination, loading } = this.state;
        return (
            <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={this.handleTableChange}
            />
        );
    }
}
const FaceHistory = () => (
    <Typography>
         <Title  >人脸检测历史记录</Title>
        <App />
        {/*ReactDOM.render(<App />,mountNode);*/}

     </Typography>
)
export default FaceHistory