import { useState } from "react";
import { generateId } from "../helpers";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const expenseId = generateId();

  const newExpense = { expenseId, name, amount, date };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.getnewData(newExpense); //send data to a parent element
    setName("");
    setAmount("");
    setDate("");
  };

  const handleShowNewExpenseForm = () => {
    setShowExpenseForm(true);
  };

  const handleHideExpenseForm = () => {
    setShowExpenseForm(false);
  };

  const expenseForm = (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="expense-input"
        placeholder="Expense Name"
        required={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        id="amount-input"
        required={true}
        step={0.01}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        id="date-input"
        min="2023-01-01"
        max="2024-01-01"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Expense</button>
      <button onClick={handleHideExpenseForm}>Cancel</button>
    </form>
  );

  return showExpenseForm ? (
    expenseForm
  ) : (
    <div>
      <button onClick={handleShowNewExpenseForm}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
