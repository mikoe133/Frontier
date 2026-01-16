// src/components/layout/Layout.tsx
import { Layout as AntdLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import React from 'react';

const { Content, Footer, Header} = AntdLayout;

const Layout: React.FC = () => {
    return (
        <AntdLayout className="w-screen h-screen flex flex-col !bg-transparent">
            {/* 如果未来要加 Header 或 Footer，flex 布局能自动处理 */}
            <Content className="flex-1">
                <Outlet />
            </Content>
        </AntdLayout>
    );
};

export default Layout;