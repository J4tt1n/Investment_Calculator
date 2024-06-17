import React from 'react';
import '../App.css';

function Calculator({ investingData, onDataChange, investmentType }) {

    return (
        <div id='user-input'>
            <div className='input-group'>
                <label>Initial Investment</label>
                <input type='number' required value={investingData.initialAmount} onChange={(event) => onDataChange('initialAmount', event.target.value)} />
            </div>
            <div className='input-group'>
                <label>{investmentType} Investment</label>
                <input type='number' required value={investingData.periodAmount} onChange={(event) => onDataChange('periodAmount', event.target.value)} />
            </div>
            <div className='input-group'>
                <label>Expected Return (%)</label>
                <input type='number' required value={investingData.expected} onChange={(event) => onDataChange('expected', event.target.value)} />
            </div>
            <div className='input-group'>
                <label>Duration (years)</label>
                <input type='number' required value={investingData.duration} onChange={(event) => onDataChange('duration', event.target.value)} />
            </div>
        </div>
    );
}

export default Calculator;
