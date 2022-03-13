import React from 'react';
import {Typography,  Menu} from 'antd';
import { ReadOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const {Title} = Typography;
const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;
const HomePage = () => (
    <Typography>
        <Title  >欢迎使用本系统</Title>
        <Menu mode="inline"  style={{ width: 1100 }}>
            <SubMenu key="sub1" icon={<ReadOutlined />} title="中文介绍">
                <Menu.Item key="1">简介</Menu.Item>
                 ----这里还在考虑是否是点击后弹出一个窗口或网页作说明--
                <Menu.Item key="2">设计原则</Menu.Item>
                <Menu.Item key="3">设计模式</Menu.Item>
                <Menu.Item key="4">使用说明</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ReadOutlined />} title="System Introduction">
                <Menu.Item key="5">Introduction</Menu.Item>
                <Menu.Item key="6">Principles</Menu.Item>
                <Menu.Item key="7">Patterns</Menu.Item>
                <Menu.Item key="8">Instructions</Menu.Item>

            </SubMenu>

        </Menu>

    </Typography>
)

export default HomePage
