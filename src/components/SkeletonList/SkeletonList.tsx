import React from 'react'
import MainRowLayout from '../MainRowLayout/MainRowLayout';
import SkeletonItem from './SkeletonItem';
import  './skeleton.css'


type SkeletonListProps = {
    itemCount: number[] | any;
  }

const SkeletonList = ({itemCount} : SkeletonListProps) => {
  return (
    <MainRowLayout rowClassName="product-categories-skeleton">
        {
            itemCount.map(({item, id}:any) =>{
                return(
                    <SkeletonItem key={id} itemCount={itemCount} />
                )
            })
        }
    </MainRowLayout>
  )
}

export default SkeletonList