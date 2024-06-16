import React from 'react'
import '../App.css'
import { calculateInvestmentResults, formatter } from './investment.js';

function CalculationLog({iA, aA, eR, d}) {

    const results = calculateInvestmentResults({
        initialInvestment: iA,
        annualInvestment: aA,
        expectedReturn: eR,
        duration: d,
    });

    let initialInvestment;
    if(Object.keys(results).length===0)
        initialInvestment = 0;
    else
        initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment; 


    return (
        <div id='result'>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((eachYear => 
                        {
                            const totalInterest = eachYear.valueEndOfYear - eachYear.annualInvestment * eachYear.year - initialInvestment;
                            const totalAmountInvested = eachYear.valueEndOfYear - totalInterest;
                            return (
                                <tr>
                                    <td>{eachYear.year}</td>
                                    <td>{formatter.format(eachYear.valueEndOfYear)}</td>
                                    <td>{formatter.format(eachYear.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            )
                        }
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CalculationLog;