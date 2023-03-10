import React from 'react'
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

interface HeadingNameProps extends React.CSSProperties {
    title: string;
    level?: 1 | 2 | 3 | 4;
}
const HeadingName = (
    {   marginTop = 50,
        marginBottom = 30,
        textTransform = 'none',
        level,
    title}: HeadingNameProps
) => {
  return (
    <Row justify="center">
      <Col style={{ marginTop, marginBottom }}>
        <Title style={{ textTransform }} level={level}>
          {title}
        </Title>
      </Col>
    </Row>
  )
}

export default HeadingName