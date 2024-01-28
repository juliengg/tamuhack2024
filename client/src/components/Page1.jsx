import React, { useState } from 'react';

const InteractiveBudgetingToolPage = () => {
  const [annualSalary, setAnnualSalary] = useState('');
  const [budgetInformation, setBudgetInformation] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [goals, setGoals] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [expenseInput, setExpenseInput] = useState('');
  const [expenseAmountInput, setExpenseAmountInput] = useState('');
  const [goalInput, setGoalInput] = useState('');
  const [goalAmountInput, setGoalAmountInput] = useState('');

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
    color: 'black',
    textAlign: 'left',
    position: 'fixed',
    padding: '20px',
    width: '80%',
    top: 0,
    marginLeft: '150px',
    height: '75px',
  };

  const welcomeStyle = {
    backgroundColor: '#e0f7fa',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const formSectionStyle = {
    backgroundColor: '#e0f7fa',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const resultSectionStyle = {
    backgroundColor: '#e0f7fa',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const sectionStyle = {
    backgroundColor: '#e0f7fa',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',  // Enable vertical scrolling if content exceeds container height
    maxHeight: '400px',  // Set a maximum height for the container
  };

  return (
    <div style={mainStyle}>
      <div style={welcomeStyle}>
        <h1>Welcome to Bloom!</h1>
        <p>The Journey for your Financial Success</p>
      </div>

      <div style={formSectionStyle}>
        <h2>Interactive Budgeting Tool</h2>
        <label>
          Enter Your Annual Salary:
          <input type="number" value={annualSalary} onChange={handleSalaryChange} />
        </label>
        <button onClick={handleCalculateBudget}>Calculate Budget</button>
      </div>

      {budgetInformation && (
        <div style={resultSectionStyle}>
          <h3>Budget Information</h3>
          <p>401K Budget: ${budgetInformation.fourk}</p>
          <p>Investments Budget: ${budgetInformation.investing}</p>
          <p>Savings Budget: ${budgetInformation.savings}</p>
        </div>
      )}

      {/* Expense Tracking Section */}
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
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.name}: ${expense.amount}</li>
          ))}
        </ul>
      </div>

      {/* Goal Setting Section */}
      <div style={sectionStyle}>
        <h2>Goal Setting</h2>
        <label>
          Set Goal:
          <input
            type="text"
            placeholder="Expense Name"
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
          />
          <input
            type="number"
            placeholder="Target Amount"
            value={goalAmountInput}
            onChange={(e) => setGoalAmountInput(e.target.value)}
          />
          <button onClick={handleSetGoal}>Set Goal</button>
        </label>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal.name}: ${goal.targetAmount}</li>
          ))}
        </ul>
      </div>

      {/* Budget Recommendations Section */}
      <div style={sectionStyle}>
        <h2>Budget Recommendations</h2>
        <button onClick={handleGetBudgetRecommendations}>Get Recommendations</button>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InteractiveBudgetingToolPage;



