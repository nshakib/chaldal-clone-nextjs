import React from 'react'
import { Carousel, Image } from 'antd';


const MainCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <Image src="/images/carousel-demo-images/fashion-1031469_1920.jpg" alt=''/>
      </div>
      <div>
        <Image src="/images/carousel-demo-images/vinyl-records-945396_1920.jpg" alt='' />
      </div>
      <div>
        <Image src="/images/carousel-demo-images/bazaar-1853361_1920.jpg" alt='' />
      </div>
    </Carousel>
  )
}

export default MainCarousel