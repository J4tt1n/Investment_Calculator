import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Calculator from './Components/Calculator.js';
import CalculationLog from './Components/CalculationLog.js';
import SipType from './Components/SipType.js';


function App() {
  const [localInvestingData, setLocalInvestingData] = useState({
    initialAmount: 10000,
    periodAmount: 1200,
    duration: 10,
    expected: 6
  });
  const[sipSelected, changeSipSelected] = useState('Yearly');
  const handleSipChange = (event) => {
      changeSipSelected(event.target.value);
  }

  function handleChange(inputIdentifier, newValue) {
    setLocalInvestingData((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: parseInt(newValue)
      };
    });
  }

  return (
    <div className="App">
      <Header />
      <SipType sip={sipSelected} changeSip={handleSipChange} />
      <Calculator investingData={localInvestingData} onDataChange={handleChange} investmentType={sipSelected} />
      <CalculationLog 
        iA={localInvestingData.initialAmount} 
        aA={localInvestingData.periodAmount} 
        eR={localInvestingData.expected} 
        d={localInvestingData.duration} 
        sip={sipSelected}
      />
    </div>
  );
}

export default App;