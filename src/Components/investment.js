export function calculateInvestmentResults({
  initialInvestment,
  periodInvestment,
  expectedReturn,
  duration,
  sip
}) {
  const periodData = [];
  let investmentValue;
  if(initialInvestment===undefined || initialInvestment===null || isNaN(initialInvestment))
    investmentValue = 0;
  else
    investmentValue = initialInvestment;
  for (let i = 0; i < duration; i++) {
    if (sip === 'Yearly') {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + periodInvestment;
      periodData.push({
        year: i + 1,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        periodInvestment: periodInvestment,
      });
    } 
    else 
    { 
      let yearlyInterestEarned = 0;
      const monthlyRate = expectedReturn / 12 / 100;
      for (let j = 0; j < 12; j++) {
        investmentValue += periodInvestment;
        const interestEarnedInMonth = investmentValue * monthlyRate;
        yearlyInterestEarned += interestEarnedInMonth;
        investmentValue += interestEarnedInMonth;
      }
      periodData.push({
        year: i + 1,
        interest: yearlyInterestEarned,
        valueEndOfYear: investmentValue,
        periodInvestment: (periodInvestment*12),
      });
    }
  }

  return periodData;
}

export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
