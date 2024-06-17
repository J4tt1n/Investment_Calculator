import React from 'react';
import investment_pic from '../assests/investment-calculator-logo.png';

function Header() {
    return (
        <div id='header'>
            <img src={investment_pic} alt='Money Bag'></img>
            <h1>Investment Calculator</h1>
        </div>
    )
}

export default Header;