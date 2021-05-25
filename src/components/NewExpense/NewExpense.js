import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isformVisible, toggleForm] = useState(false);
  const ExpenseDataHandler = (expenseData) => {
    const savedExpense = {
      ...expenseData,
      id: (Math.random() * 1000).toFixed(0).toString(),
      date: new Date(expenseData.date),
    };
    props.onSaveExpense(savedExpense);
  };
  const submitemptyFormHandler = () => {
    toggleForm(true);
  };
  const hideForm = () => {
    toggleForm(false);
  };
  return (
    <div className="new-expense">
      {!isformVisible && (
        <button onClick={submitemptyFormHandler}>Add new Expense</button>
      )}
      {isformVisible && (
        <ExpenseForm onSaveData={ExpenseDataHandler} onCancel={hideForm} />
      )}
    </div>
  );
};
export default NewExpense;
