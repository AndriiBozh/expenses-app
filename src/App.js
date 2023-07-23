import { useState } from "react";

import "./app.css";
import ExpensesContainer from "./components/ExpensesContainer";
import FilterExpenses from "./components/FilterExpenses";
import NewExpense from "./components/NewExpense";
import { filterByYear, filterById } from "./helpers";
let allExpenses = [];

function App() {
  const [expenses, setExpenses] = useState(allExpenses);

  const handleGetYear = (year) => {
    const filteredEls = filterByYear(allExpenses, year);
    setExpenses(filteredEls);
  };

  const handleDeleteExpense = (expenseId) => {
    console.log("expense id: ", expenseId);
    const updatedArray = filterById(allExpenses, expenseId);
    console.log("updated arr: ", updatedArray);

    allExpenses = [...updatedArray]; //update main ('database') array

    setExpenses(allExpenses);
  };

  const getNewExpenseData = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
    allExpenses.push(newExpenseData);
  };
  return (
    <div className="app">
      <header className="app-header">Expenses App</header>
      <NewExpense getnewData={getNewExpenseData} />
      <FilterExpenses onGetYear={handleGetYear} />
      <ExpensesContainer expenses={expenses} onGetId={handleDeleteExpense} />
    </div>
  );
}

export default App;
