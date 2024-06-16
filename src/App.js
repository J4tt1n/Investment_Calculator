import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Calculator from './Components/Calculator.js';
import CalculationLog from './Components/CalculationLog.js';


function App() {
  const [localInvestingData, setLocalInvestingData] = useState({
    initialAmount: 10000,
    annualAmount: 1200,
    duration: 10,
    expected: 6
  });

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
      <Calculator investingData={localInvestingData} onDataChange={handleChange} />
      <CalculationLog 
        iA={localInvestingData.initialAmount} 
        aA={localInvestingData.annualAmount} 
        eR={localInvestingData.expected} 
        d={localInvestingData.duration} 
      />
    </div>
  );
}

export default App;