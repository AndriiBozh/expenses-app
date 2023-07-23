import "./expense-container.css";
import Expense from "./Expense";
import NoExpenses from "./NoExpenses";

const ExpensesContainer = (props) => {
  return (
    <div className="costs-container">
      {props.expenses.length > 0 ? (
        props.expenses.map((expense) => (
          <Expense
            deleteExp={props.onGetId}
            expenseId={expense.expenseId}
            key={expense.expenseId}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      ) : (
        <NoExpenses />
      )}
    </div>
  );
};

export default ExpensesContainer;
