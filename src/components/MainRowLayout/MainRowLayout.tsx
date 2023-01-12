import React from 'react'
import { Layout, Row } from 'antd';



type MainRowLayoutProps = {
    children: React.ReactNode;
    rowClassName?: string;
  }

const MainRowLayout = ({children,rowClassName}:MainRowLayoutProps) => {
  return (
    <Layout className="boxed-width">
            
      <Row className={rowClassName} gutter={[24, 24]}>
        {children}
      </Row>
    </Layout>
  )
}

export default MainRowLayout