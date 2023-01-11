import { Layout } from 'antd'
import React from 'react'
import HeaderMeta from './HeaderMeta';
import MainNav from './MainNav/MainNav';


const  { Content } = Layout;

type LayoutProps = {
    children: React.ReactNode;
    title: string;
}

const MainLayout = ({children, title}: LayoutProps) => {
  return (
    <>
        <HeaderMeta title={title} />
        <Layout>
            <MainNav />
            <Content>
                {children}
            </Content>
        </Layout>
    </>
  )
}

export default MainLayout