import React from 'react'
import Image from 'next/image';

interface Props {
    title:string;
    image:string;
    price:string;
}

const MenuCard = ({ title, image, price}:Props) => {
  return (
    <div className='menu-card-container'>

        <div className='menu-card'>
            
            <div className='menu-card-image-container'>
                <Image src={image} alt={title} width={200} height={200}
                    className='menu-card-image'
                />
                </div>
            <h1 className='menu-card-title'>{title}</h1>
            
            <div className='menu-card-price-container'>

                <div className='menu-card-price'>
                    <h1 className='menu-card-price-text'>{price}</h1>
                </div>
                
                <div className='menu-card-button-container'>
                    <button className='menu-card-button' >
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default MenuCard;