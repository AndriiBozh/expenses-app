import "./expense.css";

const Expense = (props) => {
  const handleDeleteExpense = () => {
    console.log("from Expense, expense key: ", props.expenseId);

    props.deleteExp(props.expenseId);
  };

  return (
    <div className="expense">
      <div>Expense: {props.name}</div>
      <div>Amount: {props.amount}</div>
      <div>Date: {props.date}</div>
      <button className="delete-btn" onClick={handleDeleteExpense}>
        X
      </button>
    </div>
  );
};

export default Expense;
