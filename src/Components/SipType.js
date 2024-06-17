import React from 'react'

function SipType({sip, changeSip}) {

    return(
        <div className='siptype'>
            <div className='yearly'>
                <input 
                    type='radio' 
                    value='Yearly' 
                    name='type' 
                    checked={sip==='Yearly'}
                    onChange={changeSip}
                />
                <label>Yearly</label>
            </div>
            <div className='monthly'>
                <input 
                    type='radio' 
                    value='Monthly' 
                    name='type' 
                    checked={sip==='Monthly'}
                    onChange={changeSip}
                />
                <label>Monthly</label>
            </div>
                
        </div>
    )
}

export default SipType;