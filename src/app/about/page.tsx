import Image from 'next/image';

export default function About() {
  return (
    <div className='about-main'>
      <h1 className='about-title'>
        About Us
      </h1>

      <div className='about-leftsec'>
        
        <div className='about-image'>
          <Image
            src="/about1.png"
            alt="IceCream"
            width={600}
            height={300}
            className='about-img'
          />
        </div>

        <div className='about-rightsec'>
          <p className='about-text'>
            Leading Pakistani chain offering premium soft serve ice cream in all major cities across the country. Experience the creamy, dreamy delight of our soft swirl ice cream! Each luscious swirl is a perfect blend of velvety texture and rich flavor, crafted to tantalize your taste buds. From classic vanilla to decadent chocolate and fruity strawberry, every bite is a celebration of sweetness.
          </p>
        </div>
      </div>
    </div>
  );
}
