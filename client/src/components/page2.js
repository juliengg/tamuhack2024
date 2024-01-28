//take input of annual salary
//invest 15% of income every year
//generate a graph showing compund interest per year until 67 from current age
//subtract retirement age from current age
//average 10% per year return

import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [annualSalary, setAnnualSalary] = useState('');
  const [investmentPercentage, setInvestmentPercentage] = useState(15);
  const [currentAge, setCurrentAge] = useState(null);
  const [results, setResults] = useState([]);

  const calculateCompoundInterest = () => {
    const retirementAge = 67; // Adjust as needed
    const annualReturnRate = 0.10; // 10% return per year
    const yearlyContributionPercentage = 0.15; // 15% of annual salary as the initial contribution
  
    const yearlyContribution = Number(annualSalary) * (investmentPercentage / 100);
    const initialContribution = Number(annualSalary) * yearlyContributionPercentage;
  
    let principal = 0;
    let totalAmount = 0;
    const resultsArray = [];
  
    for (let age = currentAge; age <= retirementAge; age++) {
      if (age === currentAge) {
        principal += initialContribution; // Add the initial contribution only for the first year
        totalAmount += initialContribution;
      } else {
        principal = (principal + initialContribution) * (1 + annualReturnRate); // Use initialContribution for the return for one year
        totalAmount += yearlyContribution; // Increment totalAmount by the regular yearly contribution
      }
  
      resultsArray.push({
        age,
        amount: principal.toFixed(2), // Keep two decimal places
        totalAmount: totalAmount.toFixed(2),
      });
    }
  
    setResults(resultsArray);
  };

  return (
    <div>
      <h1>S&P 500 Investment Calculator</h1>
      <div>
        <label>Current Age:</label>
        <input
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Salary:</label>
        <input
          type="number"
          value={annualSalary}
          onChange={(e) => setAnnualSalary(e.target.value)}
        />
      </div>
      <div>
        <label>Yearly Investment Percentage:</label>
        <input
          type="number"
          value={investmentPercentage}
          onChange={(e) => setInvestmentPercentage(e.target.value)}
        />
      </div>
      <button onClick={calculateCompoundInterest}>Generate</button>
      <div>
        <h2>Results:</h2>
        <ul>
            {results.map((result) => (
            <li key={result.age}>
                Age {result.age}: ${result.amount}
            </li>
            ))}
        </ul>
        </div>
    </div>
  );
};

export default InvestmentCalculator;
