// src/components/layout/BasicLayout.tsx
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import React from 'react';

const { Content, Footer, Header} = Layout;

const BasicLayout: React.FC = () => {
    return (
        <Layout className="w-screen h-screen flex flex-col !bg-transparent">
            {/* 如果未来要加 Header 或 Footer，flex 布局能自动处理 */}
            <Content className="flex-1">
                <Outlet />
            </Content>
        </Layout>
    );
};

export default BasicLayout;