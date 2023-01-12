import { Layout } from 'antd'
import React from 'react'
import HeaderMeta from './HeaderMeta';
import MainNav from './MainNav/MainNav';
import Sider from 'antd/es/layout/Sider';
import Sidebar from '../sidebar/Sidebar';
import MainCarousel from '../MainCarousel/MainCarousel';


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
            <Layout>
                <MainCarousel />
                <Sidebar/>
            </Layout>
              
            <Content>
                {children}
            </Content>
        </Layout>
    </>
  )
}

export default MainLayout