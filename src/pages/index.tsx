import MainLayout from '../components/MainLayout/MainLayout';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import Sidebar from '../components/sidebar/Sidebar';
import HeadingName from '../components/HeadingName';
import CategoryListRenderer from '../components/CategoryList/CategoryListRenderer';




export default function Home() {
  return (
    <>
      <MainLayout title='React eCommerce Sample'>
            
            {/* <Sidebar/>
            <MainCarousel /> */}
            <HeadingName title="Product Categories" />
            <CategoryListRenderer />
      </MainLayout>
    </>
  )
}
