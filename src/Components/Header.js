import React from 'react';
import investment_pic from '../assests/investment-calculator-logo.png'

function Header() {
    return (
        <div className='font-libreFrankil text-center flex flex-col my-10 items-center'>
            <img className='w-52 h-40 object-contain bg-transparent' src={investment_pic} alt='Money Bag'></img>
            <h1 className='font-light text-2xl mt-4'>Investment Calculator</h1>
        </div>
    )
}   

export default Header;
