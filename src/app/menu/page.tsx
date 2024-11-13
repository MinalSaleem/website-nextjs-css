import React from 'react';
import MenuCard from './MenuCard';

export default function Menu() {
  return (
    <div className='menu-container'>
        <div>
            <h1 className='menu-heading'>
                VANILLA SWIRLS
            </h1>
        </div>
        
        <div className='menu-grid'>
            <MenuCard 
                title="Vanilla Swirl" 
                image="/Vanilla Swirl.webp" 
                price="PKR 140" 
            />
            <MenuCard 
                title="Vanilla Nutty Swirl" 
                image="/Nutty Swirl.webp" 
                price="PKR 210" 
            />
            <MenuCard 
                title="Vanilla Brownie Swirl" 
                image="/Brownie Swirl.webp" 
                price="PKR 210" 
            />
            <MenuCard 
                title="Vanilla Swirl" 
                image="/Vanilla Swirl.webp" 
                price="PKR 140" 
            />
        </div>

        <div>
            <h1 className='menu-heading'>
                CHOCOLATE SWIRLS
            </h1>
        </div>
        
        <div className='menu-grid'>
            <MenuCard 
                title="Chocolate Swirl" 
                image="/Chocolate Swirl.webp" 
                price="PKR 170" 
            />
            <MenuCard 
                title="Chocolate Oreo Swirl" 
                image="/Chocolate Oreo Swirl.webp" 
                price="PKR 240" 
            />
            <MenuCard 
                title="Chocolate Brownie Swirl" 
                image="/Chocolate Brownie Swirl.webp" 
                price="PKR 240" 
            />
            <MenuCard 
                title="Chocolate Nutty Swirl" 
                image="/Chocolate Nutty Swirl.webp" 
                price="PKR 240" 
            />
        </div>

        <div>
            <h1 className='menu-heading'>
                VANILLA TWISTERS
            </h1>
        </div>
        
        <div className='menu-grid'>
            <MenuCard 
                title="Cocomo Express" 
                image="/Cocomo Express.webp" 
                price="PKR 460" 
            />
            <MenuCard 
                title="Oreo Supernova" 
                image="/Oreo Supernova.webp" 
                price="PKR 460" 
            />
            <MenuCard 
                title="M&M Mile" 
                image="/MnM Mile.webp" 
                price="PKR 490" 
            />
            <MenuCard 
                title="Kit Kat Connection" 
                image="/KitKat Connection.webp" 
                price="PKR 490" 
            />
        </div>
    </div>
  )
}
