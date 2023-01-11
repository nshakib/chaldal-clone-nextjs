import React from 'react'
import { SkeletonListContext } from '../../context'
import SkeletonList from '../SkeletonList/SkeletonList'

type CategoryListRendererProps = {
    categories: ProductCategory[];
    breakpoints: Breakpoints;
  }

const CategoryListRenderer = ({categories,breakpoints}: CategoryListRendererProps) => {
  return (
    <SkeletonListContext.Provider value={breakpoints}>
      {categories.length === 0 ? (
        <SkeletonList itemCount={3} />
      ) : (
        <CategoryList categories={categories} />
      )}
    </SkeletonListContext.Provider>
  )
}

export default CategoryListRenderer