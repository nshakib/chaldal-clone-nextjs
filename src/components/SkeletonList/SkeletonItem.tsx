import React from 'react'
import { Skeleton, Col } from 'antd';
import { SkeletonListContext } from '../../context';

type SkeletonItemProps = {
    itemCount: number;
  }

const SkeletonItem = (itemCount : SkeletonItemProps) => {
    const { xl, md, sm, lg, xs } = React.useContext(SkeletonListContext);
  return (
    <Col
      xl={xl}
      md={md}
      sm={sm}
      lg={lg}
      xs={xs}
      style={{ textAlign: 'center' }}
    >
      <Skeleton
        loading={true}
        active
        avatar={{ shape: 'square' }}
        paragraph={false}
        title={false}
      />
    </Col>
  )
}

export default SkeletonItem