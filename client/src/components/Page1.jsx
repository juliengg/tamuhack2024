import React, { useState } from 'react';

const InteractiveBudgetingToolPage = ({income}) => {
  const [annualSalary, setAnnualSalary] = useState('');
  const [budgetInformation, setBudgetInformation] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [goals, setGoals] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [expenseInput, setExpenseInput] = useState('');
  const [expenseAmountInput, setExpenseAmountInput] = useState('');
  const [goalInput, setGoalInput] = useState('');
  const [goalAmountInput, setGoalAmountInput] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleSalaryChange = (e) => {
    setAnnualSalary(e.target.value);
  };

  const handleCalculateBudget = () => {
    // Perform budget calculation logic here based on the provided annual salary
    // For simplicity, let's assume a fixed percentage allocation to different categories

    // Example: 4% for 401k, 15% for investing, 10% for savings, etc.
    const fourKBudget = (0.04 * annualSalary).toFixed(2);
    const investingBudget = (0.15 * annualSalary).toFixed(2);
    const savingsBudget = (0.1 * annualSalary).toFixed(2);

    const budgetInfo = {
      fourk: fourKBudget,
      investing: investingBudget,
      savings: savingsBudget,
      // Add more budget categories as needed
    };

    setBudgetInformation(budgetInfo);
  };

  const handleAddExpense = () => {
    if (expenseInput && expenseAmountInput) {
      const expense = { name: expenseInput, amount: parseFloat(expenseAmountInput) };
      setExpenses([...expenses, expense]);
      setExpenseInput('');
      setExpenseAmountInput('');
      setTotalExpenses(totalExpenses+parseFloat(expenseAmountInput));
    }
  };

  const handleSetGoal = () => {
    if (goalInput && goalAmountInput) {
      const goal = { name: goalInput, targetAmount: parseFloat(goalAmountInput) };
      setGoals([...goals, goal]);
      setGoalInput('');
      setGoalAmountInput('');
    }
  };

  const handleGetBudgetRecommendations = () => {
    // Implement logic to generate budget recommendations based on user's financial situation
    // For simplicity, let's assume some basic recommendations
    const recommendationsData = [
      'Consider increasing your 401k contribution for better long-term savings.',
      'Explore investment options with higher returns based on your risk tolerance.',
      'Build an emergency fund equivalent to 3-6 months of living expenses.',
    ];

    setRecommendations(recommendationsData);
  };

  const mainStyle = {
    marginTop: '95px',
    textAlign: 'left',
    position: 'fixed',
    padding: '20px',
    width: '80%',
    top: 0,
    marginLeft: '30px',
    height: '75px',
  };

  const formSectionStyle = {
    backgroundColor: '#393C45',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const resultSectionStyle = {
    backgroundColor: '#393C45',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const sectionStyle = {
    backgroundColor: '#393C45',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',  // Enable vertical scrolling if content exceeds container height
    maxHeight: '400px',  // Set a maximum height for the container
  };

  return (
    <div style={mainStyle}>
      {/* Expense Tracking Section */}

      <h1 style={{fontWeight:"200",fontSize:"40px"}}>Estimated Monthly Income: ${income}</h1>
      <div style={sectionStyle}>
        <h2>Expense Tracking</h2>
        <label>
          Add Expense:
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseInput}
            onChange={(e) => setExpenseInput(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmountInput}
            onChange={(e) => setExpenseAmountInput(e.target.value)}
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </label>
        <ul style={{marginLeft:"20px"}}>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.name}: ${expense.amount}</li>
          ))}
        </ul>
        <p>Total Expenses: $ <span style={{color:"red"}}>{totalExpenses}</span></p>
      </div>

      <h1 style={{fontWeight:"200",fontSize:"40px"}}>Remaining Monthly Savings: $ <span style={{color:"green"}}>{income-totalExpenses}</span></h1>
        <div style={resultSectionStyle}>
          <h3>Budget Information</h3>
          <p>401K Budget: ${(0.04 * (income-totalExpenses)).toFixed(2)}</p>
          <p>Investments Budget: ${(0.15 * (income-totalExpenses)).toFixed(2)}</p>
          <p>Savings Budget: ${(0.1 * (income-totalExpenses)).toFixed(2)}</p>
        </div>
    </div>
  );
};

export default InteractiveBudgetingToolPage;



