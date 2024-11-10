"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  
export default function Hero() {
  return (
    <div>
        <div><h1 className='hero-title'>SOFT SWIRL</h1>
        </div>
        <Carousel 
            additionalTransfrom={0} 
            arrows={false} 
            autoPlay={true} 
            autoPlaySpeed={3000} 
            centerMode={false} 
            infinite 
            responsive={responsive} 
            itemClass='item' 
            showDots={true} 
        >
            <div className='carousel-slide'>
              <div>
                <Image 
                  src="/new1.png"
                  alt="Cone"
                  width={900}
                  height={300}
                  className='carousel-image'
                  />
                </div>
            </div>

            <div className='carousel-slide'>
              <div>
                <Image 
                  src="/new2.png"
                  alt="Cone"
                  width={900}
                  height={300}
                  className='carousel-image'
                  />
                </div>
            </div>

        </Carousel>
    </div>
  )
}
