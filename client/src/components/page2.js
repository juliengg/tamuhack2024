
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement } from "chart.js";
import React, { useState } from 'react';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const pageStyle = {
  margin: "95px 0 0 0",

}



export default function InvestmentCalculator({income}) {
  const [investmentPercentage, setInvestmentPercentage] = useState(15);
  const [currentAge, setCurrentAge] = useState(null);
  const [data,setData] = useState(undefined);
  const annualSalary = income*12;
  const yearArray = [];
  const equityArray = [];
  const calculateCompoundInterest = () => {
    const retirementAge = 67; // Adjust as needed
    const annualReturnRate = 0.10; // 10% return per year
    const yearlyContributionPercentage = 0.15; // 15% of annual salary as the initial contribution
  
    const yearlyContribution = Number(annualSalary) * (investmentPercentage / 100);
  
    let principal = annualSalary*yearlyContributionPercentage;
    //let totalAmount = 0;
    for (let age = +currentAge; age <= retirementAge; age++) {
      yearArray.push(
        String(age),
      );
      equityArray.push(
        parseFloat(principal.toFixed(2)),
      );
      principal = principal*(1+annualReturnRate)+yearlyContribution;
    }
    var data = {
      labels: yearArray,
      datasets: [{
        label: `Coins Available`,
        data: equityArray,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "green",
        borderWidth: 1
      }]
    };
    setData(data);
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
      <button onClick={calculateCompoundInterest}>Generate</button>
      {data? <Line
        height={200} // set an appropriate height
        width={400}
        data={data}
      />: <p>Waiting</p>}
      
    </div>
  );
}

    